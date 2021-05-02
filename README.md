# first-online-shop-backend
 Creación del Api Rest backend respectivo al api first-online-shop (Front-end). Se realiza la aplicación usando como librería principal express.js y como base de datos Mysql, además de usar otras librerías que observaremos más adelante.

install: 
npm init --yes <!-- Crea el archivo package.json -->
npm i express mysql
npm i nodemon -D  <!-- scripts: "dev": "nodemon index.js" -->
npm i morgan <!-- Morgan modulo para observar la peticiones -->
npm i cors  <!-- Modulo para no violar las politicas de cors al realizar una petición -->
npm install --save-dev gh-pages <!-- para hostear el repo en github pages -->
npm i dotenv  <!-- Funciona para utilizar archivo .env -->

<!-- Base de datos: firstonlineshop
Nombre de usuario MySQL: jonfer12
Contraseña de usuario MySQL: jonfer12
Correo electrónico: jfabdev@yopmail.com 
hostname: db4free.net
port: 3306
-->
