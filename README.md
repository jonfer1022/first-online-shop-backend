# Repositorio tienda online "Samplhes" [Capa Back-end]

El objetivo principal de este repositorio es crear el servidor que poseera la lógica de negocio, el manejo y la conexión con la base de datos al igual que el acceso con otros servidores para el funcionamiento de una tienda online de ropa. Además el fin de realizar este proyecto es practicar el conocimiento adquirido a traves de la experiencia laboral y los proyectos en los que he participado.

Para implementar la capa Back-end se utilizó Node Js como entorno de ejecución, y el framework Express Js para implementar el servidor. A partir de este framework se ligan otros middlewares que permiten mayor eficiencia en el desarrollo. Cabe mencionar que el proyecto aún se encuentra en construcción, sin embargo responde a todas las solicitudes implementadas en la capa front-end. 

Desde luego parte de estas librerías o dependencias que se implementaron en el proyecto instalamos aquella que nos pertmite realizar la conexión con la base de datos MySql. De la misma manera usamos el servidor de pruebas db4free.net que según la página refiere, proporciona versiones recientes de la base de datos MySql a la cual nos conectamos.

### Implementación
A continuación proporcionamos el modelo relacional que soporta la lógica de negocio hasta ahora implementada para el funcionamiento sencillo de la tienda online de ropa.

[![Modelo Relacional](https://raw.githubusercontent.com/jonfer1022/portfolio/main/src/images/modelo_relacional.PNG "Modelo Relacional")](https://raw.githubusercontent.com/jonfer1022/portfolio/main/src/images/modelo_relacional.PNG "Modelo Relacional")

Como podemos observar en la imagen, el modelo gira entorno a la tabla principal clothes que almacena los registros del producto con su información principal respectiva. Además también se puede evidenciar otras tablas que tienen el prefijo el caracter "guión al piso" las cuales almacenan los registros paramétricos a lo cuales se relacionan con las demás tablas y así brindar caracteristicas específicas a los registros. 

Como ya sabemos que el objetivo del repositorio es practico, por ende los registros almacenados en la tablas son data aleatoria que fue insertada. Para ello se implemento procedimientos almacenados que al ejecutarse insertan datos aleatorios y al mismo tiempo lógicos para que funcionen con las tablas parametricas relacionadas. En el código disponible del proyecto, se puede observar la carpeta "database" la cual posee los archivos necesarios para la creación de tablas, poblar las tablas paramétricas e insertar los datos aleatorios que se encuentran en los archivos almacenados en la carpeta "dataTest".

Como podra preguntarse este servidor implementado se encuentra desplegado en la plataforma de computación en la nube Heroku. Por ende, el api frontend (al cual puede acceder dando click [¡AQUÍ!](https://jonfer1022.github.io/First-Online-Shop "¡AQUÍ!")  y al repositorio respectivo oprimiendo [¡AQUÍ!](https://github.com/jonfer1022/First-Online-Shop "¡AQUÍ!")) realiza las peticiones al dominio de la aplicación backend proporcionado por Heroku y el servidor responde a estos request.
