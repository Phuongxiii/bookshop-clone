from rest_framework import serializers
from product.models.product import Product

class ProductSerializers(serializers.ModelSerializer):
    # title = serializers.CharField()
    # name = serializers.CharField()
    # image = serializers.ImageField(use_url=True)
    # created_at = serializers.DateTimeField()
    # updated_at = serializers.DateTimeField()
    class Meta:
        models = Product
        fields = ["title", 'name', 'image', 'price' 'type', 'information', 'suggestion', 'created_at', 'updated_at']