from django.urls import path
from rest_framework_simplejwt.views import TokenObtainPairView, TokenRefreshView
from . import views

urlpatterns = [
    # URLs para Clientes
    path('clientes/', views.ClientesListCreate.as_view(), name='clientes-list'),
    path('clientes/<int:pk>/', views.ClientesDetail.as_view(), name='clientes-detail'),

    # URLs para ZonasDisponibles
    path('zonas/', views.ZonasDisponiblesListCreate.as_view(), name='zonas-list'),
    path('zonas/<int:pk>/', views.ZonasDisponiblesDetail.as_view(), name='zonas-detail'),

    # URLs para EstadoReservas
    path('estado-reservas/', views.EstadoReservasListCreate.as_view(), name='estado-reservas-list'),
    path('estado-reservas/<int:pk>/', views.EstadoReservasDetail.as_view(), name='estado-reservas-detail'),

    # URLs para Reservar
    path('reservar/', views.ReservarListCreate.as_view(), name='reservar-list'),
    path('reservar/<int:pk>/', views.ReservarDetail.as_view(), name='reservar-detail'),

    # URLs para CancelarReserva
    path('cancelar-reserva/', views.CancelarReservaListCreate.as_view(), name='cancelar-reserva-list'),
    path('cancelar-reserva/<int:pk>/', views.CancelarReservaDetail.as_view(), name='cancelar-reserva-detail'),
    
    # URLs para autenticación
    path('token/', TokenObtainPairView.as_view(), name='token_obtain_pair'),
    path('token/refresh/', TokenRefreshView.as_view(), name='token_refresh'),  # Corrección aquí
]
