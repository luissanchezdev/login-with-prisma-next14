/*
  Warnings:

  - You are about to drop the column `apellidos` on the `Usuario` table. All the data in the column will be lost.
  - You are about to drop the column `direccion` on the `Usuario` table. All the data in the column will be lost.
  - You are about to drop the column `nombre` on the `Usuario` table. All the data in the column will be lost.
  - You are about to drop the column `telefono` on the `Usuario` table. All the data in the column will be lost.
  - Added the required column `address` to the `Usuario` table without a default value. This is not possible if the table is not empty.
  - Added the required column `last_name` to the `Usuario` table without a default value. This is not possible if the table is not empty.
  - Added the required column `name` to the `Usuario` table without a default value. This is not possible if the table is not empty.
  - Added the required column `password` to the `Usuario` table without a default value. This is not possible if the table is not empty.
  - Added the required column `phone` to the `Usuario` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE "Usuario" DROP COLUMN "apellidos",
DROP COLUMN "direccion",
DROP COLUMN "nombre",
DROP COLUMN "telefono",
ADD COLUMN     "address" VARCHAR(100) NOT NULL,
ADD COLUMN     "last_name" VARCHAR(50) NOT NULL,
ADD COLUMN     "name" VARCHAR(50) NOT NULL,
ADD COLUMN     "password" VARCHAR(255) NOT NULL,
ADD COLUMN     "phone" VARCHAR(20) NOT NULL;
