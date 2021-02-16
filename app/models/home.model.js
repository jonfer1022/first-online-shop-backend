const connection = require('../../config/connection');

class homeModel {
  static async getCategories(){
    return new Promise(async (resolve, reject) =>{
      try {
        if(connection){
          let querySql = `select * from categories_clothes`;
          connection.query(querySql, (error, rows) =>{
            if(error) reject(`An error ocurred in the query getCategories: ${error}`);
            resolve (rows);
          })
        }
      } catch (error) {
        console.error(`An error ocurred in getCategories: ${error}`);
        reject(`An error ocurred in getCategories: ${error}`);
      }
    })
  }
}

module.exports = homeModel;