from rest_framework import serializers
from EmpresaApp.models import Empresas

class EmpresaSerializer(serializers.ModelSerializer):
    class Meta:
        model=Empresas
        fields=('id', 'nombre', 'descripcion', 'ubicacion', 'telefono', 'fechaFundacion', 'email', 'paginaWeb')