# Generated by Django 4.2 on 2023-04-30 20:07

from django.conf import settings
from django.db import migrations, models
import django.db.models.deletion


class Migration(migrations.Migration):

    initial = True

    dependencies = [
        migrations.swappable_dependency(settings.AUTH_USER_MODEL),
    ]

    operations = [
        migrations.CreateModel(
            name='Event',
            fields=[
                ('_id', models.AutoField(editable=False, primary_key=True, serialize=False)),
                ('event_name', models.CharField(blank=True, max_length=500, null=True)),
                ('data', models.TextField(blank=True, null=True)),
                ('location', models.CharField(blank=True, max_length=500, null=True)),
                ('image', models.ImageField(blank=True, default='/placeholder.jpg', null=True, upload_to='')),
                ('is_liked', models.BooleanField(default=False)),
                ('time', models.DateTimeField(auto_now_add=True)),
                ('user', models.ForeignKey(null=True, on_delete=django.db.models.deletion.SET_NULL, to=settings.AUTH_USER_MODEL)),
            ],
        ),
    ]
