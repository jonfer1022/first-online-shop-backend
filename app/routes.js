const home = require('./controllers/home.controller'); 
const products = require('./controllers/products.controller');

const GET = "get";
const PUT = "put";
const POST = "post";
const DELETE = "delete";

const routes = [
  /**
   * Retorna la lista de las categorias
   */
  [GET, '/home/categories', home.getCategories],

  /**
   * Retorna la lista de la ropa con descuentos
   */
  [GET, '/home/discountClothes', home.getDiscountClothes],

  /**
   * Retorna listado de la última colección registrada.
   * @amount Cantidad de registros a retornar
   */
  [GET, '/home/lastestCollection', home.getLastestCollection],

  /**
   * Retorna la lista de las categorias.
   */
  [GET, '/products/allProducts', products.getAllProducts],
  
  /**
   * Retorna información de un producto en específico.
   */
   [GET, '/products/getProductById', products.getProductById],
  // /* 
  //  */
  // [POST, '/', cars.insertCar],

  // /* 
  //  */
  // [PUT, '/:id', cars.editCar],

  // /* 
  //  */
  // [DELETE, '/:id', cars.deleteCar]
]

module.exports = routes;