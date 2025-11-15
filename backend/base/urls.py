from django.urls import path
from .views import get_products
from .views import get_product_details


urlpatterns = [
    path('products/',get_products, name="products"),
    path('products/<int:pk>/',get_product_details, name="product-details"),
]