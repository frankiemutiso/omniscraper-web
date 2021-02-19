from django.conf.urls import url
from django.urls import path
from django.views.generic.base import RedirectView
from . import views
from django.contrib.staticfiles.storage import staticfiles_storage

urlpatterns = [
    path('', views.HomeView.as_view(), name="home"),
    path('<slug:slug>', views.download, name='download'),
    path('favicon.ico', RedirectView.as_view(url=staticfiles_storage.url("favicon.ico")))
]
