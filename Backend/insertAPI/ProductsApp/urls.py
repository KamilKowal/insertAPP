from django.contrib import admin
from django.conf.urls import url
from . import views

urlpatterns = [
    url(r'^category/$', views.categoryApi),
    url(r'^category/([0-9]+)$', views.categoryApi),
    url(r'^offer/$', views.offerApi),
    url(r'^offer/([0-9]+)$', views.offerApi),
]
