const homeModel = rootRequire('app/models/home.model')

const getCategories = async (req,res) =>{
  try {
    let data = await homeModel.getCategories();
    res.json(data)
  } catch (error) {
    console.error("An error ocurred getCategories: ",error);
    throw ("An error ocurred getCategories: ",error);
  }
}

const getDiscountClothes = async (req,res) =>{
  try {
    let data = await homeModel.getDiscountClothes();
    res.json(data)
  } catch (error) {
    console.error("An error ocurred getDiscountClothes: ",error);
    throw ("An error ocurred getDiscountClothes: ",error);
  }
}

const getLastestCollection = async (req,res) =>{
  try {
    const { amount } = req.query;
    let data = await homeModel.getLastestCollection(amount);
    res.json(data)
  } catch (error) {
    console.error("An error ocurred getLastestCollection: ",error);
    throw ("An error ocurred getLastestCollection: ",error);
  }
}

module.exports = {
  getCategories,
  getDiscountClothes,
  getLastestCollection,
}