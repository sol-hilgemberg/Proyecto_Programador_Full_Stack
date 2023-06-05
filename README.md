# Proyecto_Programador_Web_2023
Repositorio del Proyecto de la asignatura Programador Web correspondiente al segundo año de la Tecnicatura Superior en
Desarrollo Web y Aplicaciones Digitales del ISPC (Cohorte 2022)

"Este proyecto tiene como objetivo entrenar sus habilidades en la creación de una aplicación/sitio Web completa (SPA con Angular, consumo de API y POO con Django-Python) y reflejar la realidad de los desafíos técnicos para el puesto de desarrollador FullStack. 

Con este proyecto podrás entrenar tu lógica, organización de proyectos, mejores prácticas y los conceptos adquiridos durante tu recorrido en el cursado del módulo."

Proyecto: E-Commerce SmartFIT 2023

Instrucciones para ejecutar el proyecto:

1. Iniciar XAMPP:
Ejecutar XAMPP en la computadora.
Iniciar Apache y MySQL.
Opcionalmente, ingresar a phpMyAdmin para comprobar que la base de datos se esté cargando correctamente (smart_fit es el nombre de la bd).

2. Backend (Django):
Abrir una terminal en Visual Studio Code (VSCode).
Navegar hasta la carpeta del backend utilizando el comando cd Backend.
Ejecutar el siguiente comando: python manage.py runserver.
Esto iniciará el backend en Django (recuerden tener una maquina virtual).

3. JSON Server: (Dejaremos de usar el json server y utilizaremos una api que envie solicitudes a nuestro backend en Django)
Abrir otra terminal en VSCode.
Navegar hasta la raíz del proyecto utilizando el comando cd Proyecto_Programador_Full_Stack.
Ejecutar el siguiente comando: json-server --watch Backend/db.json.
Esto iniciará el JSON Server.

4. Frontend (Angular):
Abrir otra terminal en VSCode.
Navegar hasta la carpeta del proyecto Angular utilizando el comando cd AngularProject.
Ejecutar el siguiente comando: ng serve.
Esto iniciará el proyecto frontend en Angular.



