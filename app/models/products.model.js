const connection = require('../../config/connection');
const master_data = require ('../master_data'); 

class ProductsModel {

  static async getAllProducts(gender, category, sortBy, size, priceMin, priceMax){
    return new Promise(async (resolve, reject) =>{
      try {
        if(connection){
          let querySql = `
            select 
              c.*,
              im.image_path,
              c.price,
              GROUP_CONCAT(s.id) as "sizes_id",
	            GROUP_CONCAT(s.name) as "sizes",
              IF(dc.discount_flag = ${true}, p.percentage, ${0}) as percentage
            from clothes c
            inner join images_clothes im ON im.id_clothes = c.id
            inner join clothes_sizes cz ON cz.id_clothes = c.id 
            inner join _sizes s ON s.id = cz.id_sizes
            left join discount_clothes dc ON dc.id_clothes = c.id
            left join _percentage p ON p.id = dc.id_percentage
            where 
              im.principal_flag = ${true} 
              AND c.price BETWEEN ${priceMin} AND ${priceMax}
              ${ gender.length > 0 ? `AND c.gender_id = '${gender}'` : "AND c.gender_id IS NOT NULL"} 
              ${ category.length > 0 ? `AND c.category_id = ${category}` : "AND c.category_id IS NOT NULL"}
              ${ size.length > 0 ? `AND cz.id_sizes IN (${size})`:" AND cz.id_sizes IS NOT NULL"}
              GROUP BY 
              c.id, 
              im.image_path,
              c.price,
              "sizes_id",
              "sizes",
              percentage
            ${ sortBy == master_data.sortBy.lowerPrice ? `ORDER BY c.price ASC` : ""}
            ${ sortBy == master_data.sortBy.higherPrice ? `ORDER BY c.price DESC` : ""}
            ${ sortBy == master_data.sortBy.bestDiscount ? `ORDER BY percentage DESC` :""}
            ${ sortBy == master_data.sortBy.lastlestCollection ? `ORDER BY c.created_at DESC`:``}
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

  static async getProductById(product_id){
    return new Promise(async (resolve, reject) =>{
      try {
        if(connection){
          let querySql = `
            select 
              c.*,
              im.image_path,
              GROUP_CONCAT(cs.id_sizes) as "id_sizes",
              GROUP_CONCAT(s.name) as "sizes",
              p.percentage
            from clothes c
            inner join images_clothes im ON im.id_clothes = c.id
            inner join clothes_sizes cs ON cs.id_clothes = c.id
            inner join _sizes s ON s.id = cs.id_sizes
            inner join discount_clothes dc ON dc.id_clothes = c.id
            inner join _percentage p ON p.id = dc.id_percentage
            where 
              c.id = ${product_id}
            GROUP BY im.id
            `;
          // console.log(querySql);
          connection.query(querySql, (error, rows) =>{
            if(error) reject(`An error ocurred in the query getProductById: ${error}`);
            resolve (rows);
          })
        }
      } catch (error) {
        console.error(`An error ocurred in getProductById: ${error}`);
        reject(`An error ocurred in getProductById: ${error}`);
      }
    })
  };

}

module.exports = ProductsModel;