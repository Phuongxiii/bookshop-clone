from django.db import models
from django.contrib.postgres.fields import ArrayField

class Product(models.Model):
    title = models.TextField()
    name = models.CharField(max_length=60)
    image = models.ImageField(upload_to='static/')
    price = models.DecimalField(max_digits=5, null=True,blank=True, decimal_places=1, default=00.0)
    type = ArrayField(models.CharField(max_length=100), blank=True, null=True,default=list)
    created_at = models.DateTimeField(auto_now_add=True)
    updated_at = models.DateTimeField(auto_now=True)