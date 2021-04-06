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
   * @amount {integer} Cantidad de registros a retornar
   */
  [GET, '/home/lastestCollection', home.getLastestCollection],

  /**
   * Retorna la lista de las categorias.
   * { gender, category, sortBy, size, priceMin, priceMax}
   * @gender    {string}  filtro por genero
   * @category  {integer} filtro por id categoria
   * @sortby    {integer} filtro por orden de busqueda
   * @size      {integer} filtro por id de tamaño
   * @priceMin  {integer} filtro rango mínimo del precio
   * @priceMin  {integer} filtro rango máximo del precio
   */
  [GET, '/products/allProducts', products.getAllProducts],
  
  /**
   * Retorna información de un producto en específico.
   * @product_id  {integer} id del producto a consultar
   */
  [GET, '/products/getProductById', products.getProductById]
]

module.exports = routes;