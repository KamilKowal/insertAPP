from django.db import models


# Create your models here.
class Category(models.Model):
    CategoryId = models.AutoField(primary_key=True)
    CategoryName = models.CharField(max_length=30, default="Something")
    Ordering = models.IntegerField(default=0)


class Offer(models.Model):
    OfferId = models.AutoField(primary_key=True)
    OfferCategory = models.ForeignKey(Category, on_delete=models.CASCADE)
    OfferName = models.CharField(max_length=30, default="Something")
    description = models.CharField(max_length=250, default="Something")
    price = models.IntegerField(default=0)
    created_at = models.DateField(null=True)



