const connection = require('../../config/connection');
const master_data = require ('../master_data'); 

class ProductsModel {

  static async getAllProducts(gender, category, sortBy){
    return new Promise(async (resolve, reject) =>{
      try {
        if(connection){
          let querySql = `
            select 
              c.*,
              im.image_path,
              cz.price,
              IF(dc.discount_flag = ${true}, p.percentage, ${null}) as percentage
            from clothes c
            inner join images_clothes im ON im.id_clothes = c.id
            inner join clothes_sizes cz ON cz.id = c.id 
            left join discount_clothes dc ON dc.id_clothes = c.id
            left join _percentage p ON p.id = dc.id_percentage
            where 
              im.principal_flag = ${true} 
              ${ gender.length > 0 ? `AND c.gender_id = '${gender}'` : "AND c.gender_id IS NOT NULL"} 
              ${ category.length > 0 ? `AND c.category_id = ${category}` : "AND c.category_id IS NOT NULL"}
              ${ sortBy == master_data.sortBy.bestDiscount ? `AND dc.discount_flag = ${true} ORDER BY dc.id_percentage DESC` :""}
              ${ sortBy == master_data.sortBy.lowerPrice ? `ORDER BY cz.price ASC` : ""}
              ${ sortBy == master_data.sortBy.higherPrice ? `ORDER BY cz.price DESC` : ""}
            `;
          // console.log(querySql);
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

  /*
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
  */
}

module.exports = ProductsModel;