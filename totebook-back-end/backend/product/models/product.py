from django.db import models
import os

class Product(models.Model):
    title = models.TextField()
    name = models.CharField(max_length=60)
    image = models.ImageField(upload_to='static/')
    created_at = models.DateTimeField(auto_now_add=True)
    updated_at = models.DateTimeField(auto_now=True)