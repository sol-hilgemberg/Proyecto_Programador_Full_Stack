from Conexiones import DAO
import funciones


def menuprincipal():
    continuar = True
    while continuar:

        print("╔═════ MENU PRINCIPAL ═════╗")
        print("  1*-- Clientes")
        print("  2*-- Agregar clientes")
        print("  3*-- Actualizar Informacion de Clientes")
        print("  4*-- Eliminar Cliente")
        print("  5*-- Salir")
        print("╚══════════════════════════╝")
        opcion = int(input("Seleccione una opcion: "))

        if 1 > opcion or opcion > 5:
            print("Opcion Incorrecta, ingrese una opcion valida... \n")

        elif opcion == 5:
            print("¡Gracias por usar este sistema! \n")
            break
        else:
            ejecutarOpcion(opcion)


def ejecutarOpcion(opcion):
    dao = DAO()
    if opcion == 1:
        try:
            clientes = dao.mostrarClientes()
            if len(clientes) > 0:
                funciones.listarClientes(clientes)
            else:
                print("No se encontraron clientes...")

        except ConnectionError as error:
            print("Ocurrio un error...", error)

    elif opcion == 2:
        cliente = funciones.pedirDatosCliente()
        try:
            dao.registrarCliente(cliente)
        except ConnectionError as error:
            print("Ocurrio un error...", error)

    elif opcion == 3:
        try:
            clientes = dao.mostrarClientes()
            if len(clientes) > 0:
                cliente = funciones.pedirDatosAcualizacion(clientes)
                if cliente:
                    dao.actualizarDatosCliente(cliente)
                else:
                    print("Codigo de Id incorrecto... \n")
            else:
                print("No se encontraron clientes...")
        except ConnectionError as e:
            print("Ocurrio un error...", e)

    elif opcion == 4:
        try:
            clientes = dao.mostrarClientes()
            if len(clientes) > 0:
                idEliminar = funciones.perdirDatosEliminacion(clientes)

                if not (idEliminar == ""):
                    dao.eliminarCliente(idEliminar)
                else:
                    print("Codigo de Id incorrecto... \n")
            else:
                print("No se encontraron clientes...")
        except ConnectionError as e:
            print("Ocurrio un error...", e)
    else:
        print("Ingrese opcion valida")


menuprincipal()
