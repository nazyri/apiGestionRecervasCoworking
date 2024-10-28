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

class ClientesUpdate(generics.UpdateAPIView):
    """metodos clientes"""
    queryset = Clientes.objects.all()
    serializer_class = ClientesSerializer
    lookup_field = 'id'

class ClientesDelete(generics.DestroyAPIView):
    """metodos clientes"""
    queryset = Clientes.objects.all()
    serializer_class = ClientesSerializer
    lookup_field = 'id'

class ZonasDisponiblesListCreate(generics.ListCreateAPIView):
    """Métodos para manejar zonas disponibles."""
    queryset = ZonasDisponibles.objects.all()
    serializer_class = ZonasDisponiblesSerializer

class ZonasDisponiblesDetail(generics.RetrieveUpdateDestroyAPIView):
    """Métodos para manejar una zona disponible específica."""
    queryset = ZonasDisponibles.objects.all()
    serializer_class = ZonasDisponiblesSerializer

class ZonasDisponiblesUpdate(generics.UpdateAPIView):
    """Métodos para actualizar una zona disponible específica."""
    queryset = ZonasDisponibles.objects.all()
    serializer_class = ZonasDisponiblesSerializer
    lookup_field = 'id'

class ZonasDisponiblesDelete(generics.DestroyAPIView):
    """Métodos para eliminar una zona disponible específica."""
    queryset = ZonasDisponibles.objects.all()
    serializer_class = ZonasDisponiblesSerializer
    lookup_field = 'id'

class EstadoReservasListCreate(generics.ListCreateAPIView):
    """Métodos para manejar estados de reservas."""
    queryset = EstadoReservas.objects.all()
    serializer_class = EstadoReservasSerializer

class EstadoReservasDetail(generics.RetrieveUpdateDestroyAPIView):
    """Métodos para manejar un estado de reserva específico."""
    queryset = EstadoReservas.objects.all()
    serializer_class = EstadoReservasSerializer

class EstadoReservasUpdate(generics.UpdateAPIView):
    """Métodos para actualizar un estado de reserva específico."""
    queryset = EstadoReservas.objects.all()
    serializer_class = EstadoReservasSerializer
    lookup_field = 'id'

class EstadoReservasDelete(generics.DestroyAPIView):
    """Métodos para eliminar un estado de reserva específico."""
    queryset = EstadoReservas.objects.all()
    serializer_class = EstadoReservasSerializer
    lookup_field = 'id'

class ReservarListCreate(generics.ListCreateAPIView):
    """Métodos para manejar reservas."""
    queryset = Reservar.objects.all()
    serializer_class = ReservarSerializer

class ReservarDetail(generics.RetrieveUpdateDestroyAPIView):
    """Métodos para manejar una reserva específica."""
    queryset = Reservar.objects.all()
    serializer_class = ReservarSerializer

class ReservarUpdate(generics.UpdateAPIView):
    """Métodos para actualizar una reserva específica."""
    queryset = Reservar.objects.all()
    serializer_class = ReservarSerializer
    lookup_field = 'id'

class ReservarDelete(generics.DestroyAPIView):
    """Métodos para eliminar una reserva específica."""
    queryset = Reservar.objects.all()
    serializer_class = ReservarSerializer
    lookup_field = 'id'

class CancelarReservaListCreate(generics.ListCreateAPIView):
    """Métodos para manejar cancelaciones de reservas."""
    queryset = CancelarReserva.objects.all()
    serializer_class = CancelarReservaSerializer

class CancelarReservaDetail(generics.RetrieveUpdateDestroyAPIView):
    """Métodos para manejar una cancelación de reserva específica."""
    queryset = CancelarReserva.objects.all()
    serializer_class = CancelarReservaSerializer

class CancelarReservaUpdate(generics.UpdateAPIView):
    """Métodos para actualizar una cancelación de reserva específica."""
    queryset = CancelarReserva.objects.all()
    serializer_class = CancelarReservaSerializer
    lookup_field = 'id'

class CancelarReservaDelete(generics.DestroyAPIView):
    """Métodos para eliminar una cancelación de reserva específica."""
    queryset = CancelarReserva.objects.all()
    serializer_class = CancelarReservaSerializer
    lookup_field = 'id'
