from django.db import models
from django.utils import timezone
from django.utils.text import slugify
import uuid

class VideoTag(models.Model):
    id = models.UUIDField(primary_key=True)
    tag_name = models.CharField(unique=True, max_length=100)
    slug = models.CharField(unique=True, max_length=250, blank=True, null=True)
    description = models.TextField(blank=True, null=True)
    date_created = models.DateTimeField()

    class Meta:
        managed = False
        db_table = 'video_tags'
    
class TwitterVideo(models.Model):
    id = models.UUIDField(primary_key=True)
    url = models.TextField(blank=True, null=True)
    date_saved_utc = models.DateTimeField()
    parent_tweet_id = models.BigIntegerField()
    slug = models.TextField(unique=True, blank=True, null=True)
    flagged = models.BooleanField()
    video_thumbnail_link_https = models.TextField(blank=True, null=True)
    text = models.CharField(max_length=290, blank=True, null=True)
    video_tags = models.ManyToManyField(
        VideoTag, related_name="twitter_videos", blank=True)

    class Meta:
        managed = False
        db_table = 'twitter_videos'

class FlagRequest(models.Model):
    id = models.UUIDField(primary_key=True)
    flagging_reason = models.TextField(blank=True, null=True)
    twitter_handle = models.CharField(max_length=144, blank=True, null=True)
    date_requested = models.DateTimeField()
    date_of_action = models.DateTimeField(blank=True, null=True)
    slug = models.CharField(max_length=250, blank=True, null=True)
    request_status = models.CharField(max_length=100)

    class Meta:
        managed = False
        db_table = 'flag_requests'