from rest_framework import generics
from rest_framework.parsers import MultiPartParser
from product.models.product import Product
from product.serializers.product_serializers import ProductSerializers


class GetProducts(generics.ListAPIView):
    queryset = Product.objects.all()
    serializer_class = ProductSerializers
    parser_classes = [MultiPartParser]

get_products_view = GetProducts.as_view()

class GetProduct(generics.RetrieveAPIView):
    queryset = Product.objects.all()
    serializer_class = ProductSerializers
    parser_classes = [MultiPartParser]
    lookup_field = 'pk'

get_product_view = GetProduct.as_view()