from rest_framework import serializers
from product.models.product_thum import ProductThum
from product.serializers.suggestion_serializers import SuggestionSerializers

class ProductThumSerializers(serializers.ModelSerializer):
    category_field = SuggestionSerializers(many=True, read_only=True)
    class Meta:
        model = ProductThum
        fields = ('name', 'title', 'image')