
from django.urls import path
from product.views.get_product import get_product_view

urlpatterns = [
    path('', view=get_product_view, name="product"),
]
