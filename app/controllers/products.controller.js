const ProductsModel = rootRequire('app/models/products.model')

/**
 * Retorna la lista de productos según el filtro requerido
*/
const getAllProducts = async (req,res) =>{
  try {
    const { gender, category, sortBy, size, priceMin, priceMax} = req.query;
    let data = await ProductsModel.getAllProducts(gender, category, sortBy, size, priceMin, priceMax);
    res.json(data)
  } catch (error) {
    console.error("An error ocurred getAllProducts: ",error);
    throw ("An error ocurred getAllProducts: ",error);
  }
}

/**
 * Retorna la información respectiva al id del producto solicitado.
*/
const getProductById = async (req,res) =>{
  try {
    const { product_id } = req.query;
    let data = await ProductsModel.getProductById(product_id);
    res.json(data)
  } catch (error) {
    console.error("An error ocurred getProductById: ",error);
    throw ("An error ocurred getProductById: ",error);
  }
}


module.exports = {
  getAllProducts,
  getProductById
}