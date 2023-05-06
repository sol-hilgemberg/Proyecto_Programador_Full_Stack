# Mostrar por pantalla los clientes atraves de string
def listarClientes(clientes):
    print("\nClientes: \n")
    for cli in clientes:
        datos = "Id: {0} | Nombre: {1} | Apellido: {2} | Fecha de Nacimiento: {3} |" \
                " DNI: {4} | Direccion: {5} | Telefono: {6} | Email: {7} | Nombre de Usuario: {8} \n"
        print(datos.format(cli[0], cli[1], cli[2], cli[3], cli[4], cli[5], cli[6], cli[7], cli[8]))
    print(" ")


# Pedir datos y validar los correctos
def pedirDatosCliente():
    idCliente = "NULL"
    Nombre = input("Ingrese el Nombre del cliente: ")
    Apellido = input("Ingrese el Apellido del cliente: ")
    Cumpleanos = input("Ingrese el Cumpleanos del cliente(AAAA-MM-DD): ")

    dni_incorrecto = False
    while not dni_incorrecto:
        dni = input("Ingrese el dni del cliente sin puntos: ")
        if dni.isnumeric():
            if int(dni) > 10000000:
                dni_incorrecto = True
            else:
                print("Solo se admiten numeros enteros...\n")
        else:
            print("Solo se admiten numeros...\n")

    Direccion = input("Ingrese la direccion del cliente: ")

    telefono_incorrecto = False
    while not telefono_incorrecto:
        telefono = input("Ingrese el numero de telefono del cliente: ")
        if telefono.isnumeric() and int(telefono) > 0:
            telefono_incorrecto = True
        else:
            print("Solo se admiten numeros...\n")
    Email = input("Ingrese el email del cliente: ")

    Username = input("Ingrese el nombre de usuario del cliente: ")

    cliente = (idCliente, Nombre, Apellido, Cumpleanos, dni, Direccion, telefono, Email, Username)
    return cliente


# Pedir datos y validar los correctos
def pedirDatosAcualizacion(Cliente):
    listarClientes(Cliente)
    existeId = False
    idActualizar = int(input("Ingrese el id del cliente a actualizar: "))
    for cli in Cliente:
        if cli[0] == idActualizar:
            existeId = True
            break

    if existeId:
        idCliente = "NULL"
        Nombre = input("Ingrese el Nombre del cliente a actualizar: ")
        Apellido = input("Ingrese el Apellido del cliente a actualizar: ")
        Cumpleanos = input("Ingrese el Cumpleanos del cliente(AAAA-MM-DD) a actualizar: ")
        dni_incorrecto = False
        while not dni_incorrecto:
            dni = input("Ingrese el dni del cliente sin puntos a actualizar: ")
            if dni.isnumeric():
                if int(dni) > 10000000:
                    dni_incorrecto = True
                else:
                    print("Solo se admiten numeros enteros...\n")
            else:
                print("Solo se admiten numeros...\n")

        Direccion = input("Ingrese la direccion del cliente a actualizar: ")
        telefono_incorrecto = False
        while not telefono_incorrecto:
            Telefono = input("Ingrese el numero de telefono del cliente a actualizar: ")
            if Telefono.isnumeric() and int(Telefono) > 0:
                telefono_incorrecto = True
            else:
                print("Solo se admiten numeros...\n")

        Email = input("Ingrese el email del cliente a actualizar: ")
        Username = input("Ingrese el nombre de usuario del cliente a actualizar: ")
        cliente = (idCliente, Nombre, Apellido, Cumpleanos, dni, Direccion, Telefono, Email, Username)
    else:
        cliente = None
    return cliente


# Pedir datos y verificar que la id sea valida
def perdirDatosEliminacion(Cliente):
    listarClientes(Cliente)
    existeId = False
    idEliminar = int(input("Ingrese el id del cliente a eliminar: "))
    for cli in Cliente:
        if cli[0] == idEliminar:
            existeId = True
            break
    if not existeId:
        idEliminar = ""

    return idEliminar
