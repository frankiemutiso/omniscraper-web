from rest_framework import serializers
from .models import TwitterVideo, VideoTag


class VideosSerializer(serializers.ModelSerializer):
    class Meta:
        model = TwitterVideo
        fields = ['id', "slug", "url", "parent_tweet_id", "flagged", "tags", "video_thumbnail_link_https", "text", "date_saved_utc"]
        extra_kwargs = {"tags": {"required": False}}


class TagsSerializer(serializers.ModelSerializer):
    # twitter_videos = VideosSerializer(many=True, read_only=True)

    class Meta:
        model = VideoTag
        fields = ["id", "tag_name", "slug", "description"]
        extra_kwargs = {"description": {"required":  False}}

class TrendingVideosSerializer(serializers.Serializer):
    path = serializers.CharField()
    path_views = serializers.IntegerField()
        