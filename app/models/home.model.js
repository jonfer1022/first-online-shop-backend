const connection = require('../../config/connection');

class homeModel {

  static async getCategories(){
    return new Promise(async (resolve, reject) =>{
      try {
        if(connection){
          let querySql = `
            select *, _c.name as "categories"
            from categories_clothes c
            inner join _categories _c ON _c.id = c.id
            `;
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
  };

  static async getDiscountClothes(){
    return new Promise(async (resolve, reject) =>{
      try {
        if(connection){
          let querySql = `
            select 
              dc.*, 
              c.product_name,
              p.percentage
            from discount_clothes dc
            inner join clothes c ON c.id = dc.id_clothes
            inner join _percentage p ON p.id = dc.id_percentage
            where dc.discount_flag = ${true}
            `;
          connection.query(querySql, (error, rows) =>{
            if(error) reject(`An error ocurred in the query getDiscountClothes: ${error}`);
            resolve (rows);
          })
        }
      } catch (error) {
        console.error(`An error ocurred in getDiscountClothes: ${error}`);
        reject(`An error ocurred in getDiscountClothes: ${error}`);
      }
    })
  };
}

module.exports = homeModel;