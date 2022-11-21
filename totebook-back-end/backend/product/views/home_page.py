from rest_framework import generics
from rest_framework.parsers import MultiPartParser
from product.models.product_thum import ProductThum
from product.serializers.product_thum_serializers import ProductThumSerializers

class HomePage(generics.ListAPIView):
    queryset = ProductThum.objects.all()
    serializer_class = ProductThumSerializers
    parser_classes = [MultiPartParser]

home_page = HomePage.as_view()