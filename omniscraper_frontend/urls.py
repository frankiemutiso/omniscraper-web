from django.urls import path, re_path
from django.views.generic.base import RedirectView
from django.contrib.staticfiles.storage import staticfiles_storage
from django.views.generic import TemplateView
from . import views

urlpatterns = [
    re_path(r'^(?:.*)/?$', views.index),
    path('favicon.ico', RedirectView.as_view(
        url=staticfiles_storage.url("favicon.ico"))),
    # path('service-worker.js', (TemplateView.as_view(template_name="omniscraper_frontend/service-worker.js",
    #                                                 content_type='application/javascript', )), name='service-worker.js'),
]
