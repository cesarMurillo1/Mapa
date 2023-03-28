#from django.conf.urls import url
from django.urls import re_path
from EmpresaApp import views

urlpatterns = [
    re_path(r'^empresa$', views.EmpresaApi),
    re_path(r'^empresa/([0-9])$', views.EmpresaApi)
]