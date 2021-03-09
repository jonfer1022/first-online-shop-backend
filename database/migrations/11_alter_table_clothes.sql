-- Alteración tabla clothes para tener FK respecto al genero y las categorias
ALTER TABLE `clothes`
    ADD COLUMN category_id INT,
    ADD COLUMN gender_id VARCHAR(10);

ALTER TABLE `clothes` 
	ADD CONSTRAINT fk_category FOREIGN KEY (category_id) REFERENCES _categories(id),
    ADD CONSTRAINT fk_gender FOREIGN KEY (gender_id) REFERENCES _gender(id_name);