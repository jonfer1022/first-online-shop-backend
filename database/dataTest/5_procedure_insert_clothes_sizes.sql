/* Creación procedure para insertar valores random tanto a precio como al tamaño del producto (FK) en tabla clothes_sizes*/
drop procedure if exists insert_clothes_sizes_test_data;

delimiter #
create procedure insert_clothes_sizes_test_data()
begin

declare v_max int unsigned default 101;        -- Máximo de registros en tabla clothes
declare v_counter int unsigned default 0;     -- Contador de 0 al max de registros de clothes
declare id_counter int unsigned default 0;    -- (FK) id de cada clothes
declare max_change_id int unsigned default 5; -- Valor con el que cambia de id de clothes

  /* Se inserta datos random, teniendo en cuenta que para el id_clothes se repetira el id tantas veces lo indique max_change_id
    Luego para id_sizes Casteamos (a entero sin signo) un valor random entre 5 a 1
    De la misma manera para price Casteamos un valor random entre 10.000 y 1.000 */
  truncate table online_shop.clothes_sizes;
  start transaction;
  while v_counter < v_max do
	IF id_counter < max_change_id THEN
		insert into online_shop.clothes_sizes (id_clothes, id_sizes, amount, price) values ( v_counter + 1, CAST(RAND()*(5-1)+1 AS UNSIGNED), 2, CAST(RAND()*(10000-1000)+1000 AS UNSIGNED) );
    set id_counter = id_counter + 1;
	ELSE
		set id_counter = 1;
    set v_counter = v_counter + 1;
	end IF;
  end while;
  commit;
end #

delimiter ;

call insert_clothes_sizes_test_data();