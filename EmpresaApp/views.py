from django.shortcuts import render
from django.views.decorators.csrf import csrf_exempt
from rest_framework.parsers import JSONParser
from django.http.response import JsonResponse

from EmpresaApp.models import Empresas
from EmpresaApp.serializers import EmpresaSerializer

# Create your views here.

@csrf_exempt

def EmpresaApi(request, id=0):
    if request.method=='GET':
        empresas = Empresas.objects.all()
        empresas_serializer = EmpresaSerializer(empresas, many=True)
        return JsonResponse(empresas_serializer.data, safe=False)
    elif request.method=='POST':
        empresa_data = JSONParser().parse(request)
        empresas_serializer = EmpresaSerializer(data=empresa_data)
        if empresas_serializer.is_valid():
            empresas_serializer.save()
            return JsonResponse("Empresa Añadida Satisfactoriamente", safe=False)
        return JsonResponse("Fallo al Añadir", safe=False)
    elif request.method == 'PUT':
        empresa_data = JSONParser().parse(request)
        empresa = Empresas.objects.get(id=empresa_data['id'])
        empresas_serializer = EmpresaSerializer(empresa, data=empresa_data)
        if empresas_serializer.is_valid():
            empresas_serializer.save()
            return JsonResponse("Actualización Exitosa", safe=False)
        return JsonResponse("Fallo al actualizar")
    elif request.method == 'DELETE':
        empresa = Empresas.objects.get(id=id)
        empresa.delete()
        return JsonResponse("Eliminación Exitosa", safe=False)

