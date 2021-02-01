from django.urls import path
from . import views

urlpatterns = [
    path('', views.home, name="home"),
    path('threads/', views.threads, name='threads'),
    path('<slug:slug>', views.download, name='download')
]
