from django.shortcuts import render
from django.views.decorators.csrf import csrf_exempt
from rest_framework.parsers import JSONParser
from django.http.response import JsonResponse

from .models import Category, Offer
from .serializers import CategorySerializer, OfferSerializer


# Create your views here.
@csrf_exempt
def categoryApi(request, id=0):
    if request.method == 'GET':
        categories = Category.objects.all()
        categories_serializer = CategorySerializer(categories, many=True)
        return JsonResponse(categories_serializer.data, safe=False)
    elif request.method == 'POST':
        category_data = JSONParser().parse(request)
        category_serializer = CategorySerializer(data=category_data)
        if category_serializer.is_valid():
            category_serializer.save()
            return JsonResponse("Added! DONE! :3 ", safe=False)
    elif request.method == 'PUT':
        category_data = JSONParser().parse(request)
        category = Category.objects.get(CategoryId=category_data['CategoryId'])
        category_serializer = CategorySerializer(category, data=category_data)
        if category_serializer.is_valid():
            category_serializer.save()
            return JsonResponse("data updated", safe=False)
        return JsonResponse("nope", safe=False)
    elif request.method == 'DELETE':
        category = Category.objects.get(CategoryId=id)
        category.delete()
        return JsonResponse("Deleted Succeffully!!", safe=False)


@csrf_exempt
def offerApi(request, id=0):
    if request.method == 'GET':
        offers = Offer.objects.all()
        offers_serializer = OfferSerializer(offers, many=True)
        return JsonResponse(offers_serializer.data, safe=False)
    elif request.method == 'POST':
        offer_data = JSONParser().parse(request)
        offer_serializer = OfferSerializer(data=offer_data)
        if offer_serializer.is_valid():
            offer_serializer.save()
            return JsonResponse("Added! DONE! :3 ", safe=False)
    elif request.method == 'PUT':
        offer_data = JSONParser().parse(request)
        offer = Offer.objects.get(OfferId=offer_data['OfferId'])
        offer_serializer = OfferSerializer(offer, data=offer_data)
        if offer_serializer.is_valid():
            offer_serializer.save()
            return JsonResponse("data updated", safe=False)
        return JsonResponse("nope", safe=False)
    elif request.method == 'DELETE':
        offer = Offer.objects.get(OfferId=id)
        offer.delete()
        return JsonResponse("Deleted Succeffully!!", safe=False)