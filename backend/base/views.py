from django.shortcuts import get_object_or_404
from  rest_framework.decorators import api_view
from rest_framework.response import Response
from .models import Product
from .serializer import ProductSerializer

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