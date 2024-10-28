from django.urls import path
from rest_framework_simplejwt.views import TokenObtainPairView, TokenRefreshView
from .views import (
    ClientesListCreate, ClientesDetail, ClientesUpdate, ClientesDelete,
    ZonasDisponiblesListCreate, ZonasDisponiblesDetail, ZonasDisponiblesUpdate, ZonasDisponiblesDelete,
    EstadoReservasListCreate, EstadoReservasDetail, EstadoReservasUpdate, EstadoReservasDelete,
    ReservarListCreate, ReservarDetail, ReservarUpdate, ReservarDelete,
    CancelarReservaListCreate, CancelarReservaDetail, CancelarReservaUpdate, CancelarReservaDelete,
)

urlpatterns = [
    # URLs para Clientes
    path('clientes/', ClientesListCreate.as_view(), name='clientes-list-create'),
    path('clientes/detail/', ClientesDetail.as_view(), name='clientes-detail'),
    path('clientes/update/<int:id>/', ClientesUpdate.as_view(), name='clientes-update'),
    path('clientes/delete/<int:id>/', ClientesDelete.as_view(), name='clientes-delete'),

    # URLs para ZonasDisponibles
    path('zonas/', ZonasDisponiblesListCreate.as_view(), name='zonas-list-create'),
    path('zonas/detail/', ZonasDisponiblesDetail.as_view(), name='zonas-detail'),
    path('zonas/update/<int:id>/', ZonasDisponiblesUpdate.as_view(), name='zonas-update'),
    path('zonas/delete/<int:id>/', ZonasDisponiblesDelete.as_view(), name='zonas-delete'),

    # URLs para EstadoReservas
    path('estado-reservas/', EstadoReservasListCreate.as_view(), name='estado-reservas-list-create'),
    path('estado-reservas/detail/', EstadoReservasDetail.as_view(), name='estado-reservas-detail'),
    path('estado-reservas/update/<int:id>/', EstadoReservasUpdate.as_view(), name='estado-reservas-update'),
    path('estado-reservas/delete/<int:id>/', EstadoReservasDelete.as_view(), name='estado-reservas-delete'),

    # URLs para Reservar
    path('reservar/', ReservarListCreate.as_view(), name='reservar-list-create'),
    path('reservar/detail/', ReservarDetail.as_view(), name='reservar-detail'),
    path('reservar/update/<int:id>/', ReservarUpdate.as_view(), name='reservar-update'),
    path('reservar/delete/<int:id>/', ReservarDelete.as_view(), name='reservar-delete'),

    # URLs para CancelarReserva
    path('cancelar-reserva/', CancelarReservaListCreate.as_view(), name='cancelar-reserva-list-create'),
    path('cancelar-reserva/detail/', CancelarReservaDetail.as_view(), name='cancelar-reserva-detail'),
    path('cancelar-reserva/update/<int:id>/', CancelarReservaUpdate.as_view(), name='cancelar-reserva-update'),
    path('cancelar-reserva/delete/<int:id>/', CancelarReservaDelete.as_view(), name='cancelar-reserva-delete'),
    
    path('token/', TokenObtainPairView.as_view(), name='token_obtain_pair'),
    path('token/resfresh/', TokenRefreshView.as_view(), name='token_refresh'),
]
