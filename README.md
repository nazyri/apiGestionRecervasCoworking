# apiGestionRecervasCoworking
<!-- Paso a paso Mini proyecto -->

<!-- Paso 1 configuracion de Django -->
<!--  Comenzamos a trabajar en la configuración de Django-MySQL
-Lo primero que comenzamos haciendo fue Crear un proyecto nuevo.         

comenzamos a ejecutar el código.
- Ejecutamos los siguientes comando:
- python -m ensurepip --upgrade
- py -m pip install Django==5.1.2 
- django-admin --version ´verificamos la versión de Django´ 

Para inicializar un proyecto de Django ejecutamos los siguientes comado:
- django-admin startproject
nombre_del_proyecto (Aca le ponemos el nombre de apiDjango)
- Luego de eso nos salió la distribución de archivos y carpetas

Como trabajamos con Django Rest Framework, hicimos la siguiente instalación:
- pip install djangorestframework
Luego de eso creamos nuestra aplicación y ejecutamos el siguiente código
-Luego en la carpeta de apiDjango hacemos un cd, para entrar a la carpeta y poder hacer la siguente instalación 
- python manage.py startapp api.

Luego nos vamos al archivo de settings.py.
- Y vmos agregar la nueva aplicación como Django REST Framework(apiDanjango, api, rest_framework ), esto lo hace en la lista de installed_apps.

En el archivo de models.py.
- Vamos a crear nuesttro modelo de las tablas.

Vamos a crear un archivo llamado serializer, dentro de la aplicación api y vamos a definir  el serializer para mi modelo(las tablas)

Vistas --- views
- Las vistas van a controlar la lógica de  nuestra api.
- También nos va ayudar a manejar las solicitudes que le hagamos a nuestra api. 
- En las vistas vamos hacer los metodos (get, post, put, delete)

En el nuevo urls.py,  vamos a crear las rutas para nuestra api.

Despues nos vamos a ir al archivo de urls.py que trae por defecto y vamos agregar las rutas de la aplicacion api.  

Por ultimo, en el archivo de settings.py, vamos a editar Database y poner los datos correcto.

Luego vamos a ejecutar:
pip install mysqlclient

Una vez configurada la base de datos, vamos aplicar las migraciones de Django para que las tablas necesarias se creen en la base de datos MySQL:

- python manage.py makemirations
- python manage.py migrate 

** Para levantar nuestro servidor vamos a utlizar el siguiente comando

----python manage.py runserver----

---------- Coneccion de back end y el frond end----------------
- Se creo la estructura de nuestro frond end y sus archivos correspondientes.

- Se creo el registro de sesion y el inicio de sesion.
- Se creo validaciones de espacios vacios y que el usuario no se repitiera.

Tambien se hizo la configuracion de los token django-mysql, los siguientes comandos fueron utilizados para la configuracion del token.
- Lo primero que hicimos fue instalar el simplejwt.
- pip install djangorestframework-simplejwt
-Agregamos rest_framework_simplejwt a
nuestro INSTALLED_APPS
- Agregamos REST_FRAMEWORK y su
configuración

Protegimos nuestras vistas
- Agregamos a nuestras rutas
urls.py, para obtener el token
y su import
y asi configuramos el token.

----Creamos el formulario de la tabla clientes-----
---- Formulario de las Reservas
---- Fomrmulario para cancelar reservas
---- Formulario para las zonas disponibles
---- Formulario estado de reservas
---- Se le dio estilos a estos Formularios
---- A cada uno de los formularios se les hizo validaciones.
---- Tambien se le creo una pagina de home.









 -->

