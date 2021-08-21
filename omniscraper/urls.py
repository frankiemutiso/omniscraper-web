from django.contrib import admin
from django.urls import path, include
from django.views.generic import TemplateView

urlpatterns = [
    path('api/', include('scraper.urls')),
    path('admin/', admin.site.urls),
    path('service-worker.js', (TemplateView.as_view(template_name="omniscraper_frontend/service-worker.js",
                                                    content_type='application/javascript', )), name='service-worker.js'),
    path('', include('omniscraper_frontend.urls')),
    
]
