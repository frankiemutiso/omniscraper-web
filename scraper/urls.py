from django.conf.urls import url
from django.urls import path, include
from django.views.generic.base import RedirectView
from . import views
from django.contrib.staticfiles.storage import staticfiles_storage
from rest_framework_simplejwt.views import (
    TokenObtainPairView, TokenRefreshView)

urlpatterns = [
    path('token/obtain/', TokenObtainPairView.as_view(), name="token_create"),
    path('token/refresh/', TokenRefreshView.as_view(), name="token_refresh"),
    path("blacklist/", views.LogoutAndBlacklistToken().as_view(), name="blacklist"),
    path('favicon.ico', RedirectView.as_view(
        url=staticfiles_storage.url("favicon.ico"))),
    path('videos/', views.Videos.as_view(), name="videos"),
    path('<slug:slug>', views.Video.as_view(), name="video"),
    path("tags/", views.Tags.as_view(), name="video_tags"),
    path('tags/<slug:slug>',
         views.Tag.as_view(), name="video_tag_detail"),
    path("trending/", views.TrendingVideos.as_view(), name="trending")

]
