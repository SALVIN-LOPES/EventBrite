from django.urls import path, include
from api.views import event_views as views

urlpatterns = [
    path('',views.getEvents, name="getEvents"),
    path('create/',views.createEvent, name="createEvent"),
    path('upload/',views.uploadImage, name="uploadImage"),
    path('update/<str:pk>/',views.updateEvent, name="updateEvent"),
    path('delete/<str:pk>/',views.deleteEvent, name="deleteEvent"),
]