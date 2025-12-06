from django.urls import path
from .views import get_products, get_product_details, register_user, logout_user, profile_view

from rest_framework_simplejwt.views import (
    TokenObtainPairView,
    TokenRefreshView
)


urlpatterns = [
    path('register/', register_user, name="register"),
    path('logout/', logout_user, name="logout"),
    path('profile/', profile_view, name="profile"),

    path('api/token/', TokenObtainPairView.as_view(), name='token_obtain_pair'),
    path('api/token/refresh/', TokenRefreshView.as_view(), name='token_refresh'),

    path('products/',get_products, name="products"),     
    path('product/<int:pk>/', get_product_details, name="product-detail"),   
]

