from django.db import models
from django.utils import timezone
from django.utils.text import slugify
import uuid

class TwitterVideo(models.Model):
    id = models.CharField(primary_key=True, max_length=36)
    date_saved_utc = models.DateTimeField()
    slug = models.CharField(unique=True, max_length=10, blank=True, null=True)
    url = models.TextField(blank=True, null=True)
    parent_tweet_id = models.BigIntegerField()
    video_thumbnail_link_https = models.TextField(blank=True, null=True)
    text = models.CharField(max_length=290, blank=True, null=True)
    flagged = models.BooleanField(blank=True, null=True, default=False)

    class Meta:
        db_table = 'twitter_videos'

class VideoTag(models.Model):
    id = models.UUIDField(primary_key=True, default=uuid.uuid4, editable=False)
    tag_name = models.CharField(max_length=100, unique=True)
    slug = models.SlugField(unique=True,
                            max_length=250, null=True, blank=True)
    description = models.TextField(null=True, blank=True)
    date_created = models.DateTimeField(auto_now_add=True)
    twitter_videos = models.ManyToManyField(
        TwitterVideo, related_name="tags", blank=True)

    def save(self, *args, **kwargs):
        if not self.slug:
            self.slug = slugify(self.tag_name)
        super(VideoTag, self).save(*args, **kwargs)

    class Meta:
        managed = True
        db_table = 'video_tags'

class FlagRequest(models.Model):
    REQUEST_CHOICES = [
        ('Approved', 'Approved'), 
        ('Pending', 'Pending'), 
        ('Rejected', 'Rejected')
        ]

    id = models.UUIDField(primary_key=True, default=uuid.uuid4)
    slug = models.SlugField(unique=False,
                            max_length=250, null=True, blank=True)
    flagging_reason = models.TextField(null=True, blank=True)
    twitter_handle = models.CharField(max_length=144, blank=True, null=True)
    date_requested = models.DateTimeField(auto_now_add=True)
    date_of_action = models.DateTimeField(null=True, blank=True)
    request_status = models.CharField(max_length=100, choices=REQUEST_CHOICES, default="Pending")

    def save(self, *args, **kwargs):
        if self.id:
           self.date_of_action = timezone.now()
        super().save(*args, **kwargs)

    class Meta:
        managed = True
        db_table = "flag_requests"
