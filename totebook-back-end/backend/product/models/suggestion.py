from django.db import models
from product.models.product import Product
from product.models.product_thum import ProductThum

class Suggestion(models.Model):
    category = models.CharField(max_length=100,  blank=False, null=False, default=None)
    product = models.ForeignKey(Product, on_delete=models.CASCADE, related_name='suggestion_field', blank=True, null=True)
    product_suggestion = models.ManyToManyField(ProductThum, blank=True, null=True, related_name='category_field')

