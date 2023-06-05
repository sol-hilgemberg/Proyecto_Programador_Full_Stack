from rest_framework import serializers
from .models import User

class UserSerializer(serializers.ModelSerializer):
    
    class Meta:
        model = User
        fields = ['id', 'usuario', 'contraseña', 'nombre', 'apellido', 'fechaNacimiento', 'email']  
