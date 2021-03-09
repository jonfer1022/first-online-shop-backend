-- Creación tabla intermedia entre clothes y sizes, relación muchos a muchos.
CREATE TABLE clothes_sizes(
	id int not null auto_increment,
    id_clothes int NOT NULL,
    id_sizes int NOT NULL,
    amount int,
    primary key (id),
    foreign key (id_clothes) references clothes(id),
    foreign key (id_sizes) references _sizes(id)
);