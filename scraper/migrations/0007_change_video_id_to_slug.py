# Generated by Django 3.1.5 on 2022-07-27 05:45

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('scraper', '0006_add_is_approved_field'),
    ]

    operations = [
        migrations.RemoveField(
            model_name='flagrequest',
            name='video_id',
        ),
        migrations.AddField(
            model_name='flagrequest',
            name='slug',
            field=models.SlugField(blank=True, max_length=250, null=True, unique=True),
        ),
    ]
