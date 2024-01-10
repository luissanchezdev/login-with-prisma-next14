/*
  Warnings:

  - You are about to drop the column `last_name` on the `Usuario` table. All the data in the column will be lost.
  - Added the required column `lastName` to the `Usuario` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE "Usuario" DROP COLUMN "last_name",
ADD COLUMN     "lastName" VARCHAR(50) NOT NULL;
