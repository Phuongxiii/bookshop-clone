from django.db import models
from django.contrib.postgres.fields import ArrayField

class Information(models.Model):
    specifecations = ArrayField(models.TextField(), blank=True, null=True,default=[]) 
    # feature = models.ManyToManyField(Feature, blank=True)
