from django.db import models
from product.models.information import Information

class Feature(models.Model):
    icon = models.URLField()
    feature_name = models.CharField(max_length = 60)
    title = models.CharField(max_length = 300)
    information_feature = models.TextField()
    image = models.URLField()
    information = models.ForeignKey(Information,related_name='feature_field', on_delete=models.CASCADE)
