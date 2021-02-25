-- Fecha de creación y actualización de los productos (clothes)
ALTER TABLE `clothes`
	ADD COLUMN created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
  ADD COLUMN updated_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
  ADD COLUMN description VARCHAR(250);