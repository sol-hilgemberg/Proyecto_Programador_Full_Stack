from django.db import models

# Create your models here.
# Tablas DB Sprint 1.

class Cliente(models.Model):
    id_Cliente = models.AutoField(primary_key=True)
    Nombre = models.CharField(max_length=60, blank=False)
    Apellido = models.CharField(max_length=60, blank=False)
    Fecha_de_nacimiento = models.DateField(blank=False)
    DNI = models.IntegerField(blank=False)
    Dirección = models.CharField(max_length=100, blank=False)
    Teléfono = models.IntegerField(blank=False)
    Email = models.CharField(max_length=100, blank=False)
    Nombre_de_usuario = models.CharField(max_length=60)
    class meta:
        db_table = 'Cliente'
        verbose_name = 'Cliente'
        verbose_name_plural = 'Clientes'
    def __unicode__(self):
        return self.Nombre
    def __str__(self):
        return self.Nombre


class Rutina(models.Model):
    id_Rutina = models.AutoField(primary_key=True)
    Descripción = models.TextField(blank=False)
    class meta:
        db_table = 'Rutina'
        verbose_name = 'Rutina'
        verbose_name_plural = 'Rutinas'
    def __unicode__(self):
        return self.Descripción
    def __str__(self):
        return self.Descripción
    


class Detalle_Rutina(models.Model):
    id_Detalle_Rutina = models.AutoField(primary_key=True)
    id_Rutina = models.ForeignKey(Rutina, to_field='id_Rutina',on_delete=models.CASCADE)
    Lunes = models.BigIntegerField(blank=False)
    Martes = models.BigIntegerField(blank=False)
    Miércoles = models.BigIntegerField(blank=False)
    Jueves = models.BigIntegerField(blank=False)
    Viernes = models.BigIntegerField(blank=False)
    Sábado = models.BigIntegerField(blank=False)
    Domingo = models.BigIntegerField(blank=False)
    class meta:
        db_table = 'Detalle_rutina'
        verbose_name = 'Detalle_rutina'
        verbose_name_plural = 'Detalle_rutinas'
    def __unicode__(self):
        return self.id_Detalle_Rutina
    def __str__(self):
        return self.id_Detalle_Rutina

#Revisar class meta-returns.


class Entrenador(models.Model):
    id_Entrenador = models.AutoField(primary_key=True)
    Nombre = models.CharField(max_length=60, blank=False)
    Apellido = models.CharField(max_length=60, blank=False)
    Fecha_de_nacimiento = models.DateField(blank=False)
    DNI = models.IntegerField(blank=False)
    Dirección = models.CharField(max_length=100, blank=False)
    Teléfono = models.IntegerField(blank=False)
    Email = models.CharField(max_length=100, blank=False)
    Nombre_de_usuario = models.CharField(max_length=60)
    class meta:
        db_table = 'Entrenador'
        verbose_name = 'Entrenador'
        verbose_name_plural = 'Entrenadores'
    def __unicode__(self):
        return self.Nombre
    def __str__(self):
        return self.Nombre
    

class Plan(models.Model):
    id_Plan = models.AutoField(primary_key=True)
    Nombre = models.CharField(max_length=60, blank=False)
    Por_tiempo = models.BigIntegerField(blank=False)
    Duración = models.IntegerField(blank=False)
    Valor = models.DecimalField(max_length=100, blank=False, decimal_places=2, max_digits=10)
    Vencimiento = models.IntegerField(blank=False)
    Descripción = models.CharField(max_length=100, blank=False)
    class meta:
        db_table = 'Plan'
        verbose_name = 'Plan'
        verbose_name_plural = 'Planes'
    def __unicode__(self):
        return self.Nombre
    def __str__(self):
        return self.Nombre
    

class Plan_Cliente(models.Model):
    id_Plan_Cliente = models.IntegerField(primary_key=True)
    id_Cliente = models.ForeignKey(Cliente, to_field='id_Cliente',on_delete=models.CASCADE)
    id_Plan = models.ForeignKey(Plan, to_field='id_Plan',on_delete=models.CASCADE)  
    Fecha_de_compra = models.DateField(blank=False)
    Fecha_de_vencimiento = models.DateField(blank=False)
    class meta:
        db_table = 'Plan_cliente'
        verbose_name = 'Plan_cliente'
        verbose_name_plural = 'Planes_clientes'
    def __unicode__(self):
        return self.id_Plan_Cliente
    def __str__(self):
        return self.id_Plan_Cliente
    
    #Revisar class meta-returns.(no sé que iría)


class Progreso_Cliente(models.Model):
    id_Progreso_Cliente = models.IntegerField(primary_key=True)
    id_Cliente = models.ForeignKey(Cliente, to_field='id_Cliente',on_delete=models.CASCADE)
    id_Entrenador = models.ForeignKey(Entrenador, to_field='id_Entrenador',on_delete=models.CASCADE)
    Fecha = models.DateField(blank=False)
    Peso = models.FloatField(blank=False)
    Altura = models.FloatField(blank=False)
    IMC = models.FloatField(blank=False)
    Observaciones = models.TextField(100, blank=False)
    class meta:
        db_table = 'Progreso_cliente'
        verbose_name = 'Progreso_cliente'
        verbose_name_plural = 'Progresos_clientes'
    def __unicode__(self):
        return self.Fecha
    def __str__(self):
        return self.Fecha
    

class Rutina_Cliente(models.Model):
    id_Rutina_Cliente = models.IntegerField(primary_key=True)
    id_Cliente = models.ForeignKey(Cliente, to_field='id_Cliente',on_delete=models.CASCADE)
    id_Rutina = models.ForeignKey(Rutina, to_field='id_Rutina',on_delete=models.CASCADE)
    class meta:
        db_table = 'Rutina_cliente'
        verbose_name = 'Rutina_cliente'
        verbose_name_plural = 'Rutinas_clientes'
    def __unicode__(self):
        return self.id_Rutina_Cliente
    def __str__(self):
        return self.id_Rutina_Cliente

#Revisar class meta-returns.(no sé que iría)


class Ejercicio(models.Model):
    id_Ejercicio = models.IntegerField(primary_key=True)
    id_Detalle_Rutina = models.ForeignKey(Detalle_Rutina, to_field='id_Detalle_Rutina',on_delete=models.CASCADE)
    Descripción = models.TextField(100, blank=False)
    Observaciones = models.TextField(100, blank=False)
    class meta:
        db_table = 'Ejercicio'
        verbose_name = 'Ejercicio'
        verbose_name_plural = 'Ejercicios'
    def __unicode__(self):
        return self.id_Ejercicio
    def __str__(self):
        return self.id_Ejercicio
    
#Revisar class meta-returns.(no sé que iría)


class Catergoria(models.Model):
    id_Categoria = models.IntegerField(primary_key=True)
    Nombre_categoria = models.CharField(max_length=60, blank=False)
    Descripción = models.TextField(100, blank=False)
    class meta:
        db_table = 'Categoria'
        verbose_name = 'Categoria'
        verbose_name_plural = 'Categorias'
    def __unicode__(self):
        return self.Nombre_categoria
    def __str__(self):
        return self.Nombre_categoria


class Producto(models.Model):
    id_Producto = models.IntegerField(primary_key=True)
    Nombre_producto = models.CharField(max_length=60, blank=False)
    Descripción = models.TextField(100, blank=False)
    Precio = models.DecimalField(max_length=100, blank=False, decimal_places=2, max_digits=10)
    Cantidad = models.IntegerField(blank=False, default=0)
    Peso = models.FloatField(blank=False)
    Foto_producto = models.ImageField(blank=False)
    id_Categoria = models.ForeignKey(Catergoria, to_field='id_Categoria',on_delete=models.CASCADE)
    class meta:
        db_table = 'Producto'
        verbose_name = 'Productos_en_venta'
        verbose_name_plural = 'Productos'
    def __unicode__(self):
        return self.Nombre_producto
    def __str__(self):
        return self.Nombre_producto
    
    
class Pedido(models.Model):
    id_Pedido = models.IntegerField(primary_key=True)
    Fecha = models.DateField(blank=False)
    Total = models.DecimalField(max_length=100, blank=False, decimal_places=2, max_digits=10)
    Forma_de_pago = models.CharField(max_length=60, blank=False)
    Pagado = models.SmallIntegerField(blank=False)
    Entregado = models.SmallIntegerField(blank=False)
    Dirección_de_envío = models.CharField(max_length=100, blank=False)
    Dirección_de_facturación = models.CharField(max_length=100, blank=False)
    Empresa_envío = models.CharField(max_length=40, blank=False)
    Nro_guía = models.TextField(40, blank=False)
    Costo_envío = models.DecimalField(max_length=100, blank=False, decimal_places=2, max_digits=10)
    Comprobante_pago = models.IntegerField(blank=False)
    id_Cliente = models.ForeignKey(Cliente, to_field='id_Cliente',on_delete=models.CASCADE)
    class meta:
        db_table = 'Pedido'
        verbose_name = 'Pedido'
        verbose_name_plural = 'Pedidos'
    def __unicode__(self):
        return self.Total
    def __str__(self):
        return self.Total
    
#Revisar class meta-returns.(no sé que iría)


class Detalle_Pedido(models.Model):
    Código_de_barras = models.AutoField(primary_key=True)
    Cantidad = models.IntegerField(blank=False)
    Precio = models.DecimalField(max_length=100, blank=False, decimal_places=2, max_digits=10)
    Total = models.DecimalField(max_length=100, blank=False, decimal_places=2, max_digits=10)
    Costo_envío = models.DecimalField(max_length=100, blank=False, decimal_places=2, max_digits=10)
    id_Pedido = models.ForeignKey(Pedido, to_field='id_Pedido',on_delete=models.CASCADE)
    id_Producto = models.ForeignKey(Producto, to_field='id_Producto',on_delete=models.CASCADE)
    class meta:
        db_table = 'Detalle_pedido'
        verbose_name = 'Detalle_pedido'
        verbose_name_plural = 'Detalles_pedidos'
    def __unicode__(self):
        return self.Total
    def __str__(self):
        return self.Total
    
#Revisar class meta-returns.(no sé que iría)


class Mensaje(models.Model):
    id_Mensaje = models.IntegerField(primary_key=True)
    De = models.CharField(max_length=60, blank=False)
    Mensaje = models.TextField(100000, blank=False)
    Fecha = models.DateField(blank=False)
    Leído = models.SmallIntegerField(blank=False)
    id_Cliente = models.ForeignKey(Cliente, to_field='id_Cliente',on_delete=models.CASCADE)
    class meta:
        db_table = 'Mensaje'
        verbose_name = 'Mensaje'
        verbose_name_plural = 'Mensajes'
    def __unicode__(self):
        return self.De
    def __str__(self):
        return self.De
    
    
class Proveedor(models.Model):
    id_Proveedor = models.IntegerField(primary_key=True)
    Nombre_proveedor = models.CharField(max_length=60, blank=False)
    Dirección = models.CharField(max_length=100, blank=False)
    País = models.CharField(max_length=60, blank=False)
    Provincia = models.CharField(max_length=60, blank=False)
    Teléfono = models.IntegerField(blank=False)
    Email = models.CharField(max_length=100, blank=False)
    class meta:
        db_table = 'Proveedor'
        verbose_name = 'Proveedor'
        verbose_name_plural = 'Proveedores'
    def __unicode__(self):
        return self.Nombre_proveedor
    def __str__(self):
        return self.Nombre_proveedor
    

class Compra(models.Model):
    id_Compra = models.AutoField(primary_key=True)
    Fecha = models.DateField(blank=False)
    Total = models.DecimalField(max_length=100, blank=False, decimal_places=2, max_digits=10)
    id_Proveedor = models.ForeignKey(Proveedor, to_field='id_Proveedor',on_delete=models.CASCADE)
    class meta:
        db_table = 'Compra'
        verbose_name = 'Compra'
        verbose_name_plural = 'Compras'
    def __unicode__(self):
        return self.Total
    def __str__(self):
        return self.Total
    

class Detalle_Compra(models.Model):
    id_Detalle_Compra = models.AutoField(primary_key=True)
    Subtotal = models.DecimalField(max_length=100, blank=False, decimal_places=2, max_digits=10)
    Cantidad = models.IntegerField(blank=False)
    Precio = models.DecimalField(max_length=100, blank=False, decimal_places=2, max_digits=10)
    id_Compra = models.ForeignKey(Compra, to_field='id_Compra',on_delete=models.CASCADE)
    id_Producto = models.ForeignKey(Producto, to_field='id_Producto',on_delete=models.CASCADE)
    class meta:
        db_table = 'Detalle_compra'
        verbose_name = 'Detalle_compra'
        verbose_name_plural = 'Detalles_compras'
    def __unicode__(self):
        return self.Subtotal
    def __str__(self):
        return self.Subtotal
    
