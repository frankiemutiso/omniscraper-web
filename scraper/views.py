from django.http.response import Http404
from .models import TwitterVideo, VideoTag
from .serializers import TwitterVideoSerializer, VideoTagSerializer
from rest_framework.views import APIView
from rest_framework.response import Response
from rest_framework import status
from rest_framework_simplejwt.tokens import RefreshToken
from rest_framework.permissions import AllowAny, IsAuthenticated
from django.utils.decorators import method_decorator
from rest_framework_simplejwt.authentication import JWTAuthentication


def infinite_filter(request):
    limit = request.GET.get("limit")
    offset = request.GET.get("offset")

    return TwitterVideo.objects.exclude(flagged=True).order_by('-date_saved_utc')[int(offset): int(offset) + int(limit)]


def is_there_more_data(request):
    offset = request.GET.get("offset")

    if int(offset) > TwitterVideo.objects.exclude(flagged=True).count():
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


class TwitterVideosList(APIView):
    def get(self, request):
        videos = infinite_filter(self.request)
        serializer = TwitterVideoSerializer(videos, many=True)

        return Response({
            "videos": serializer.data,
            "has_more": is_there_more_data(request)
        })


class TwitterVideoDetail(APIView):
    def get_object(self, slug):
        try:
            return TwitterVideo.objects.get(slug=slug)
        except TwitterVideo.DoesNotExist:
            raise Http404

    def get(self, request, slug):
        video = self.get_object(slug)
        serializer = TwitterVideoSerializer(video)

        return Response(serializer.data)

    def put(self, request, slug):
        video = self.get_object(slug)
        serializer = TwitterVideoSerializer(video, data=request.data)

        if serializer.is_valid() and request.user.is_authenticated:
            serializer.save()
            return Response(serializer.data)

        return Response(serializer.errors, status=status.HTTP_400_BAD_REQUEST)

    def patch(self, request, slug):
        video = self.get_object(slug)
        serializer = TwitterVideoSerializer(
            video, data=request.data, partial=True)

        if serializer.is_valid() and request.user.is_authenticated:
            serializer.save()
            return Response(serializer.data)

        return Response(serializer.errors, status=status.HTTP_400_BAD_REQUEST)


class VideoTagsList(APIView):
    def get(self, request):
        video_tags = VideoTag.objects.all().order_by("tag_name")
        serializer = VideoTagSerializer(video_tags, many=True)
        return Response({"tags": serializer.data})

    def post(self, request):
        serializer = VideoTagSerializer(data=request.data)
        if serializer.is_valid() and request.user.is_authenticated:
            serializer.save()
            return Response(serializer.data, status=status.HTTP_201_CREATED)
        return Response(serializer.errors, status=status.HTTP_400_BAD_REQUEST)


class VideoTagDetail(APIView):
    def get_object(self, slug):
        try:
            return VideoTag.objects.get(slug=slug).twitter_videos.all().order_by('-date_saved_utc')
        except VideoTag.DoesNotExist:
            raise Http404

    def get(self, request, slug):
        videos = self.get_object(slug)
        serializer = TwitterVideoSerializer(videos, many=True)

        return Response({"videos": serializer.data})
