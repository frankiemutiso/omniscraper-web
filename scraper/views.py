import re
from django.http.response import Http404
from django.db.models import Count
from datetime import timedelta, date, datetime
from rest_framework.views import APIView
from rest_framework.response import Response
from rest_framework import status
from rest_framework_simplejwt.tokens import RefreshToken
from rest_framework.permissions import AllowAny, IsAuthenticated
from rest_framework_simplejwt.authentication import JWTAuthentication
from .models import FlagRequest, TwitterVideo, VideoTag
from .serializers import FlagRequestsListSerializer, FlagRequestsSerializer, VideosSerializer, TagsSerializer, TrendingVideosSerializer
from .ga_trends_generator import get_report, initialize_analyticsreporting, package_response, get_ga_trending_videos

def get_infinite_videos(request, slug=None):
    limit = request.GET.get("limit")
    offset = request.GET.get("offset")

    try:
        if slug is None:
            return TwitterVideo.objects.exclude(flagged=True).order_by('-date_saved_utc')[int(offset): int(offset) + int(limit)]
        return VideoTag.objects.get(slug=slug).twitter_videos.all().order_by('-date_saved_utc')[int(offset): int(offset) + int(limit)]
    except:
        raise Http404


def is_there_more_data(request, slug=None):
    offset = request.GET.get("offset")

    if slug == None and int(offset) > TwitterVideo.objects.exclude(flagged=True).count() - int(offset):
        return False

    if slug != None and int(offset) > VideoTag.objects.get(slug=slug).twitter_videos.all().count() - int(offset):
        return False

    return True


class LogoutAndBlacklistToken(APIView):
    permission_classes = (AllowAny,)
    authentication_classes = ()

    def post(self, request):
        try:
            refresh_token = request.data['refresh_token']
            token = RefreshToken(refresh_token)
            token.blacklist()
            return Response(status=status.HTTP_205_RESET_CONTENT)
        except Exception as e:
            return Response(status=status.HTTP_400_BAD_REQUEST)


class Videos(APIView):
    def get(self, request):
        videos = get_infinite_videos(request)
        serializer = VideosSerializer(videos, many=True)

        return Response({
            "videos": serializer.data,
            "has_more": is_there_more_data(request)
        })


class Video(APIView):
    def get_object(self, slug):
        try:
            return TwitterVideo.objects.get(slug=slug)
        except TwitterVideo.DoesNotExist:
            raise Http404

    def get(self, request, slug):
        video = self.get_object(slug)
        serializer = VideosSerializer(video)

        return Response(serializer.data)

    def put(self, request, slug):
        video = self.get_object(slug)
        serializer = VideosSerializer(video, data=request.data)

        if serializer.is_valid() and request.user.is_authenticated:
            serializer.save()
            return Response(serializer.data)

        return Response(serializer.errors, status=status.HTTP_400_BAD_REQUEST)

    def patch(self, request, slug):
        video = self.get_object(slug)
        serializer = VideosSerializer(
            video, data=request.data, partial=True)

        if serializer.is_valid() and request.user.is_authenticated:
            serializer.save()
            return Response(serializer.data)

        return Response(serializer.errors, status=status.HTTP_400_BAD_REQUEST)


class Tags(APIView):
    def get(self, request):
        video_tags = VideoTag.objects.all().order_by("-date_created")
        serializer = TagsSerializer(video_tags, many=True)
        return Response({"tags": serializer.data})

    def post(self, request):
        serializer = TagsSerializer(data=request.data)
        if serializer.is_valid() and request.user.is_authenticated:
            serializer.save()
            return Response(serializer.data, status=status.HTTP_201_CREATED)
        return Response(serializer.errors, status=status.HTTP_400_BAD_REQUEST)

class Tag(APIView):
    def get_object(self, slug):
        try:
            return VideoTag.objects.get(slug=slug)
        except VideoTag.DoesNotExist:
            raise Http404
        
    def get(self, request, slug):
        videos = get_infinite_videos(request, slug)
        serializer = VideosSerializer(videos, many=True)

        return Response({"videos": serializer.data, "has_more": is_there_more_data(request, slug)})
    
    def patch(self, request, slug):
        tag = self.get_object(slug)
        serializer = TagsSerializer(tag, data=request.data, partial=True)
        
        if serializer.is_valid() and request.user.is_authenticated:
            serializer.save()
            return Response(serializer.data, status=status.HTTP_200_OK)
        return Response(serializer.errors, status=status.HTTP_400_BAD_REQUEST)
    
        
class TrendingVideos(APIView):
    def get_object(self, slug):
        try:
            video = TwitterVideo.objects.get(slug=slug)
            return video
        except TwitterVideo.DoesNotExist:
            raise Http404

    def get(self, request):
        analytics = initialize_analyticsreporting()
        response = get_report(analytics)

        trending_paths = get_ga_trending_videos(response)
        
        videos = TwitterVideo.objects.filter(slug__in=trending_paths, 
                                            flagged=False, 
                                            date_saved_utc__gt=datetime.today() - timedelta(7))[:10]

        serializer = VideosSerializer(videos, many=True)
        
        return Response({"trending_videos": serializer.data})

class FlagRequests(APIView):
    def post(self, request):
        serializer = FlagRequestsSerializer(data=request.data)

        if serializer.is_valid():
            serializer.save()
            return Response(serializer.data, status=status.HTTP_201_CREATED)
        return Response(serializer.errors, status=status.HTTP_400_BAD_REQUEST)

    def get(self, request):
        slug = request.GET.get("slug")
        request_status = request.GET.get("request_status")

        if request_status is not None:
            flag_requests = FlagRequest.objects.filter(request_status=request_status).values("slug", "request_status").annotate(total=Count("slug")).order_by("-total")
            serializer = FlagRequestsListSerializer(flag_requests, many=True)

            return Response({"flag_requests": serializer.data})

        if slug is not None: 
            flag_requests = FlagRequest.objects.filter(slug=slug)
            serializer = FlagRequestsSerializer(flag_requests, many=True)

            return Response({"flag_requests": serializer.data})

        return Response(data=None, status=status.HTTP_400_BAD_REQUEST)

    def patch(self, request):
        slug = request.GET.get("slug")
        flag_requests = FlagRequest.objects.filter(slug=slug)  
        
        for x in flag_requests:
            serializer = FlagRequestsSerializer(x, data=request.data, partial=True)

            if serializer.is_valid():
                serializer.save()
            else:
                return Response(serializer.errors, status=status.HTTP_400_BAD_REQUEST)

        return Response(data="Action taken successfully", status=status.HTTP_200_OK)
        
