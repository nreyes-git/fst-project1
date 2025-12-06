from rest_framework import serializers
from .models import Product, CartUser
from rest_framework.validators import UniqueValidator
from django.contrib.auth.models import User


class ProductSerializer(serializers.ModelSerializer):
    class Meta:
        model = Product
        fields = '__all__'

class RegisterSerializer(serializers.ModelSerializer): 
    email = serializers.EmailField(
        required=True,
        validators=[UniqueValidator(queryset=User.objects.all())]
    )
    password = serializers.CharField(min_length=8, write_only=True)
    class Meta:
        model = User
        fields = ('username', 'email', 'password')

class UserSerializer(serializers.ModelSerializer):
    class Meta:
        model = User
        fields = ('id', 'username', 'email')

class CartUserSerializer(serializers.ModelSerializer):
    class Meta:
        model = ProductSerializer
        product_id = serializers.PrimaryKeyRelatedField(
            source='product',
            queryset=Product.objects.all(),
            write_only=True
        )

        class Meta:
            model = CartUser
            fields = ['__all__']