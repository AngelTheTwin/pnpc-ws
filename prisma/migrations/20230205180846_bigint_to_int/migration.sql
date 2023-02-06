/*
  Warnings:

  - You are about to alter the column `ID_PERSONA` on the `ACADEMICO_DISTINCION` table. The data in that column could be lost. The data in that column will be cast from `BigInt` to `Int`.
  - The primary key for the `ARTICULO` table will be changed. If it partially fails, the table could be left without primary key constraint.
  - You are about to alter the column `ID_PRODUCTO` on the `ARTICULO` table. The data in that column could be lost. The data in that column will be cast from `BigInt` to `Int`.
  - The primary key for the `CAPITULO_LIBRO` table will be changed. If it partially fails, the table could be left without primary key constraint.
  - You are about to alter the column `ID_PRODUCTO` on the `CAPITULO_LIBRO` table. The data in that column could be lost. The data in that column will be cast from `BigInt` to `Int`.
  - The primary key for the `COLABORA` table will be changed. If it partially fails, the table could be left without primary key constraint.
  - You are about to alter the column `ID_PRODUCTO` on the `COLABORA` table. The data in that column could be lost. The data in that column will be cast from `BigInt` to `Int`.
  - You are about to alter the column `ID_PERSONA` on the `COLABORA` table. The data in that column could be lost. The data in that column will be cast from `BigInt` to `Int`.
  - The primary key for the `CONVENIO_MOVILIDAD` table will be changed. If it partially fails, the table could be left without primary key constraint.
  - You are about to alter the column `ID_CONVENIO` on the `CONVENIO_MOVILIDAD` table. The data in that column could be lost. The data in that column will be cast from `BigInt` to `Int`.
  - You are about to alter the column `ID_PROGRAMA` on the `CONVENIO_MOVILIDAD` table. The data in that column could be lost. The data in that column will be cast from `BigInt` to `Int`.
  - You are about to alter the column `ID_PERSONA_ACADEMICO` on the `DESIGNA` table. The data in that column could be lost. The data in that column will be cast from `BigInt` to `Int`.
  - You are about to alter the column `ID_PERSONA_ESTUDIANTE` on the `DESIGNA` table. The data in that column could be lost. The data in that column will be cast from `BigInt` to `Int`.
  - The primary key for the `EJERCICIO_PROFESIONAL` table will be changed. If it partially fails, the table could be left without primary key constraint.
  - You are about to alter the column `ID_EJERCICIO_PROFESIONAL` on the `EJERCICIO_PROFESIONAL` table. The data in that column could be lost. The data in that column will be cast from `BigInt` to `Int`.
  - You are about to alter the column `ID_PERSONA` on the `EJERCICIO_PROFESIONAL` table. The data in that column could be lost. The data in that column will be cast from `BigInt` to `Int`.
  - The primary key for the `EMPLEO` table will be changed. If it partially fails, the table could be left without primary key constraint.
  - You are about to alter the column `ID_EMPLEO` on the `EMPLEO` table. The data in that column could be lost. The data in that column will be cast from `BigInt` to `Int`.
  - You are about to alter the column `ID_PERSONA` on the `EMPLEO` table. The data in that column could be lost. The data in that column will be cast from `BigInt` to `Int`.
  - The primary key for the `ESTANCIA` table will be changed. If it partially fails, the table could be left without primary key constraint.
  - You are about to alter the column `ID_ESTANCIA` on the `ESTANCIA` table. The data in that column could be lost. The data in that column will be cast from `BigInt` to `Int`.
  - You are about to alter the column `ID_CONVENIO` on the `ESTANCIA` table. The data in that column could be lost. The data in that column will be cast from `BigInt` to `Int`.
  - You are about to alter the column `ID_PROGRAMA` on the `ESTANCIA` table. The data in that column could be lost. The data in that column will be cast from `BigInt` to `Int`.
  - You are about to alter the column `ID_PERSONA` on the `ESTANCIA` table. The data in that column could be lost. The data in that column will be cast from `BigInt` to `Int`.
  - The primary key for the `EVENTO` table will be changed. If it partially fails, the table could be left without primary key constraint.
  - You are about to alter the column `ID_EVENTO` on the `EVENTO` table. The data in that column could be lost. The data in that column will be cast from `BigInt` to `Int`.
  - You are about to alter the column `ID_PROGRAMA` on the `EVENTO` table. The data in that column could be lost. The data in that column will be cast from `BigInt` to `Int`.
  - The primary key for the `FINANCIAMIENTO` table will be changed. If it partially fails, the table could be left without primary key constraint.
  - You are about to alter the column `ID_FINANCIAMIENTO` on the `FINANCIAMIENTO` table. The data in that column could be lost. The data in that column will be cast from `BigInt` to `Int`.
  - You are about to alter the column `NUMERO_BECA` on the `FINANCIAMIENTO` table. The data in that column could be lost. The data in that column will be cast from `BigInt` to `Int`.
  - You are about to alter the column `ID_PERSONA` on the `FINANCIAMIENTO` table. The data in that column could be lost. The data in that column will be cast from `BigInt` to `Int`.
  - The primary key for the `FORMACION_COMPLEMENTARIA` table will be changed. If it partially fails, the table could be left without primary key constraint.
  - You are about to alter the column `ID_FORMACION_COMPLEMENTARIA` on the `FORMACION_COMPLEMENTARIA` table. The data in that column could be lost. The data in that column will be cast from `BigInt` to `Int`.
  - You are about to alter the column `ID_PERSONA` on the `FORMACION_COMPLEMENTARIA` table. The data in that column could be lost. The data in that column will be cast from `BigInt` to `Int`.
  - The primary key for the `GENERACION` table will be changed. If it partially fails, the table could be left without primary key constraint.
  - You are about to alter the column `ID_GENERACION` on the `GENERACION` table. The data in that column could be lost. The data in that column will be cast from `BigInt` to `Int`.
  - You are about to alter the column `ID_PLAN` on the `GENERACION` table. The data in that column could be lost. The data in that column will be cast from `BigInt` to `Int`.
  - The primary key for the `GRADO` table will be changed. If it partially fails, the table could be left without primary key constraint.
  - You are about to alter the column `ID_GRADO` on the `GRADO` table. The data in that column could be lost. The data in that column will be cast from `BigInt` to `Int`.
  - You are about to alter the column `ID_PERSONA` on the `GRADO` table. The data in that column could be lost. The data in that column will be cast from `BigInt` to `Int`.
  - The primary key for the `LGAC` table will be changed. If it partially fails, the table could be left without primary key constraint.
  - You are about to alter the column `ID_LGAC` on the `LGAC` table. The data in that column could be lost. The data in that column will be cast from `BigInt` to `Int`.
  - The primary key for the `LIBRO` table will be changed. If it partially fails, the table could be left without primary key constraint.
  - You are about to alter the column `ID_PRODUCTO` on the `LIBRO` table. The data in that column could be lost. The data in that column will be cast from `BigInt` to `Int`.
  - The primary key for the `MEMORIA_CONGRESO` table will be changed. If it partially fails, the table could be left without primary key constraint.
  - You are about to alter the column `ID_PRODUCTO` on the `MEMORIA_CONGRESO` table. The data in that column could be lost. The data in that column will be cast from `BigInt` to `Int`.
  - The primary key for the `PERSONA` table will be changed. If it partially fails, the table could be left without primary key constraint.
  - You are about to alter the column `ID_PERSONA` on the `PERSONA` table. The data in that column could be lost. The data in that column will be cast from `BigInt` to `Int`.
  - You are about to alter the column `CVU` on the `PERSONA` table. The data in that column could be lost. The data in that column will be cast from `BigInt` to `Int`.
  - You are about to alter the column `ID_GENERACION` on the `PERSONA` table. The data in that column could be lost. The data in that column will be cast from `BigInt` to `Int`.
  - You are about to alter the column `ID_PROGRAMA` on the `PERTENECE` table. The data in that column could be lost. The data in that column will be cast from `BigInt` to `Int`.
  - You are about to alter the column `ID_PERSONA` on the `PERTENECE` table. The data in that column could be lost. The data in that column will be cast from `BigInt` to `Int`.
  - The primary key for the `PLAN_ESTUDIOS` table will be changed. If it partially fails, the table could be left without primary key constraint.
  - You are about to alter the column `ID_PLAN` on the `PLAN_ESTUDIOS` table. The data in that column could be lost. The data in that column will be cast from `BigInt` to `Int`.
  - You are about to alter the column `ID_PROGRAMA` on the `PLAN_ESTUDIOS` table. The data in that column could be lost. The data in that column will be cast from `BigInt` to `Int`.
  - You are about to alter the column `ID_PLAN` on the `PLAN_ESTUDIOS_META` table. The data in that column could be lost. The data in that column will be cast from `BigInt` to `Int`.
  - The primary key for the `PRODUCTO_ACADEMICO` table will be changed. If it partially fails, the table could be left without primary key constraint.
  - You are about to alter the column `ID_PRODUCTO` on the `PRODUCTO_ACADEMICO` table. The data in that column could be lost. The data in that column will be cast from `BigInt` to `Int`.
  - You are about to alter the column `ID_LGAC` on the `PRODUCTO_ACADEMICO` table. The data in that column could be lost. The data in that column will be cast from `BigInt` to `Int`.
  - You are about to alter the column `ID_ESTANCIA` on the `PRODUCTO_ACADEMICO` table. The data in that column could be lost. The data in that column will be cast from `BigInt` to `Int`.
  - The primary key for the `PROGRAMA_EDUCATIVO` table will be changed. If it partially fails, the table could be left without primary key constraint.
  - You are about to alter the column `ID_PROGRAMA` on the `PROGRAMA_EDUCATIVO` table. The data in that column could be lost. The data in that column will be cast from `BigInt` to `Int`.
  - You are about to alter the column `COORDINADOR` on the `PROGRAMA_EDUCATIVO` table. The data in that column could be lost. The data in that column will be cast from `BigInt` to `Int`.
  - You are about to alter the column `REPRESENTANTE` on the `PROGRAMA_EDUCATIVO` table. The data in that column could be lost. The data in that column will be cast from `BigInt` to `Int`.
  - You are about to alter the column `COORDINADOR_ACTUAL` on the `PROGRAMA_EDUCATIVO` table. The data in that column could be lost. The data in that column will be cast from `BigInt` to `Int`.
  - You are about to alter the column `ID_PROGRAMA` on the `PROGRAMA_EDUCATIVO_CAMPO_CONOCIMIENTO` table. The data in that column could be lost. The data in that column will be cast from `BigInt` to `Int`.
  - The primary key for the `PROTOTIPO` table will be changed. If it partially fails, the table could be left without primary key constraint.
  - You are about to alter the column `ID_PRODUCTO` on the `PROTOTIPO` table. The data in that column could be lost. The data in that column will be cast from `BigInt` to `Int`.
  - The primary key for the `RECONOCIMIENTO` table will be changed. If it partially fails, the table could be left without primary key constraint.
  - You are about to alter the column `ID_RECONOCIMIENTO` on the `RECONOCIMIENTO` table. The data in that column could be lost. The data in that column will be cast from `BigInt` to `Int`.
  - You are about to alter the column `ID_PERSONA` on the `RECONOCIMIENTO` table. The data in that column could be lost. The data in that column will be cast from `BigInt` to `Int`.
  - You are about to alter the column `ID_LGAC` on the `REGISTRA` table. The data in that column could be lost. The data in that column will be cast from `BigInt` to `Int`.
  - You are about to alter the column `ID_PERSONA` on the `REGISTRA` table. The data in that column could be lost. The data in that column will be cast from `BigInt` to `Int`.
  - The primary key for the `SINODAL` table will be changed. If it partially fails, the table could be left without primary key constraint.
  - You are about to alter the column `ID_SINODAL` on the `SINODAL` table. The data in that column could be lost. The data in that column will be cast from `BigInt` to `Int`.
  - You are about to alter the column `ID_PRODUCTO` on the `SINODAL` table. The data in that column could be lost. The data in that column will be cast from `BigInt` to `Int`.
  - The primary key for the `TRABAJO_RECEPCIONAL` table will be changed. If it partially fails, the table could be left without primary key constraint.
  - You are about to alter the column `ID_PRODUCTO` on the `TRABAJO_RECEPCIONAL` table. The data in that column could be lost. The data in that column will be cast from `BigInt` to `Int`.

*/
-- DropForeignKey
ALTER TABLE `ACADEMICO_DISTINCION` DROP FOREIGN KEY `academico_distincion_ibfk_1`;

-- DropForeignKey
ALTER TABLE `ARTICULO` DROP FOREIGN KEY `articulo_ibfk_1`;

-- DropForeignKey
ALTER TABLE `CAPITULO_LIBRO` DROP FOREIGN KEY `capitulo_libro_ibfk_1`;

-- DropForeignKey
ALTER TABLE `COLABORA` DROP FOREIGN KEY `colabora_ibfk_1`;

-- DropForeignKey
ALTER TABLE `COLABORA` DROP FOREIGN KEY `colabora_ibfk_2`;

-- DropForeignKey
ALTER TABLE `CONVENIO_MOVILIDAD` DROP FOREIGN KEY `convenio_movilidad_ibfk_1`;

-- DropForeignKey
ALTER TABLE `DESIGNA` DROP FOREIGN KEY `designa_ibfk_1`;

-- DropForeignKey
ALTER TABLE `DESIGNA` DROP FOREIGN KEY `designa_ibfk_2`;

-- DropForeignKey
ALTER TABLE `EJERCICIO_PROFESIONAL` DROP FOREIGN KEY `ejercicio_profesional_ibfk_1`;

-- DropForeignKey
ALTER TABLE `EMPLEO` DROP FOREIGN KEY `empleo_ibfk_1`;

-- DropForeignKey
ALTER TABLE `ESTANCIA` DROP FOREIGN KEY `estancia_ibfk_1`;

-- DropForeignKey
ALTER TABLE `ESTANCIA` DROP FOREIGN KEY `estancia_ibfk_2`;

-- DropForeignKey
ALTER TABLE `ESTANCIA` DROP FOREIGN KEY `estancia_ibfk_3`;

-- DropForeignKey
ALTER TABLE `EVENTO` DROP FOREIGN KEY `evento_ibfk_1`;

-- DropForeignKey
ALTER TABLE `FINANCIAMIENTO` DROP FOREIGN KEY `financiamiento_ibfk_1`;

-- DropForeignKey
ALTER TABLE `FORMACION_COMPLEMENTARIA` DROP FOREIGN KEY `formacion_complementaria_ibfk_1`;

-- DropForeignKey
ALTER TABLE `GENERACION` DROP FOREIGN KEY `generacion_ibfk_1`;

-- DropForeignKey
ALTER TABLE `GRADO` DROP FOREIGN KEY `grado_ibfk_1`;

-- DropForeignKey
ALTER TABLE `LIBRO` DROP FOREIGN KEY `libro_ibfk_1`;

-- DropForeignKey
ALTER TABLE `MEMORIA_CONGRESO` DROP FOREIGN KEY `memoria_congreso_ibfk_1`;

-- DropForeignKey
ALTER TABLE `PERSONA` DROP FOREIGN KEY `persona_ibfk_1`;

-- DropForeignKey
ALTER TABLE `PERTENECE` DROP FOREIGN KEY `pertenece_ibfk_1`;

-- DropForeignKey
ALTER TABLE `PERTENECE` DROP FOREIGN KEY `pertenece_ibfk_2`;

-- DropForeignKey
ALTER TABLE `PLAN_ESTUDIOS` DROP FOREIGN KEY `plan_estudios_ibfk_1`;

-- DropForeignKey
ALTER TABLE `PLAN_ESTUDIOS_META` DROP FOREIGN KEY `plan_estudios_meta_ibfk_1`;

-- DropForeignKey
ALTER TABLE `PRODUCTO_ACADEMICO` DROP FOREIGN KEY `producto_academico_ibfk_1`;

-- DropForeignKey
ALTER TABLE `PRODUCTO_ACADEMICO` DROP FOREIGN KEY `producto_academico_ibfk_2`;

-- DropForeignKey
ALTER TABLE `PROGRAMA_EDUCATIVO` DROP FOREIGN KEY `fk_coordinador`;

-- DropForeignKey
ALTER TABLE `PROGRAMA_EDUCATIVO` DROP FOREIGN KEY `programa_educativo_ibfk_1`;

-- DropForeignKey
ALTER TABLE `PROGRAMA_EDUCATIVO` DROP FOREIGN KEY `programa_educativo_ibfk_2`;

-- DropForeignKey
ALTER TABLE `PROGRAMA_EDUCATIVO_CAMPO_CONOCIMIENTO` DROP FOREIGN KEY `programa_educativo_campo_conocimiento_ibfk_1`;

-- DropForeignKey
ALTER TABLE `PROTOTIPO` DROP FOREIGN KEY `prototipo_ibfk_1`;

-- DropForeignKey
ALTER TABLE `RECONOCIMIENTO` DROP FOREIGN KEY `reconocimiento_ibfk_1`;

-- DropForeignKey
ALTER TABLE `REGISTRA` DROP FOREIGN KEY `registra_ibfk_1`;

-- DropForeignKey
ALTER TABLE `REGISTRA` DROP FOREIGN KEY `registra_ibfk_2`;

-- DropForeignKey
ALTER TABLE `SINODAL` DROP FOREIGN KEY `sinodal_ibfk_1`;

-- DropForeignKey
ALTER TABLE `TRABAJO_RECEPCIONAL` DROP FOREIGN KEY `trabajo_recepcional_ibfk_1`;

-- AlterTable
ALTER TABLE `ACADEMICO_DISTINCION` MODIFY `ID_PERSONA` INTEGER NULL;

-- AlterTable
ALTER TABLE `ARTICULO` DROP PRIMARY KEY,
    MODIFY `ID_PRODUCTO` INTEGER NOT NULL,
    ADD PRIMARY KEY (`ID_PRODUCTO`);

-- AlterTable
ALTER TABLE `CAPITULO_LIBRO` DROP PRIMARY KEY,
    MODIFY `ID_PRODUCTO` INTEGER NOT NULL,
    ADD PRIMARY KEY (`ID_PRODUCTO`);

-- AlterTable
ALTER TABLE `COLABORA` DROP PRIMARY KEY,
    MODIFY `ID_PRODUCTO` INTEGER NOT NULL,
    MODIFY `ID_PERSONA` INTEGER NOT NULL,
    ADD PRIMARY KEY (`ID_PERSONA`, `ID_PRODUCTO`);

-- AlterTable
ALTER TABLE `CONVENIO_MOVILIDAD` DROP PRIMARY KEY,
    MODIFY `ID_CONVENIO` INTEGER NOT NULL AUTO_INCREMENT,
    MODIFY `ID_PROGRAMA` INTEGER NULL,
    ADD PRIMARY KEY (`ID_CONVENIO`);

-- AlterTable
ALTER TABLE `DESIGNA` MODIFY `ID_PERSONA_ACADEMICO` INTEGER NULL,
    MODIFY `ID_PERSONA_ESTUDIANTE` INTEGER NULL;

-- AlterTable
ALTER TABLE `EJERCICIO_PROFESIONAL` DROP PRIMARY KEY,
    MODIFY `ID_EJERCICIO_PROFESIONAL` INTEGER NOT NULL AUTO_INCREMENT,
    MODIFY `ID_PERSONA` INTEGER NULL,
    ADD PRIMARY KEY (`ID_EJERCICIO_PROFESIONAL`);

-- AlterTable
ALTER TABLE `EMPLEO` DROP PRIMARY KEY,
    MODIFY `ID_EMPLEO` INTEGER NOT NULL AUTO_INCREMENT,
    MODIFY `ID_PERSONA` INTEGER NULL,
    ADD PRIMARY KEY (`ID_EMPLEO`);

-- AlterTable
ALTER TABLE `ESTANCIA` DROP PRIMARY KEY,
    MODIFY `ID_ESTANCIA` INTEGER NOT NULL AUTO_INCREMENT,
    MODIFY `ID_CONVENIO` INTEGER NULL,
    MODIFY `ID_PROGRAMA` INTEGER NULL,
    MODIFY `ID_PERSONA` INTEGER NULL,
    ADD PRIMARY KEY (`ID_ESTANCIA`);

-- AlterTable
ALTER TABLE `EVENTO` DROP PRIMARY KEY,
    MODIFY `ID_EVENTO` INTEGER NOT NULL AUTO_INCREMENT,
    MODIFY `ID_PROGRAMA` INTEGER NULL,
    ADD PRIMARY KEY (`ID_EVENTO`);

-- AlterTable
ALTER TABLE `FINANCIAMIENTO` DROP PRIMARY KEY,
    MODIFY `ID_FINANCIAMIENTO` INTEGER NOT NULL AUTO_INCREMENT,
    MODIFY `NUMERO_BECA` INTEGER NULL,
    MODIFY `ID_PERSONA` INTEGER NULL,
    ADD PRIMARY KEY (`ID_FINANCIAMIENTO`);

-- AlterTable
ALTER TABLE `FORMACION_COMPLEMENTARIA` DROP PRIMARY KEY,
    MODIFY `ID_FORMACION_COMPLEMENTARIA` INTEGER NOT NULL AUTO_INCREMENT,
    MODIFY `ID_PERSONA` INTEGER NULL,
    ADD PRIMARY KEY (`ID_FORMACION_COMPLEMENTARIA`);

-- AlterTable
ALTER TABLE `GENERACION` DROP PRIMARY KEY,
    MODIFY `ID_GENERACION` INTEGER NOT NULL AUTO_INCREMENT,
    MODIFY `ID_PLAN` INTEGER NULL,
    ADD PRIMARY KEY (`ID_GENERACION`);

-- AlterTable
ALTER TABLE `GRADO` DROP PRIMARY KEY,
    MODIFY `ID_GRADO` INTEGER NOT NULL AUTO_INCREMENT,
    MODIFY `ID_PERSONA` INTEGER NULL,
    ADD PRIMARY KEY (`ID_GRADO`);

-- AlterTable
ALTER TABLE `LGAC` DROP PRIMARY KEY,
    MODIFY `ID_LGAC` INTEGER NOT NULL AUTO_INCREMENT,
    ADD PRIMARY KEY (`ID_LGAC`);

-- AlterTable
ALTER TABLE `LIBRO` DROP PRIMARY KEY,
    MODIFY `ID_PRODUCTO` INTEGER NOT NULL,
    ADD PRIMARY KEY (`ID_PRODUCTO`);

-- AlterTable
ALTER TABLE `MEMORIA_CONGRESO` DROP PRIMARY KEY,
    MODIFY `ID_PRODUCTO` INTEGER NOT NULL,
    ADD PRIMARY KEY (`ID_PRODUCTO`);

-- AlterTable
ALTER TABLE `PERSONA` DROP PRIMARY KEY,
    MODIFY `ID_PERSONA` INTEGER NOT NULL AUTO_INCREMENT,
    MODIFY `CVU` INTEGER NULL,
    MODIFY `ID_GENERACION` INTEGER NULL,
    ADD PRIMARY KEY (`ID_PERSONA`);

-- AlterTable
ALTER TABLE `PERTENECE` MODIFY `ID_PROGRAMA` INTEGER NULL,
    MODIFY `ID_PERSONA` INTEGER NULL;

-- AlterTable
ALTER TABLE `PLAN_ESTUDIOS` DROP PRIMARY KEY,
    MODIFY `ID_PLAN` INTEGER NOT NULL AUTO_INCREMENT,
    MODIFY `ID_PROGRAMA` INTEGER NULL,
    ADD PRIMARY KEY (`ID_PLAN`);

-- AlterTable
ALTER TABLE `PLAN_ESTUDIOS_META` MODIFY `ID_PLAN` INTEGER NULL;

-- AlterTable
ALTER TABLE `PRODUCTO_ACADEMICO` DROP PRIMARY KEY,
    MODIFY `ID_PRODUCTO` INTEGER NOT NULL AUTO_INCREMENT,
    MODIFY `ID_LGAC` INTEGER NULL,
    MODIFY `ID_ESTANCIA` INTEGER NULL,
    ADD PRIMARY KEY (`ID_PRODUCTO`);

-- AlterTable
ALTER TABLE `PROGRAMA_EDUCATIVO` DROP PRIMARY KEY,
    MODIFY `ID_PROGRAMA` INTEGER NOT NULL AUTO_INCREMENT,
    MODIFY `COORDINADOR` INTEGER NULL,
    MODIFY `REPRESENTANTE` INTEGER NULL,
    MODIFY `COORDINADOR_ACTUAL` INTEGER NULL,
    ADD PRIMARY KEY (`ID_PROGRAMA`);

-- AlterTable
ALTER TABLE `PROGRAMA_EDUCATIVO_CAMPO_CONOCIMIENTO` MODIFY `ID_PROGRAMA` INTEGER NULL;

-- AlterTable
ALTER TABLE `PROTOTIPO` DROP PRIMARY KEY,
    MODIFY `ID_PRODUCTO` INTEGER NOT NULL,
    ADD PRIMARY KEY (`ID_PRODUCTO`);

-- AlterTable
ALTER TABLE `RECONOCIMIENTO` DROP PRIMARY KEY,
    MODIFY `ID_RECONOCIMIENTO` INTEGER NOT NULL AUTO_INCREMENT,
    MODIFY `ID_PERSONA` INTEGER NULL,
    ADD PRIMARY KEY (`ID_RECONOCIMIENTO`);

-- AlterTable
ALTER TABLE `REGISTRA` MODIFY `ID_LGAC` INTEGER NULL,
    MODIFY `ID_PERSONA` INTEGER NULL;

-- AlterTable
ALTER TABLE `SINODAL` DROP PRIMARY KEY,
    MODIFY `ID_SINODAL` INTEGER NOT NULL AUTO_INCREMENT,
    MODIFY `ID_PRODUCTO` INTEGER NULL,
    ADD PRIMARY KEY (`ID_SINODAL`);

-- AlterTable
ALTER TABLE `TRABAJO_RECEPCIONAL` DROP PRIMARY KEY,
    MODIFY `ID_PRODUCTO` INTEGER NOT NULL,
    ADD PRIMARY KEY (`ID_PRODUCTO`);

-- AddForeignKey
ALTER TABLE `ACADEMICO_DISTINCION` ADD CONSTRAINT `academico_distincion_ibfk_1` FOREIGN KEY (`ID_PERSONA`) REFERENCES `PERSONA`(`ID_PERSONA`) ON DELETE NO ACTION ON UPDATE NO ACTION;

-- AddForeignKey
ALTER TABLE `ARTICULO` ADD CONSTRAINT `articulo_ibfk_1` FOREIGN KEY (`ID_PRODUCTO`) REFERENCES `PRODUCTO_ACADEMICO`(`ID_PRODUCTO`) ON DELETE NO ACTION ON UPDATE NO ACTION;

-- AddForeignKey
ALTER TABLE `CAPITULO_LIBRO` ADD CONSTRAINT `capitulo_libro_ibfk_1` FOREIGN KEY (`ID_PRODUCTO`) REFERENCES `PRODUCTO_ACADEMICO`(`ID_PRODUCTO`) ON DELETE NO ACTION ON UPDATE NO ACTION;

-- AddForeignKey
ALTER TABLE `COLABORA` ADD CONSTRAINT `colabora_ibfk_1` FOREIGN KEY (`ID_PRODUCTO`) REFERENCES `PRODUCTO_ACADEMICO`(`ID_PRODUCTO`) ON DELETE NO ACTION ON UPDATE NO ACTION;

-- AddForeignKey
ALTER TABLE `COLABORA` ADD CONSTRAINT `colabora_ibfk_2` FOREIGN KEY (`ID_PERSONA`) REFERENCES `PERSONA`(`ID_PERSONA`) ON DELETE NO ACTION ON UPDATE NO ACTION;

-- AddForeignKey
ALTER TABLE `CONVENIO_MOVILIDAD` ADD CONSTRAINT `convenio_movilidad_ibfk_1` FOREIGN KEY (`ID_PROGRAMA`) REFERENCES `PROGRAMA_EDUCATIVO`(`ID_PROGRAMA`) ON DELETE NO ACTION ON UPDATE NO ACTION;

-- AddForeignKey
ALTER TABLE `DESIGNA` ADD CONSTRAINT `designa_ibfk_1` FOREIGN KEY (`ID_PERSONA_ACADEMICO`) REFERENCES `PERSONA`(`ID_PERSONA`) ON DELETE NO ACTION ON UPDATE NO ACTION;

-- AddForeignKey
ALTER TABLE `DESIGNA` ADD CONSTRAINT `designa_ibfk_2` FOREIGN KEY (`ID_PERSONA_ESTUDIANTE`) REFERENCES `PERSONA`(`ID_PERSONA`) ON DELETE NO ACTION ON UPDATE NO ACTION;

-- AddForeignKey
ALTER TABLE `EJERCICIO_PROFESIONAL` ADD CONSTRAINT `ejercicio_profesional_ibfk_1` FOREIGN KEY (`ID_PERSONA`) REFERENCES `PERSONA`(`ID_PERSONA`) ON DELETE NO ACTION ON UPDATE NO ACTION;

-- AddForeignKey
ALTER TABLE `EMPLEO` ADD CONSTRAINT `empleo_ibfk_1` FOREIGN KEY (`ID_PERSONA`) REFERENCES `PERSONA`(`ID_PERSONA`) ON DELETE NO ACTION ON UPDATE NO ACTION;

-- AddForeignKey
ALTER TABLE `ESTANCIA` ADD CONSTRAINT `estancia_ibfk_1` FOREIGN KEY (`ID_PROGRAMA`) REFERENCES `PROGRAMA_EDUCATIVO`(`ID_PROGRAMA`) ON DELETE NO ACTION ON UPDATE NO ACTION;

-- AddForeignKey
ALTER TABLE `ESTANCIA` ADD CONSTRAINT `estancia_ibfk_2` FOREIGN KEY (`ID_PERSONA`) REFERENCES `PERSONA`(`ID_PERSONA`) ON DELETE NO ACTION ON UPDATE NO ACTION;

-- AddForeignKey
ALTER TABLE `ESTANCIA` ADD CONSTRAINT `estancia_ibfk_3` FOREIGN KEY (`ID_CONVENIO`) REFERENCES `CONVENIO_MOVILIDAD`(`ID_CONVENIO`) ON DELETE NO ACTION ON UPDATE NO ACTION;

-- AddForeignKey
ALTER TABLE `EVENTO` ADD CONSTRAINT `evento_ibfk_1` FOREIGN KEY (`ID_PROGRAMA`) REFERENCES `PROGRAMA_EDUCATIVO`(`ID_PROGRAMA`) ON DELETE NO ACTION ON UPDATE NO ACTION;

-- AddForeignKey
ALTER TABLE `FINANCIAMIENTO` ADD CONSTRAINT `financiamiento_ibfk_1` FOREIGN KEY (`ID_PERSONA`) REFERENCES `PERSONA`(`ID_PERSONA`) ON DELETE NO ACTION ON UPDATE NO ACTION;

-- AddForeignKey
ALTER TABLE `FORMACION_COMPLEMENTARIA` ADD CONSTRAINT `formacion_complementaria_ibfk_1` FOREIGN KEY (`ID_PERSONA`) REFERENCES `PERSONA`(`ID_PERSONA`) ON DELETE NO ACTION ON UPDATE NO ACTION;

-- AddForeignKey
ALTER TABLE `GENERACION` ADD CONSTRAINT `generacion_ibfk_1` FOREIGN KEY (`ID_PLAN`) REFERENCES `PLAN_ESTUDIOS`(`ID_PLAN`) ON DELETE NO ACTION ON UPDATE NO ACTION;

-- AddForeignKey
ALTER TABLE `GRADO` ADD CONSTRAINT `grado_ibfk_1` FOREIGN KEY (`ID_PERSONA`) REFERENCES `PERSONA`(`ID_PERSONA`) ON DELETE NO ACTION ON UPDATE NO ACTION;

-- AddForeignKey
ALTER TABLE `LIBRO` ADD CONSTRAINT `libro_ibfk_1` FOREIGN KEY (`ID_PRODUCTO`) REFERENCES `PRODUCTO_ACADEMICO`(`ID_PRODUCTO`) ON DELETE NO ACTION ON UPDATE NO ACTION;

-- AddForeignKey
ALTER TABLE `MEMORIA_CONGRESO` ADD CONSTRAINT `memoria_congreso_ibfk_1` FOREIGN KEY (`ID_PRODUCTO`) REFERENCES `PRODUCTO_ACADEMICO`(`ID_PRODUCTO`) ON DELETE NO ACTION ON UPDATE NO ACTION;

-- AddForeignKey
ALTER TABLE `PERSONA` ADD CONSTRAINT `persona_ibfk_1` FOREIGN KEY (`ID_GENERACION`) REFERENCES `GENERACION`(`ID_GENERACION`) ON DELETE NO ACTION ON UPDATE NO ACTION;

-- AddForeignKey
ALTER TABLE `PERTENECE` ADD CONSTRAINT `pertenece_ibfk_1` FOREIGN KEY (`ID_PERSONA`) REFERENCES `PERSONA`(`ID_PERSONA`) ON DELETE NO ACTION ON UPDATE NO ACTION;

-- AddForeignKey
ALTER TABLE `PERTENECE` ADD CONSTRAINT `pertenece_ibfk_2` FOREIGN KEY (`ID_PROGRAMA`) REFERENCES `PROGRAMA_EDUCATIVO`(`ID_PROGRAMA`) ON DELETE NO ACTION ON UPDATE NO ACTION;

-- AddForeignKey
ALTER TABLE `PLAN_ESTUDIOS` ADD CONSTRAINT `plan_estudios_ibfk_1` FOREIGN KEY (`ID_PROGRAMA`) REFERENCES `PROGRAMA_EDUCATIVO`(`ID_PROGRAMA`) ON DELETE NO ACTION ON UPDATE NO ACTION;

-- AddForeignKey
ALTER TABLE `PLAN_ESTUDIOS_META` ADD CONSTRAINT `plan_estudios_meta_ibfk_1` FOREIGN KEY (`ID_PLAN`) REFERENCES `PLAN_ESTUDIOS`(`ID_PLAN`) ON DELETE NO ACTION ON UPDATE NO ACTION;

-- AddForeignKey
ALTER TABLE `PRODUCTO_ACADEMICO` ADD CONSTRAINT `producto_academico_ibfk_1` FOREIGN KEY (`ID_LGAC`) REFERENCES `LGAC`(`ID_LGAC`) ON DELETE NO ACTION ON UPDATE NO ACTION;

-- AddForeignKey
ALTER TABLE `PRODUCTO_ACADEMICO` ADD CONSTRAINT `producto_academico_ibfk_2` FOREIGN KEY (`ID_ESTANCIA`) REFERENCES `ESTANCIA`(`ID_ESTANCIA`) ON DELETE NO ACTION ON UPDATE NO ACTION;

-- AddForeignKey
ALTER TABLE `PROGRAMA_EDUCATIVO` ADD CONSTRAINT `fk_coordinador` FOREIGN KEY (`COORDINADOR`) REFERENCES `PERSONA`(`ID_PERSONA`) ON DELETE NO ACTION ON UPDATE NO ACTION;

-- AddForeignKey
ALTER TABLE `PROGRAMA_EDUCATIVO` ADD CONSTRAINT `programa_educativo_ibfk_1` FOREIGN KEY (`COORDINADOR_ACTUAL`) REFERENCES `PERSONA`(`ID_PERSONA`) ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `PROGRAMA_EDUCATIVO` ADD CONSTRAINT `programa_educativo_ibfk_2` FOREIGN KEY (`REPRESENTANTE`) REFERENCES `PERSONA`(`ID_PERSONA`) ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `PROGRAMA_EDUCATIVO_CAMPO_CONOCIMIENTO` ADD CONSTRAINT `programa_educativo_campo_conocimiento_ibfk_1` FOREIGN KEY (`ID_PROGRAMA`) REFERENCES `PROGRAMA_EDUCATIVO`(`ID_PROGRAMA`) ON DELETE NO ACTION ON UPDATE NO ACTION;

-- AddForeignKey
ALTER TABLE `PROTOTIPO` ADD CONSTRAINT `prototipo_ibfk_1` FOREIGN KEY (`ID_PRODUCTO`) REFERENCES `PRODUCTO_ACADEMICO`(`ID_PRODUCTO`) ON DELETE NO ACTION ON UPDATE NO ACTION;

-- AddForeignKey
ALTER TABLE `RECONOCIMIENTO` ADD CONSTRAINT `reconocimiento_ibfk_1` FOREIGN KEY (`ID_PERSONA`) REFERENCES `PERSONA`(`ID_PERSONA`) ON DELETE NO ACTION ON UPDATE NO ACTION;

-- AddForeignKey
ALTER TABLE `REGISTRA` ADD CONSTRAINT `registra_ibfk_1` FOREIGN KEY (`ID_PERSONA`) REFERENCES `PERSONA`(`ID_PERSONA`) ON DELETE NO ACTION ON UPDATE NO ACTION;

-- AddForeignKey
ALTER TABLE `REGISTRA` ADD CONSTRAINT `registra_ibfk_2` FOREIGN KEY (`ID_LGAC`) REFERENCES `LGAC`(`ID_LGAC`) ON DELETE NO ACTION ON UPDATE NO ACTION;

-- AddForeignKey
ALTER TABLE `SINODAL` ADD CONSTRAINT `sinodal_ibfk_1` FOREIGN KEY (`ID_PRODUCTO`) REFERENCES `TRABAJO_RECEPCIONAL`(`ID_PRODUCTO`) ON DELETE NO ACTION ON UPDATE NO ACTION;

-- AddForeignKey
ALTER TABLE `TRABAJO_RECEPCIONAL` ADD CONSTRAINT `trabajo_recepcional_ibfk_1` FOREIGN KEY (`ID_PRODUCTO`) REFERENCES `PRODUCTO_ACADEMICO`(`ID_PRODUCTO`) ON DELETE NO ACTION ON UPDATE NO ACTION;
