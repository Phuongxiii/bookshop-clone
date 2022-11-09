from rest_framework import serializers

class ProductSerializers(serializers.ModelSerializer):
    title = serializers.CharField()
    name = serializers.CharField()
    image = serializers.ImageField(use_url=True)
    created_at = serializers.DateTimeField()
    updated_at = serializers.DateTimeField()