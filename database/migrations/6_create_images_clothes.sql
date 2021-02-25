-- Tabla que almacena los paths que posee un producto
create table images_clothes(
	id int not null auto_increment,
  id_clothes int not null,
  image_path varchar(255) not null,
  principal_flag boolean,
  primary key (id),
  foreign key (id_clothes) references clothes(id)
)