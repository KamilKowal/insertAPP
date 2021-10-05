from rest_framework import serializers
from .models import Category, Offer


class CategorySerializer(serializers.ModelSerializer):
    class Meta:
        model = Category
        fields = ('CategoryId',
                  "CategoryName",
                  "Ordering"
                  )


class OfferSerializer(serializers.ModelSerializer):
    class Meta:
        model = Offer
        fields = ("OfferId",
                  "OfferCategory",
                  "OfferName",
                  "description",
                  "price",
                  "created_at")
