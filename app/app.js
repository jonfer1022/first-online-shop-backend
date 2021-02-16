const express = require('express');
const morgan = require('morgan');
const cors = require('cors')
const routes = require('../app/routes');
const port = (process.env.PORT || 3001);

//Inizialitions
const app = express();

//Settings
app.set('port',port)


//Middlewares
app.use(express.urlencoded({extended: false}));
app.use(express.json());
app.use(morgan('dev'));
app.use(cors());

//Routes
routes.forEach( route => {
  const [method, routePath, controller] = route;
  app[method]( routePath, controller);
});

module.exports = app;