from django.db import models
from django.contrib.postgres.fields import ArrayField

class Product(models.Model):
    title = models.TextField()
    name = models.CharField(max_length=60)
    image = models.ImageField(upload_to='static/')
    price = models.CharField(max_length=20, null=True,blank=True, default="00.00")
    description = models.TextField(blank=True, null=True)
    category = models.CharField(max_length=100, default='', blank=True, null=True)
    video = models.URLField(blank=True, null=True)
    type = ArrayField(models.CharField(max_length=100),default=list)
    created_at = models.DateTimeField(auto_now_add=True)
    updated_at = models.DateTimeField(auto_now=True)