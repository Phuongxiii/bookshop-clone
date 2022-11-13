from django.db import models

class ProductThum(models.Model):
    name = models.CharField(max_length=60)
    title = models.CharField(max_length = 300)
    image = models.URLField(blank=False, null=False,default="")
    category = models.CharField(max_length=100, blank=False, default="")
