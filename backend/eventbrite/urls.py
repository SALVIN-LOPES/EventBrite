
from django.contrib import admin
from django.urls import path, include

# adding the settings and sgtatic for adding the images via pillow
from django.conf import settings
from django.conf.urls.static import static

urlpatterns = [
    path('admin/', admin.site.urls),

    path('api/users/', include('api.urls.user_urls')),
    path('api/events/', include('api.urls.event_urls')),
]
urlpatterns += static(settings.MEDIA_URL, document_root = settings.MEDIA_ROOT)


