from rest_framework import serializers
from .models import FlagRequest, TwitterVideo, VideoTag

class VideosSerializer(serializers.ModelSerializer):
    class Meta:
        model = TwitterVideo
        fields = [
            'id', 
            "slug", 
            "url", 
            "parent_tweet_id", 
            "flagged", 
            "video_tags", 
            "video_thumbnail_link_https", 
            "text", 
            "date_saved_utc"
        ]
        extra_kwargs = {"video_tags": {"required": False}}

class TagsSerializer(serializers.ModelSerializer):
    class Meta:
        model = VideoTag
        fields = [
            "id", 
            "tag_name", 
            "slug", 
            "description"
        ]
        extra_kwargs = {"description": {"required":  False}}

class TrendingVideosSerializer(serializers.Serializer):
    path = serializers.CharField()
    path_views = serializers.IntegerField()

class FlagRequestsListSerializer(serializers.Serializer):
    slug = serializers.SlugField()
    total = serializers.IntegerField()
    request_status = serializers.CharField()

class FlagRequestsSerializer(serializers.ModelSerializer):
    class Meta:
        model = FlagRequest
        fields = [
            "id", 
            "flagging_reason", 
            "slug", 
            "twitter_handle", 
            'date_requested', 
            'request_status',
            'date_of_action'
        ]
        extra_kwargs = {"twitter_handle": {"required":  False}}
        