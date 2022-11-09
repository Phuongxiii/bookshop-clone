
from django.urls import path
from product.views.get_product import get_product_view

urlpatterns = [
    path('<int:pk>/', view=get_product_view, name="product"),
]
