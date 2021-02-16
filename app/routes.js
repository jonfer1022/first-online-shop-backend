const home = require('./controllers/home.controller'); 

const GET = "get";
const PUT = "put";
const POST = "post";
const DELETE = "delete";

const routes = [
  /**
   * Retorna la lista de las categorias
   */
  [GET, '/home/categories', home.getCategories],

  // /*
  //  * Ruta que consulta por id y retorna un registro 
  //  */
  // [GET, '/:id', cars.getCarById],

  // /*
  //  * Inserta un nuevo carro. 
  //  */
  // [POST, '/', cars.insertCar],

  // /*
  //  * Actualiza el registro de un carro. 
  //  */
  // [PUT, '/:id', cars.editCar],

  // /*
  //  * Elimina un registro de los carros. 
  //  */
  // [DELETE, '/:id', cars.deleteCar]
]

module.exports = routes;