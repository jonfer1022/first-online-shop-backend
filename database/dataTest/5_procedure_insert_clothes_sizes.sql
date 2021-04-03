/* Creación procedure para insertar valores random tanto a precio como al tamaño del producto (FK) en tabla clothes_sizes*/
drop procedure if exists insert_clothes_sizes_test_data;
delimiter #
create procedure insert_clothes_sizes_test_data()
begin

declare v_max int unsigned default 100;        -- Máximo de registros en tabla clothes
declare v_counter int unsigned default 1;     -- Contador de 0 al max de registros de clothes
declare id_counter int unsigned default 1;    -- (FK) id de cada clothes
declare max_change_id int unsigned default 4; -- Valor con el que cambia de id de clothes

  /* Se inserta datos random, teniendo en cuenta que para el id_clothes se repetira el id tantas veces lo indique max_change_id
    Luego para id_sizes Casteamos (a entero sin signo) un valor random entre 5 a 1
    De la misma manera para price Casteamos un valor random entre 10.000 y 1.000 */
  set foreign_key_checks = 0;
  truncate table clothes_sizes;
  start transaction;
  while v_counter < (v_max+1) do
	IF id_counter < (max_change_id+1) THEN
		insert into clothes_sizes (id_clothes, id_sizes, amount) values ( 
			v_counter, 
      IF((v_counter%2)=0, id_counter, id_counter+1), 
      10 
		);
		set id_counter = id_counter + 1;
	ELSE
		set id_counter = 1;
		set v_counter = v_counter + 1;
	end IF;
  end while;
	set foreign_key_checks = 0;
  commit;
end #
delimiter ;
call insert_clothes_sizes_test_data();