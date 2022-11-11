from django.db import models
from product.models.product import Product
from product.models.product_thum import ProductThum

class Suggestion(models.Model):
    product = models.ForeignKey(Product, on_delete=models.CASCADE, related_name='product_field', blank=True, null=True)
    product_suggestion = models.ManyToManyField(ProductThum, blank=True, null=True)

