from rest_framework import serializers
from product.models.feature import Feature

class FeatureSerializers(serializers.ModelSerializer):
    class Meta:
        model = Feature
        fields = ['icon', 'feature_name', 'title', 'information_feature', 'image']