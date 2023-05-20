from django.contrib import admin

# Register your models here.

from .models import Cliente
from .models import Rutina
from .models import Detalle_Rutina
from .models import Entrenador
from .models import Plan
from .models import Plan_Cliente
from .models import Progreso_Cliente
from .models import Rutina_Cliente
from .models import Ejercicio
from .models import Catergoria
from .models import Producto
from .models import Pedido
from .models import Detalle_Pedido
from .models import Mensaje
from .models import Proveedor
from .models import Compra
from .models import Detalle_Compra

class ClienteAdmin(admin.ModelAdmin):
    list_display = ('id_Cliente', 'Nombre', 'Apellido', 'Fecha_de_nacimiento', 'DNI', 'Dirección', 'Teléfono', 'Email', 'Nombre_de_usuario')

class RutinaAdmin(admin.ModelAdmin):
    list_display = ('id_Rutina', 'Descripción')

class Detalle_RutinaAdmin(admin.ModelAdmin):
    list_display = ('id_Detalle_Rutina', 'id_Rutina', 'Lunes', 'Martes', 'Miércoles', 'Jueves', 'Viernes', 'Sábado', 'Domingo')

class EntrenadorAdmin(admin.ModelAdmin):
    list_display = ('id_Entrenador', 'Nombre', 'Apellido', 'Fecha_de_nacimiento', 'DNI', 'Dirección', 'Teléfono', 'Email', 'Nombre_de_usuario')

class PlanAdmin(admin.ModelAdmin):
    list_display = ('id_Plan', 'Nombre', 'Por_tiempo', 'Duración', 'Valor', 'Vencimiento', 'Descripción')

class Plan_ClienteAdmin(admin.ModelAdmin):
    list_display = ('id_Plan_Cliente', 'id_Cliente', 'id_Plan', 'Fecha_de_compra', 'Fecha_de_vencimiento')

class Progreso_ClienteAdmin(admin.ModelAdmin):
    list_display = ('id_Progreso_Cliente', 'id_Cliente', 'id_Entrenador', 'Fecha', 'Peso', 'Altura', 'IMC', 'Observaciones')

class Rutina_ClienteAdmin(admin.ModelAdmin):
    list_display = ('id_Rutina_Cliente', 'id_Cliente', 'id_Rutina')

class EjercicioAdmin(admin.ModelAdmin):
    list_display = ('id_Ejercicio', 'id_Detalle_Rutina', 'Descripción', 'Observaciones')

class CategoriaAdmin(admin.ModelAdmin):
    list_display = ('id_Categoria', 'Nombre_categoria', 'Descripción')

class ProductoAdmin(admin.ModelAdmin):
    list_display = ('id_Producto', 'Nombre_producto', 'Descripción', 'Precio', 'Cantidad', 'Peso', 'Foto_producto', 'id_Categoria')

class PedidoAdmin(admin.ModelAdmin):
    list_display = ('id_Pedido', 'Fecha', 'Total', 'Forma_de_pago', 'Pagado', 'Entregado', 'Dirección_de_envío', 'Dirección_de_facturación', 'Empresa_envío', 'Nro_guía', 'Costo_envío', 'Comprobante_pago', 'id_Cliente')

class Detalle_PedidoAdmin(admin.ModelAdmin):
    list_display = ('Código_de_barras', 'Cantidad', 'Precio', 'Total', 'Costo_envío', 'id_Pedido', 'id_Producto')

class MensajeAdmin(admin.ModelAdmin):
    list_display = ('id_Mensaje', 'De', 'Mensaje', 'Fecha', 'Leído', 'id_Cliente')

class ProveedorAdmin(admin.ModelAdmin):
    list_display = ('id_Proveedor', 'Nombre_proveedor', 'Dirección', 'País', 'Provincia', 'Teléfono', 'Email')

class CompraAdmin(admin.ModelAdmin):
    list_display = ('id_Compra', 'Fecha', 'Total', 'id_Proveedor')

class Detalle_CompraAdmin(admin.ModelAdmin):
    list_display = ('id_Detalle_Compra', 'Subtotal', 'Cantidad', 'Precio', 'id_Compra', 'id_Producto')


admin.site.register(Cliente, ClienteAdmin)
admin.site.register(Rutina, RutinaAdmin)
admin.site.register(Detalle_Rutina,Detalle_RutinaAdmin)
admin.site.register(Entrenador,EntrenadorAdmin)
admin.site.register(Plan,PlanAdmin)
admin.site.register(Plan_Cliente,Plan_ClienteAdmin)
admin.site.register(Progreso_Cliente,Progreso_ClienteAdmin)
admin.site.register(Rutina_Cliente,Rutina_ClienteAdmin)
admin.site.register(Ejercicio,EjercicioAdmin)
admin.site.register(Catergoria,CategoriaAdmin)
admin.site.register(Producto,ProductoAdmin)
admin.site.register(Pedido,PedidoAdmin)
admin.site.register(Detalle_Pedido,Detalle_PedidoAdmin)
admin.site.register(Mensaje,MensajeAdmin)
admin.site.register(Proveedor,ProveedorAdmin)
admin.site.register(Compra,CompraAdmin)
admin.site.register(Detalle_Compra,Detalle_CompraAdmin)


