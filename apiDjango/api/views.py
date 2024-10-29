"""Import models y serializers"""
from django.shortcuts import render
from rest_framework import generics
from .serializers import CancelarReservaSerializer
from .models import CancelarReserva
from .serializers import ReservarSerializer
from .models import Reservar
from .serializers import EstadoReservasSerializer
from .models import EstadoReservas
from .serializers import ZonasDisponiblesSerializer
from .models import ZonasDisponibles
from .serializers import ClientesSerializer
from .models import Clientes
from rest_framework.permissions import IsAuthenticated

class ClientesListCreate(generics.ListCreateAPIView):
    """metodos clientes"""
    queryset = Clientes.objects.all()
    serializer_class = ClientesSerializer
    permissions_classes = [IsAuthenticated]

class ClientesDetail(generics.RetrieveUpdateDestroyAPIView):
    """metodos clientes"""
    queryset = Clientes.objects.all()
    serializer_class = ClientesSerializer

class ZonasDisponiblesListCreate(generics.ListCreateAPIView):
    """Métodos para manejar zonas disponibles."""
    queryset = ZonasDisponibles.objects.all()
    serializer_class = ZonasDisponiblesSerializer

class ZonasDisponiblesDetail(generics.RetrieveUpdateDestroyAPIView):
    """Métodos para manejar una zona disponible específica."""
    queryset = ZonasDisponibles.objects.all()
    serializer_class = ZonasDisponiblesSerializer

class EstadoReservasListCreate(generics.ListCreateAPIView):
    """Métodos para manejar estados de reservas."""
    queryset = EstadoReservas.objects.all()
    serializer_class = EstadoReservasSerializer

class EstadoReservasDetail(generics.RetrieveUpdateDestroyAPIView):
    """Métodos para manejar un estado de reserva específico."""
    queryset = EstadoReservas.objects.all()
    serializer_class = EstadoReservasSerializer

class ReservarListCreate(generics.ListCreateAPIView):
    """Métodos para manejar reservas."""
    queryset = Reservar.objects.all()
    serializer_class = ReservarSerializer

class ReservarDetail(generics.RetrieveUpdateDestroyAPIView):
    """Métodos para manejar una reserva específica."""
    queryset = Reservar.objects.all()
    serializer_class = ReservarSerializer

class CancelarReservaListCreate(generics.ListCreateAPIView):
    """Métodos para manejar cancelaciones de reservas."""
    queryset = CancelarReserva.objects.all()
    serializer_class = CancelarReservaSerializer

class CancelarReservaDetail(generics.RetrieveUpdateDestroyAPIView):
    """Métodos para manejar una cancelación de reserva específica."""
    queryset = CancelarReserva.objects.all()
    serializer_class = CancelarReservaSerializer