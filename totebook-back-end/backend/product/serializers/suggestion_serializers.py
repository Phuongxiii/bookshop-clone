from rest_framework import serializers
from product.models.suggestion import Suggestion
from product.models.product_thum import ProductThum

class SuggestionSerializers(serializers.ModelSerializer):
    product_thum = serializers.PrimaryKeyRelatedField(queryset=ProductThum.objects.all(), many=True)
    class Meta:
        model = Suggestion
        fields = ['category','product_thum']