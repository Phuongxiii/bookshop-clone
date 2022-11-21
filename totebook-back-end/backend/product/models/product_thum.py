from django.db import models
from product.models.product import Product

class ProductThum(models.Model):
    name = models.CharField(max_length=60)
    title = models.CharField(max_length = 300)
    image = models.URLField(blank=False, null=False,default="")
    category = models.CharField(max_length=100, blank=True, default="")
    product = models.OneToOneField(Product, on_delete=models.CASCADE)

    def __str__(self) -> str:
        return f'{self.name}, {self.title}, {self.category}'
