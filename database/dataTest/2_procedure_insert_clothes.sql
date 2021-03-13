/* Creación procedure para insertar valores random en la tabla clothes*/ 
drop procedure if exists insert_clothes_test_data;

delimiter #
create procedure insert_clothes_test_data()
begin

declare v_max int unsigned default 100;       -- Máximo de registros a crear
declare v_counter int unsigned default 0;     -- Contador de 0 al max de registros 

  truncate table online_shop.clothes;
  start transaction;
  while v_counter < (v_max+1) do
	  insert into online_shop.clothes (product_name, created_at, updated_at,`description`, category_id, gender_id, amount) 
    values (
      CONCAT('Clothes ',(v_counter + 1)),   -- Concatenación Clothes con el valor del id
      NOW() - INTERVAL FLOOR(RAND() * 10) DAY,  -- Fecha entre la actual menos días random entre 0 a 10
      NOW() + INTERVAL FLOOR(RAND() * 10) DAY,  -- Fecha entre la actual mas días random entre 0 a 10
      CONCAT('Descripción respectiva de la ropa ',(v_counter + 1),' presentada'), -- Concatenación Descripción y el id 
      CAST(RAND()*(5-1)+1 AS UNSIGNED),         -- Casteo ramdon en un rango de 1 a 5 en que se encuentra la FK
      IF(CAST(RAND() AS UNSIGNED), 'female', 'male'), -- valor entre female y male escogidos de manera aleatoria
      50  -- Max valor por defecto de la cantidad de ropa (OPCIONAL "AUN FALTA CUADRAR ESTE VALOR")
    );
    set v_counter = v_counter + 1;
  end while;
  commit;
end #

delimiter ;

call insert_clothes_test_data();