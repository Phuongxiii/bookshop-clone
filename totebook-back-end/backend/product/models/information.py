from django.db import models
from django.contrib.postgres.fields import ArrayField
from product.models.product import Product

class Information(models.Model):
    specifecations = ArrayField(models.TextField(), blank=True, null=True,default=[]) 
    product = models.ForeignKey(Product, on_delete=models.CASCADE, related_name='information_field', default=None)
    # feature = models.ManyToManyField(Feature, blank=True)
