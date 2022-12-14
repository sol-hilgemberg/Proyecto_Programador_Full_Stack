-- MySQL Script generated by MySQL Workbench
-- Mon Oct 17 22:13:46 2022
-- Model: New Model    Version: 1.0
-- MySQL Workbench Forward Engineering

SET @OLD_UNIQUE_CHECKS=@@UNIQUE_CHECKS, UNIQUE_CHECKS=0;
SET @OLD_FOREIGN_KEY_CHECKS=@@FOREIGN_KEY_CHECKS, FOREIGN_KEY_CHECKS=0;
SET @OLD_SQL_MODE=@@SQL_MODE, SQL_MODE='ONLY_FULL_GROUP_BY,STRICT_TRANS_TABLES,NO_ZERO_IN_DATE,NO_ZERO_DATE,ERROR_FOR_DIVISION_BY_ZERO,NO_ENGINE_SUBSTITUTION';

-- -----------------------------------------------------
-- Schema Smart_Fit
-- -----------------------------------------------------
DROP SCHEMA IF EXISTS `Smart_Fit` ;

-- -----------------------------------------------------
-- Schema Smart_Fit
-- -----------------------------------------------------
CREATE SCHEMA IF NOT EXISTS `Smart_Fit` DEFAULT CHARACTER SET utf8 ;
-- -----------------------------------------------------
-- Schema gym
-- -----------------------------------------------------
DROP SCHEMA IF EXISTS `gym` ;

-- -----------------------------------------------------
-- Schema gym
-- -----------------------------------------------------
CREATE SCHEMA IF NOT EXISTS `gym` DEFAULT CHARACTER SET utf8mb4 ;
USE `Smart_Fit` ;

-- -----------------------------------------------------
-- Table `Smart_Fit`.`Cliente`
-- -----------------------------------------------------
CREATE TABLE IF NOT EXISTS `Smart_Fit`.`Cliente` (
  `idCliente` INT NOT NULL AUTO_INCREMENT,
  `Nombre` VARCHAR(60) NOT NULL,
  `Apellido` VARCHAR(60) NOT NULL,
  `Fecha de nacimiento` DATE NOT NULL,
  `DNI` INT NOT NULL,
  `Dirección` VARCHAR(100) NOT NULL,
  `Telefono` INT NOT NULL,
  `Email` VARCHAR(100) NOT NULL,
  `Nombre de usuario` VARCHAR(60) NOT NULL,
  PRIMARY KEY (`idCliente`))
ENGINE = InnoDB;

CREATE UNIQUE INDEX `DNI_UNIQUE` ON `Smart_Fit`.`Cliente` (`DNI` ASC) VISIBLE;

CREATE UNIQUE INDEX `Nombre de usuario_UNIQUE` ON `Smart_Fit`.`Cliente` (`Nombre de usuario` ASC) VISIBLE;


-- -----------------------------------------------------
-- Table `Smart_Fit`.`Rutina`
-- -----------------------------------------------------
CREATE TABLE IF NOT EXISTS `Smart_Fit`.`Rutina` (
  `idRutina` INT NOT NULL,
  `Descripción` TEXT NOT NULL,
  PRIMARY KEY (`idRutina`))
ENGINE = InnoDB;


-- -----------------------------------------------------
-- Table `Smart_Fit`.`Detalle rutina`
-- -----------------------------------------------------
CREATE TABLE IF NOT EXISTS `Smart_Fit`.`Detalle rutina` (
  `idDetalle rutina` INT NOT NULL AUTO_INCREMENT,
  `idRutina` INT NOT NULL,
  `Lunes` BIT NULL,
  `Martes` BIT NULL,
  `Miércoles` BIT NULL,
  `Jueves` BIT NULL,
  `Viernes` BIT NULL,
  `Sábado` BIT NULL,
  `Domingo` BIT NULL,
  PRIMARY KEY (`idDetalle rutina`),
  CONSTRAINT `fk_Detalle rutina_Rutina1`
    FOREIGN KEY (`idRutina`)
    REFERENCES `Smart_Fit`.`Rutina` (`idRutina`)
    ON DELETE NO ACTION
    ON UPDATE NO ACTION)
ENGINE = InnoDB;

CREATE INDEX `fk_Detalle rutina_Rutina1_idx` ON `Smart_Fit`.`Detalle rutina` (`idRutina` ASC) VISIBLE;


-- -----------------------------------------------------
-- Table `Smart_Fit`.`Entrenador`
-- -----------------------------------------------------
CREATE TABLE IF NOT EXISTS `Smart_Fit`.`Entrenador` (
  `idEntrenador` INT NOT NULL AUTO_INCREMENT,
  `Nombre` VARCHAR(60) NOT NULL,
  `Apellido` VARCHAR(60) NOT NULL,
  `Fecha de nacimiento` DATE NOT NULL,
  `DNI` INT NOT NULL,
  `Dirección` VARCHAR(100) NOT NULL,
  `Telefono` INT NOT NULL,
  `Email` VARCHAR(100) NOT NULL,
  `Nombre de usuario` VARCHAR(60) NOT NULL,
  PRIMARY KEY (`idEntrenador`))
ENGINE = InnoDB;

CREATE UNIQUE INDEX `DNI_UNIQUE` ON `Smart_Fit`.`Entrenador` (`DNI` ASC) VISIBLE;

CREATE UNIQUE INDEX `Nombre de usuario_UNIQUE` ON `Smart_Fit`.`Entrenador` (`Nombre de usuario` ASC) VISIBLE;


-- -----------------------------------------------------
-- Table `Smart_Fit`.`Plan`
-- -----------------------------------------------------
CREATE TABLE IF NOT EXISTS `Smart_Fit`.`Plan` (
  `idPlan` INT NOT NULL AUTO_INCREMENT,
  `Nombre` VARCHAR(60) NOT NULL,
  `Por tiempo` BIT NOT NULL,
  `Duración` INT NOT NULL,
  `Valor` DECIMAL NOT NULL,
  `Vencimiento` INT NOT NULL,
  `Descripción` TEXT NOT NULL,
  PRIMARY KEY (`idPlan`))
ENGINE = InnoDB;


-- -----------------------------------------------------
-- Table `Smart_Fit`.`Plan cliente`
-- -----------------------------------------------------
CREATE TABLE IF NOT EXISTS `Smart_Fit`.`Plan cliente` (
  `idPlan cliente` INT NOT NULL AUTO_INCREMENT,
  `IdCliente` INT NOT NULL,
  `idPlan` INT NOT NULL,
  `Fecha de compra` DATE NOT NULL,
  `Fecha de vencimiento` DATE NOT NULL,
  PRIMARY KEY (`idPlan cliente`),
  CONSTRAINT `fk_Plan cliente_Cliente1`
    FOREIGN KEY (`IdCliente`)
    REFERENCES `Smart_Fit`.`Cliente` (`idCliente`)
    ON DELETE NO ACTION
    ON UPDATE NO ACTION,
  CONSTRAINT `fk_Plan cliente_Plan1`
    FOREIGN KEY (`idPlan`)
    REFERENCES `Smart_Fit`.`Plan` (`idPlan`)
    ON DELETE NO ACTION
    ON UPDATE NO ACTION)
ENGINE = InnoDB;

CREATE INDEX `fk_Plan cliente_Cliente1_idx` ON `Smart_Fit`.`Plan cliente` (`IdCliente` ASC) VISIBLE;

CREATE INDEX `fk_Plan cliente_Plan1_idx` ON `Smart_Fit`.`Plan cliente` (`idPlan` ASC) VISIBLE;


-- -----------------------------------------------------
-- Table `Smart_Fit`.`Progreso cliente`
-- -----------------------------------------------------
CREATE TABLE IF NOT EXISTS `Smart_Fit`.`Progreso cliente` (
  `idProgreso cliente` INT NOT NULL,
  `idCliente` INT NOT NULL,
  `idEntrenador` INT NOT NULL,
  `Fecha` DATE NOT NULL,
  `Peso` FLOAT NOT NULL,
  `Altura` FLOAT NOT NULL,
  `IMC` FLOAT NOT NULL,
  `Observaciones` TEXT NULL,
  PRIMARY KEY (`idProgreso cliente`),
  CONSTRAINT `fk_Progreso cliente_Cliente1`
    FOREIGN KEY (`idCliente`)
    REFERENCES `Smart_Fit`.`Cliente` (`idCliente`)
    ON DELETE NO ACTION
    ON UPDATE NO ACTION,
  CONSTRAINT `fk_Progreso cliente_Entrenador1`
    FOREIGN KEY (`idEntrenador`)
    REFERENCES `Smart_Fit`.`Entrenador` (`idEntrenador`)
    ON DELETE NO ACTION
    ON UPDATE NO ACTION)
ENGINE = InnoDB;

CREATE INDEX `fk_Progreso cliente_Cliente1_idx` ON `Smart_Fit`.`Progreso cliente` (`idCliente` ASC) VISIBLE;

CREATE INDEX `fk_Progreso cliente_Entrenador1_idx` ON `Smart_Fit`.`Progreso cliente` (`idEntrenador` ASC) VISIBLE;


-- -----------------------------------------------------
-- Table `Smart_Fit`.`Rutina cliente`
-- -----------------------------------------------------
CREATE TABLE IF NOT EXISTS `Smart_Fit`.`Rutina cliente` (
  `idRutina cliente` INT NOT NULL,
  `idCliente` INT NOT NULL,
  `idRutina` INT NOT NULL,
  PRIMARY KEY (`idRutina cliente`),
  CONSTRAINT `fk_Rutina cliente_Cliente1`
    FOREIGN KEY (`idCliente`)
    REFERENCES `Smart_Fit`.`Cliente` (`idCliente`)
    ON DELETE NO ACTION
    ON UPDATE NO ACTION,
  CONSTRAINT `fk_Rutina cliente_Rutina1`
    FOREIGN KEY (`idRutina`)
    REFERENCES `Smart_Fit`.`Rutina` (`idRutina`)
    ON DELETE NO ACTION
    ON UPDATE NO ACTION)
ENGINE = InnoDB;

CREATE INDEX `fk_Rutina cliente_Cliente1_idx` ON `Smart_Fit`.`Rutina cliente` (`idCliente` ASC) VISIBLE;

CREATE INDEX `fk_Rutina cliente_Rutina1_idx` ON `Smart_Fit`.`Rutina cliente` (`idRutina` ASC) VISIBLE;


-- -----------------------------------------------------
-- Table `Smart_Fit`.`Ejercicio`
-- -----------------------------------------------------
CREATE TABLE IF NOT EXISTS `Smart_Fit`.`Ejercicio` (
  `idEjercicio` INT NOT NULL AUTO_INCREMENT,
  `idDetalle rutina` INT NOT NULL,
  `Descripción` TEXT NOT NULL,
  `Observación` TEXT NOT NULL,
  PRIMARY KEY (`idEjercicio`),
  CONSTRAINT `fk_Ejercicio_Detalle rutina1`
    FOREIGN KEY (`idDetalle rutina`)
    REFERENCES `Smart_Fit`.`Detalle rutina` (`idDetalle rutina`)
    ON DELETE NO ACTION
    ON UPDATE NO ACTION)
ENGINE = InnoDB;

CREATE INDEX `fk_Ejercicio_Detalle rutina1_idx` ON `Smart_Fit`.`Ejercicio` (`idDetalle rutina` ASC) VISIBLE;

USE `gym` ;

-- -----------------------------------------------------
-- Table `gym`.`cliente`
-- -----------------------------------------------------
CREATE TABLE IF NOT EXISTS `gym`.`cliente` (
  `idCliente` INT(11) NOT NULL AUTO_INCREMENT,
  `Nombre` VARCHAR(60) NOT NULL,
  `Apeliido` VARCHAR(60) NOT NULL,
  `Fecha de nacimiento` DATE NOT NULL,
  `DNI` INT(11) NOT NULL,
  `Dirección` VARCHAR(100) NOT NULL,
  `Telefono` INT(11) NOT NULL,
  `Email` VARCHAR(100) NOT NULL,
  `Nombre de usuario` VARCHAR(60) NOT NULL,
  PRIMARY KEY (`idCliente`))
ENGINE = InnoDB
DEFAULT CHARACTER SET = utf8mb4;


-- -----------------------------------------------------
-- Table `gym`.`detalle rutina`
-- -----------------------------------------------------
CREATE TABLE IF NOT EXISTS `gym`.`detalle rutina` (
  `idDetalle rutina` INT(11) NOT NULL,
  `idRutina` INT(11) NOT NULL,
  `Lunes` BIT(1) NULL DEFAULT NULL,
  `Martes` BIT(1) NULL DEFAULT NULL,
  `Miércoles` BIT(1) NULL DEFAULT NULL,
  `Jueves` BIT(1) NULL DEFAULT NULL,
  `Viernes` BIT(1) NULL DEFAULT NULL,
  `Sábado` BIT(1) NULL DEFAULT NULL,
  `Domingo` BIT(1) NULL DEFAULT NULL,
  PRIMARY KEY (`idDetalle rutina`))
ENGINE = InnoDB
DEFAULT CHARACTER SET = utf8mb4;


-- -----------------------------------------------------
-- Table `gym`.`entrenador`
-- -----------------------------------------------------
CREATE TABLE IF NOT EXISTS `gym`.`entrenador` (
  `idEntrenador` INT(11) NOT NULL AUTO_INCREMENT,
  `Nombre` VARCHAR(60) NOT NULL,
  `Apellido` VARCHAR(60) NOT NULL,
  `Fecha de nacimiento` DATE NOT NULL,
  `DNI` INT(11) NOT NULL,
  `Dirección` VARCHAR(100) NOT NULL,
  `Telefono` INT(11) NOT NULL,
  `Email` VARCHAR(100) NOT NULL,
  `Nombre de usuario` VARCHAR(60) NOT NULL,
  PRIMARY KEY (`idEntrenador`))
ENGINE = InnoDB
DEFAULT CHARACTER SET = utf8mb4;


-- -----------------------------------------------------
-- Table `gym`.`plan cliente`
-- -----------------------------------------------------
CREATE TABLE IF NOT EXISTS `gym`.`plan cliente` (
  `idPlanCliente` INT(11) NOT NULL AUTO_INCREMENT,
  `idCliente` INT(11) NULL DEFAULT NULL,
  `idPlan` INT(11) NULL DEFAULT NULL,
  `Fecha de compra` DATE NULL DEFAULT NULL,
  `Fecha de vencimiento` DATE NULL DEFAULT NULL,
  PRIMARY KEY (`idPlanCliente`))
ENGINE = InnoDB
DEFAULT CHARACTER SET = utf8mb4;


-- -----------------------------------------------------
-- Table `gym`.`planes`
-- -----------------------------------------------------
CREATE TABLE IF NOT EXISTS `gym`.`planes` (
  `idPlanes` INT(11) NOT NULL AUTO_INCREMENT,
  `Nombre` VARCHAR(60) NOT NULL,
  `Por tiempo` BIT(1) NOT NULL,
  `Duración` INT(11) NOT NULL,
  `Valor` DECIMAL(10,0) NOT NULL,
  `Vencimiento` INT(11) NOT NULL,
  `Descripción` TEXT NOT NULL,
  PRIMARY KEY (`idPlanes`))
ENGINE = InnoDB
DEFAULT CHARACTER SET = utf8mb4;


-- -----------------------------------------------------
-- Table `gym`.`progreso cliente`
-- -----------------------------------------------------
CREATE TABLE IF NOT EXISTS `gym`.`progreso cliente` (
  `idProgreso cliente` INT(11) NOT NULL,
  `idCliente` INT(11) NULL DEFAULT NULL,
  `idEntrenador` INT(11) NULL DEFAULT NULL,
  `Fecha` DATE NOT NULL,
  `Peso` FLOAT NOT NULL,
  `Altura` FLOAT NOT NULL,
  `IMC` FLOAT NOT NULL,
  `Observaciones` VARCHAR(100) NULL DEFAULT NULL,
  PRIMARY KEY (`idProgreso cliente`))
ENGINE = InnoDB
DEFAULT CHARACTER SET = utf8mb4;


-- -----------------------------------------------------
-- Table `gym`.`rutina`
-- -----------------------------------------------------
CREATE TABLE IF NOT EXISTS `gym`.`rutina` (
  `idRutina` INT(11) NOT NULL,
  `Descripción` VARCHAR(100) NOT NULL,
  PRIMARY KEY (`idRutina`))
ENGINE = InnoDB
DEFAULT CHARACTER SET = utf8mb4;


-- -----------------------------------------------------
-- Table `gym`.`rutina cliente`
-- -----------------------------------------------------
CREATE TABLE IF NOT EXISTS `gym`.`rutina cliente` (
  `idRutina cliente` INT(11) NOT NULL,
  `idCliente` INT(11) NOT NULL,
  `idRutina` INT(11) NOT NULL,
  PRIMARY KEY (`idRutina cliente`))
ENGINE = InnoDB
DEFAULT CHARACTER SET = utf8mb4;


SET SQL_MODE=@OLD_SQL_MODE;
SET FOREIGN_KEY_CHECKS=@OLD_FOREIGN_KEY_CHECKS;
SET UNIQUE_CHECKS=@OLD_UNIQUE_CHECKS;
