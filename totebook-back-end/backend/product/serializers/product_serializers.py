from rest_framework import serializers
from product.models.product import Product
from product.serializers.information_serializers import InformationSerializers
from product.serializers.suggestion_serializers import SuggestionSerializers

class ProductSerializers(serializers.ModelSerializer):
    information_field = InformationSerializers(many=True)
    suggestion_field = SuggestionSerializers(many=True)
    image = serializers.ImageField(use_url=True)
    class Meta:
        model = Product
        fields = ['id','title', 'name', 'image', 'price', 'description','category',  'video', 'type', 
        'information_field', 'suggestion_field',
         'created_at', 'updated_at']