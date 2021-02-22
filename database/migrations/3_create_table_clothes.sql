-- tabla que almacena los productos, el nombre y la cantidad de cada uno
create table clothes(
	id int not null auto_increment,
  product_name varchar(50) not null,
  amount int not null,
  primary key (id)
)