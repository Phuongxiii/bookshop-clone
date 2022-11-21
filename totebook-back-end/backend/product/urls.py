
from django.urls import path
from product.views.get_product import get_product_view, get_products_view

urlpatterns = [
    path('', view=get_products_view, name="product"),
    path('<int:pk>/', view=get_product_view, name="product2"),
]
