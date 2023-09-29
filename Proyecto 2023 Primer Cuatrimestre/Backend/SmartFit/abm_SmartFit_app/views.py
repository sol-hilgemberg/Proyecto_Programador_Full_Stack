from rest_framework.decorators import api_view
from rest_framework.response import Response
from .models import User
from .serializers import UserSerializer


@api_view(['POST'])
def register_user(request):
    serializer = UserSerializer(data=request.data)
    if serializer.is_valid():
        user = serializer.save()
        user.save()
        return Response({'message': 'Usuario registrado correctamente.'})
    return Response(serializer.errors, status=400)


@api_view(['POST'])
def login_user(request):
    username = request.data.get('usuario')
    password = request.data.get('contraseña')
    try:
        user = User.objects.get(usuario=username, contraseña=password)
        return Response({'message': 'Inicio de sesion con exito.'})
    except User.DoesNotExist:
        return Response({'message': 'Credenciales invalidas.'}, status=401)

@api_view(['GET'])
def get_users(request):
    users = User.objects.all()
    serializer = UserSerializer(users, many=True)
    return Response(serializer.data)

@api_view(['GET'])
def get_user(request, usuario):
    try:
        user = User.objects.get(usuario=usuario)
        serializer = UserSerializer(user)
        return Response(serializer.data)
    except User.DoesNotExist:
        return Response({'message': 'Usuario no encontrado.'}, status=404)

@api_view(['PATCH'])
def update_user(request, usuario):
    try:
        user = User.objects.get(usuario=usuario)
        serializer = UserSerializer(user, data=request.data, partial=True)
        if serializer.is_valid():
            serializer.save()
            print(serializer.data)
            return Response(serializer.data)
        return Response(serializer.errors, status=400)
    except User.DoesNotExist:
        return Response({'message': 'Usuario no encontrado.'}, status=404)
