/* Creación procedure para insertar valores random en tabla images_clothes*/
drop procedure if exists insert_discount_clothes_test_data;
delimiter #
create procedure insert_discount_clothes_test_data()
begin

declare v_max int unsigned default 100;        -- Máximo de registros en tabla clothes
declare v_counter int unsigned default 0;     -- Contador de 0 al max de registros de clothes

  set foreign_key_checks = 0;
  truncate table discount_clothes;
  start transaction;
  while v_counter < (v_max+1) do
	insert into discount_clothes (id_clothes, discount_flag, id_percentage) 
	values ( 
		v_counter + 1,
		IF(CAST(RAND() AS UNSIGNED), 1,0),
		CAST(RAND()*(7-1)+1 AS UNSIGNED));
    set v_counter = v_counter + 1;
  end while;
  SET FOREIGN_KEY_CHECKS = 1;
  commit;
end #
delimiter ;
call insert_discount_clothes_test_data();