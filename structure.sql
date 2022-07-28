CREATE SCHEMA `ikaro_db` DEFAULT CHARACTER SET utf8 ;

CREATE TABLE `ikaro_db`.`phones` (
  `id` INT NOT NULL AUTO_INCREMENT,
  `brand` VARCHAR(100) NOT NULL,
  `model` VARCHAR(45) NOT NULL,
  `category` VARCHAR(45) NOT NULL,
  PRIMARY KEY (`id`));


CREATE TABLE `ikaro_db`.`users_phones` (
  `id` INT NOT NULL AUTO_INCREMENT,
  `id_users` INT NOT NULL,
  `id_phones` INT NOT NULL,
  PRIMARY KEY (`id`),
  INDEX `fk_phones_idx` (`id_phones`) ,
  INDEX `fk_users_idx` (`id_users`) ,
  CONSTRAINT `fk_users`
    FOREIGN KEY (`id_users`)
    REFERENCES `ikaro_db`.`users` (`id`)
    ON DELETE NO ACTION
    ON UPDATE NO ACTION,
  CONSTRAINT `fk_phones`
    FOREIGN KEY (`id_phones`)
    REFERENCES `ikaro_db`.`phones` (`id`)
    ON DELETE NO ACTION
    ON UPDATE NO ACTION);


CREATE TABLE `ikaro_db`.`users` (
  `id` INT NOT NULL AUTO_INCREMENT,
  `full_name` VARCHAR(50) NOT NULL,
  `email` VARCHAR(50) NOT NULL,
  `password` VARCHAR(50) NOT NULL,
  `avatar` VARCHAR(50) NULL,
  `admin` TINYINT NOT NULL,
  PRIMARY KEY (`id`));


CREATE TABLE `ikaro_db`.`inf_general` (
  `id` INT NOT NULL AUTO_INCREMENT,
  `price` DECIMAL NOT NULL,
  `discount` INT NULL,
  `description` TEXT NOT NULL,
  `image` VARCHAR(45) CHARACTER SET 'big5' NOT NULL,
  `video` VARCHAR(45) NOT NULL,
  PRIMARY KEY (`id`));


CREATE TABLE `ikaro_db`.`characteristics` (
  `id` INT NOT NULL AUTO_INCREMENT,
  `systemO` VARCHAR(45) NOT NULL,
  `internal_memory` INT NOT NULL,
  `external_memory` INT NOT NULL,
  `ram` INT NULL,
  PRIMARY KEY (`id`));


CREATE TABLE `ikaro_db`.`screen_specifications` (
  `id` INT NOT NULL AUTO_INCREMENT,
  `inches` INT NOT NULL,
  `resolution` INT NOT NULL,
  PRIMARY KEY (`id`));


CREATE TABLE `ikaro_db`.`camera_specifications` (
  `id` INT NOT NULL,
  `camera` INT NOT NULL,
  `frontal_camera` INT NOT NULL,
  `recorder` INT NOT NULL,
  PRIMARY KEY (`id`));


ALTER TABLE `ikaro_db`.`phones` 
ADD CONSTRAINT `fk_characteristics`
  FOREIGN KEY (`id_characteristics`)
  REFERENCES `ikaro_db`.`characteristics` (`id`)
  ON DELETE NO ACTION
  ON UPDATE NO ACTION;


ALTER TABLE `ikaro_db`.`phones` 
ADD CONSTRAINT `fk_inf_general`
  FOREIGN KEY (`id_inf_general`)
  REFERENCES `ikaro_db`.`inf_general` (`id`)
  ON DELETE NO ACTION
  ON UPDATE NO ACTION;


ALTER TABLE `ikaro_db`.`characteristics` 
ADD COLUMN `id_camera` INT NOT NULL AFTER `ram`,
ADD COLUMN `id_screen` INT NOT NULL AFTER `id_camera`,
CHANGE COLUMN `ram` `ram` INT(11) NOT NULL ,
ADD INDEX `fk_camera_idx` (`id_camera`),
ADD INDEX `fk_screen_idx` (`id_screen`) ;
;
ALTER TABLE `ikaro_db`.`characteristics` 
ADD CONSTRAINT `fk_camera`
  FOREIGN KEY (`id_camera`)
  REFERENCES `ikaro_db`.`camera_specifications` (`id`)
  ON DELETE NO ACTION
  ON UPDATE NO ACTION,
ADD CONSTRAINT `fk_screen`
  FOREIGN KEY (`id_screen`)
  REFERENCES `ikaro_db`.`screen_specifications` (`id`)
  ON DELETE NO ACTION
  ON UPDATE NO ACTION;
