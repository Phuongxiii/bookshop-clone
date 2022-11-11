from django.db import models
from django.contrib.postgres.fields import ArrayField

class Product(models.Model):
    title = models.TextField()
    name = models.CharField(max_length=60)
    image = models.ImageField(upload_to='static/')
    price = models.DecimalField(max_digits=8, decimal_places=2, default=00.00)
    type = ArrayField(models.CharField(max_length=100), blank=True, null=True,default=[])
    # information = models.ManyToManyField(Information, blank=True)
    # suggestion = models.ForeignKey(Suggestion, on_delete=models.CASCADE, blank=True, null=True)
    created_at = models.DateTimeField(auto_now_add=True)
    updated_at = models.DateTimeField(auto_now=True)