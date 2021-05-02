const mysql = require('mysql');

//Utilizado para obtener las variables de entorno
require('dotenv').config();

const objectConnection ={
  host: process.env.DB_HOST,
  port: process.env.DB_PORT,
  user: process.env.DB_USER,
  password: process.env.DB_PASS,
  database: process.env.DB_NAME
}

const myConn = mysql.createConnection(objectConnection);

myConn.connect((error) =>{
  error ?
    console.log(`There's an error: ${error}`):
    console.log(`Connected DataBase host: ${objectConnection.host}`);
})


module.exports = myConn