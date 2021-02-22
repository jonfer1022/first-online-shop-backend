const homeModel = rootRequire('app/models/home.model')

const getCategories = async (req,res) =>{
  try {
    let data = await homeModel.getCategories();
    res.json(data)
  } catch (error) {
    console.error("An error ocurred: ",error);
    throw ("An error ocurred: ",error);
  }
}

const getDiscountClothes = async (req,res) =>{
  try {
    let data = await homeModel.getDiscountClothes();
    res.json(data)
  } catch (error) {
    console.error("An error ocurred: ",error);
    throw ("An error ocurred: ",error);
  }
}

module.exports = {
  getCategories,
  getDiscountClothes
}