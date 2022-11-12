from rest_framework import serializers
from product.models.product import Product
from product.serializers.information_serializers import InformationSerializers
from product.serializers.suggestion_serializers import SuggestionSerializers

class ProductSerializers(serializers.ModelSerializer):
    # title = serializers.CharField()
    # name = serializers.CharField()
    # image = serializers.ImageField(use_url=True)
    # created_at = serializers.DateTimeField()
    # updated_at = serializers.DateTimeField()
    information_field = InformationSerializers(many=True)
    suggestion_field = SuggestionSerializers(many=True)
    class Meta:
        model = Product
        fields = ["title", 'name', 'image', 'price', 'type', 'information_field', 'suggestion_field', 'created_at', 'updated_at']