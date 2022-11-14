import mysql.connector
from mysql.connector import Error


class DAO:
    def __init__(self):

        # Verificar la conexion y conectarse
        try:
            self.conexion = mysql.connector.connect(host="localhost",
                                                    user="root",
                                                    password="12345!",
                                                    database="Smart_Fit")
        except Error as err:
            print("Error al intentar la Conexion: {0} ".format(err))

    # Ver por pantalla los clientes en forma alfabetica segun el apellido
    def mostrarClientes(self):
        if self.conexion.is_connected():

            try:
                cursor = self.conexion.cursor()
                cursor.execute("SELECT * FROM `cliente` ORDER BY `cliente`.`Apellido` ASC")
                resultados = cursor.fetchall()
                return resultados
            except Error as err:
                print("Error al intentar la Conexion: {0} ".format(err))

    # Registar clientes en forma de string
    def registrarCliente(self, Cliente):
        if self.conexion.is_connected():
            try:
                cursor = self.conexion.cursor()
                querySql = ("INSERT INTO `cliente`(`idCliente`, `Nombre`, `Apellido`, `Fecha de nacimiento`, "
                            "`DNI`, `Dirección`, `Telefono`, `Email`, `Nombre de usuario`)"
                            " VALUES  ('{0}', '{1}', '{2}', '{3}', '{4}', '{5}', '{6}', '{7}', '{8}')")
                cursor.execute(querySql.format(Cliente[0], Cliente[1], Cliente[2], Cliente[3], Cliente[4], Cliente[5],
                                               Cliente[6], Cliente[7], Cliente[8]))
                self.conexion.commit()
                print("¡Cliente registrado! \n")
            except Error as err:
                print("Error al intentar la Conexion: {0} ".format(err))

    # Funcion parecida a registrar
    def actualizarDatosCliente(self, cliente):
        if self.conexion.is_connected():
            try:
                cursor = self.conexion.cursor()
                querySql = ("UPDATE `cliente` SET `idCliente` = '{0}', `Nombre` = '{1}', `Apellido` = '{2}', "
                            "`Fecha de nacimiento` = '{3}', `DNI` = '{4}', `Dirección` = '{5}', "
                            "`Telefono` = '{6}', `Email` = '{7}', `Nombre de usuario` = '{8}' "
                            "WHERE `cliente`.`idCliente` = {0}")
                cursor.execute(querySql.format(cliente[0], cliente[1], cliente[2], cliente[3], cliente[4], cliente[5],
                                               cliente[6], cliente[7], cliente[8]))
                self.conexion.commit()
                print("¡Cliente actualizado! \n")

            except Error as err:
                print("Error al intentar la Conexion: {0} ".format(err))

    # Eliminar cliente y evaluar conexion
    def eliminarCliente(self, idEliminar):
        if self.conexion.is_connected():
            try:
                cursor = self.conexion.cursor()
                querySql = "DELETE FROM cliente WHERE `cliente`.`idCliente` = {0} "
                cursor.execute(querySql.format(idEliminar))
                self.conexion.commit()
                print("¡Cliente eliminado! \n")
            except Error as err:
                print("Error al intentar la Conexion: {0} ".format(err))
