const mysql = require('mysql');
const data = require('./dataPrivate.json');
const db = data.mysql_remote;

const objectConnection ={
  host: db.host,
  port: db.port,
  user: db.user,
  password: db.password,
  database: db.database
}

const myConn = mysql.createConnection(objectConnection);

myConn.connect((error) =>{
  error ?
    console.log(`There's a error: ${error}`):
    console.log(`Connected DataBase`);
})


module.exports = myConn