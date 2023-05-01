from django.db import models
from django.contrib.auth.models import User

class Event(models.Model):
    _id = models.AutoField(primary_key=True, editable=False)
    user = models.ForeignKey(User, on_delete=models.SET_NULL, null=True)

    event_name = models.CharField(max_length=500,null=True, blank=True)
    data = models.TextField(null=True, blank =True)
    location = models.CharField(max_length=500,null=True, blank=True)
    image = models.ImageField(null=True, blank=True, default='/placeholder.jpg')
    is_liked = models.BooleanField(default=False)
    time = models.DateTimeField(auto_now_add=True)

    def __str__(self):
        return str(self.event_name)