-- Tabla que registra los productos con un descuento asignado
create table discount_clothes (
	id int not null auto_increment,
	id_clothes int not null,
	discount_flag boolean,
	id_percentage int,
	primary key (id),
	foreign key (id_clothes) references clothes(id),
	foreign key (id_percentage) references _percentage(id)
);

truncate discount_clothes;