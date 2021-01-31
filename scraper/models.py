from django.db import models

# Create your models here.


class TwitterVideo(models.Model):
    id = models.UUIDField(primary_key=True)
    url = models.TextField(blank=True, null=True)
    date_processed_utc = models.DateTimeField()
    tweet_with_video_id = models.BigIntegerField()
    requesting_tweet_id = models.BigIntegerField()
    requested_by = models.TextField(blank=True, null=True)
    slug = models.TextField(unique=True, blank=True, null=True)

    class Meta:
        managed = False
        db_table = 'twitter_videos'
