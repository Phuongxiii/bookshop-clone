from django.db import models

class ProductThum(models.Model):
    name = models.CharField(max_length=60)
    title = models.CharField(max_length = 300)
    image = models.ImageField(upload_to='static')
