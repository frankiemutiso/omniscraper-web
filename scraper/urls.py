from django.urls import path
from . import views

urlpatterns = [
    path('', views.HomeView.as_view(), name="home"),
    path('<slug:slug>', views.download, name='download')
]
