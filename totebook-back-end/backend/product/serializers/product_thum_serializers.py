from rest_framework import serializers
from product.models.product_thum import ProductThum
from product.serializers.suggestion_serializers import SuggestionSerializers

class ProductThumSerializers(serializers.ModelSerializer):
    suggestion_field = SuggestionSerializers(many=True, read_only=True)
    class Meta:
        model = ProductThum
        fields = ('id','name', 'title', 'image','category', 'suggestion_field')
