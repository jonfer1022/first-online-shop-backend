const homeModel = rootRequire('app/models/home.model')

const getCategories = async (req,res) =>{
  try {
    let data = await homeModel.getCategories();
    // res.header("Access-Control-Allow-Origin", "*");
    res.json(data)
  } catch (error) {
    console.error("An error ocurred: ",error);
    throw ("An error ocurred: ",error);
  }
}

module.exports = {
  getCategories,
}