/*Creación tabla que almacena las categorias mostradas en el Home de la aplicación*/
create table categories_clothes(
	id int not null auto_increment,
	id_categories int not null,
	description varchar(50) not null,
	image_path varchar(255) not null,
	primary key (id),
	foreign key (id_categories) references _categories(id)
);

truncate categories_clothes;