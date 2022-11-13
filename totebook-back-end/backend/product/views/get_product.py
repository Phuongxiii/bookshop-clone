from rest_framework import generics
from rest_framework.parsers import MultiPartParser
from product.models.product import Product
from product.serializers.product_serializers import ProductSerializers


class GetProduct(generics.CreateAPIView):
    queryset = Product.objects.all()
    serializer_class = ProductSerializers
    parser_classes = [MultiPartParser]
    # lookup_field = 'pk'


get_product_view = GetProduct.as_view()