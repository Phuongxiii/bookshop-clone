from rest_framework import generics, mixins
from product.models.product import Product
from product.serializers.product_serializers import ProductSerializers


class GetProduct(generics.GenericAPIView):
    queryset = Product.objects.all()
    serializer_class = ProductSerializers
    # lookup_field = 'pk'


get_product_view = GetProduct.as_view