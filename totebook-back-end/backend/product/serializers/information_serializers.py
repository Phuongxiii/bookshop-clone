from rest_framework import serializers
from product.models.information import Information
from product.serializers.feature_serializers import FeatureSerializers

class InformationSerializers(serializers.ModelSerializer):
    feature_field = serializers.ListField(child=FeatureSerializers(many=True))
    class Meta: 
        model = Information
        fields = [ 'feature_field','specifecations']