from django.shortcuts import get_object_or_404
from  rest_framework.decorators import api_view, permission_classes
from rest_framework.response import Response
from .models import Product
from .serializer import ProductSerializer, UserSerializer
from rest_framework import status
from rest_framework.permissions import IsAuthenticated
from rest_framework_simplejwt.tokens import RefreshToken
# Create your views here.

@api_view(['GET'])
def get_products(request):
    products = Product.objects.all()
    serializer = ProductSerializer(products, many=True)
    return Response(serializer.data)

@api_view(['GET'])
def get_product_details(request, pk):
    product = get_object_or_404(Product, pk=pk)
    serialzer = ProductSerializer(product)
    return Response(serialzer.data)

# Register user function
@api_view(['POST'])
def register_user(request):
    serializer = RegisterSerializer(data=request.data)
    if serializer.is_valid():
        serializer.save()
        return Response(serializer.data, status=status.HTTP_201_CREATED)
    return Response(serializer.errors, status=status.HTTP_400_BAD_REQUEST)

@api_view(['POST'])
def logout_user(request):
    refresh_token = request.data.get('refresh')
    if not refresh_token:
        return Response({"error": "Refresh token is required."}, status=status.HTTP_400_BAD_REQUEST)
    
    try: 
        token = RefreshToken(refresh_token)
        token.blacklist()
        return Response({"detail": "Logout successful."}, status=status.HTTP_205_RESET_CONTENT)
    except Exception as e:
        return Response({"error": "Invalid token."}, status=status.HTTP_400_BAD_REQUEST)
    
@api_view(['GET'])
def profile_view(request):
    serializer = UserSerializer(request.user)
    return Response(serializer.data)