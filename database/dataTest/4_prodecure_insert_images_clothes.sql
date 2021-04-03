/* Creación procedure para insertar valores random en tabla images_clothes*/
drop procedure if exists insert_images_clothes_test_data;
delimiter #
create procedure insert_images_clothes_test_data()
begin

declare v_max int unsigned default 100;       -- Máximo de registros en tabla clothes
declare v_counter int unsigned default 0;     -- Contador de 0 al max de registros de clothes
declare id_counter int unsigned default 0;    -- (FK) id de cada clothes
declare max_change_id int unsigned default 3; -- Valor con el que cambia de id de clothes
	
  set foreign_key_checks = 0;
  truncate table images_clothes;
  start transaction;
  while v_counter < (v_max+1) do
	IF id_counter < max_change_id THEN
		insert into images_clothes (id_clothes, image_path, principal_flag) 
		  values (
		  v_counter + 1,
		  'https://raw.githubusercontent.com/jonfer1022/First-Online-Shop/main/src/img/img-portafolio/Ropa2.jpg',
		  IF(id_counter = 0, 1, 0)
		  );
		set id_counter = id_counter + 1;
    ELSE
		set id_counter = 0;
		set v_counter = v_counter + 1;
	  end IF;
  end while;
	set foreign_key_checks = 1;
  commit;
end #
delimiter ;
call insert_images_clothes_test_data();