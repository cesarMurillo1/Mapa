from django.db import models

# Create your models here.
class Empresas(models.Model):
    nombre = models.CharField(max_length=100)
    descripcion = models.CharField(max_length=500)
    ubicacion = models.CharField(max_length=100)
    telefono = models.CharField(max_length=100)
    fechaFundacion = models.DateField()
    email = models.CharField(max_length=100)
    paginaWeb = models.CharField(max_length=500)

