from django.contrib import admin
from product.models.product import Product
from product.models.feature import Feature
from product.models.information import Information
from product.models.suggestion import Suggestion
from product.models.product_thum import ProductThum

# Register your models here.
admin.site.register(Product)
admin.site.register(Feature)
admin.site.register(Information)
admin.site.register(Suggestion)
admin.site.register(ProductThum)