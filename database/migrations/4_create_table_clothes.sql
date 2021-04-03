-- tabla que almacena los productos, el nombre y la cantidad de cada uno
create table clothes(
	id int not null auto_increment,
	product_name varchar(50) not null,
	amount int not null,
	category_id INT,
	gender_id VARCHAR(10),
	created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
	updated_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
    price int,
	description VARCHAR(250),
	primary key (id),
	FOREIGN KEY (category_id) REFERENCES _categories(id),
  FOREIGN KEY (gender_id) REFERENCES _gender(id_name)
);

truncate clothes;