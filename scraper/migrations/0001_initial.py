# Generated by Django 3.1.5 on 2021-02-02 20:18

from django.db import migrations, models


class Migration(migrations.Migration):

    initial = True

    dependencies = [
    ]

    operations = [
        migrations.CreateModel(
            name='TwitterVideo',
            fields=[
                ('id', models.UUIDField(primary_key=True, serialize=False)),
                ('url', models.TextField(blank=True, null=True)),
                ('date_processed_utc', models.DateTimeField()),
                ('tweet_with_video_id', models.BigIntegerField()),
                ('requesting_tweet_id', models.BigIntegerField()),
                ('requested_by', models.TextField(blank=True, null=True)),
                ('slug', models.TextField(blank=True, null=True, unique=True)),
            ],
            options={
                'db_table': 'twitter_videos',
                'managed': False,
            },
        ),
    ]
