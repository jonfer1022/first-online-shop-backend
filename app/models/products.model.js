const connection = require('../../config/connection');

class ProductsModel {

  static async getAllProducts(gender, category){
    return new Promise(async (resolve, reject) =>{
      try {
        if(connection){
          let querySql = `
            select c.*,
              im.image_path
            from clothes c
            inner join images_clothes im ON im.id_clothes = c.id
            where 
              im.principal_flag = ${true} AND 
              c.gender_id ${ gender ? "IS NOT NULL" : null} AND 
              c.category_id ${ category ? "IS NOT NULL": null}
            `;
          connection.query(querySql, (error, rows) =>{
            if(error) reject(`An error ocurred in the query getAllProducts: ${error}`);
            resolve (rows);
          })
        }
      } catch (error) {
        console.error(`An error ocurred in getAllProducts: ${error}`);
        reject(`An error ocurred in getAllProducts: ${error}`);
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
              p.percentage,
              ic.image_path
            from discount_clothes dc
            inner join clothes c ON c.id = dc.id_clothes
            inner join _percentage p ON p.id = dc.id_percentage
            inner join images_clothes ic ON ic.id_clothes = c.id
            where dc.discount_flag = ${true} AND ic.principal_flag = ${true}
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

  static async getLastestCollection(amount){
    return new Promise(async (resolve, reject) =>{
      try {
        if(connection){
          let querySql = `
            select 
              c.*,
              im.image_path
            from clothes c
            inner join images_clothes im ON im.id_clothes = c.id
            where im.principal_flag = ${true} AND c.amount > ${0}
            order by created_at DESC limit 0 , ${amount}
            `;
          connection.query(querySql, (error, rows) =>{
            if(error) reject(`An error ocurred in the query getLastestCollection: ${error}`);
            resolve (rows);
          })
        }
      } catch (error) {
        console.error(`An error ocurred in getLastestCollection: ${error}`);
        reject(`An error ocurred in getLastestCollection: ${error}`);
      }
    })
  };
}

module.exports = ProductsModel;