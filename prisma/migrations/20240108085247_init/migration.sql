/*
  Warnings:

  - You are about to drop the column `nickname` on the `Usuario` table. All the data in the column will be lost.
  - A unique constraint covering the columns `[nickName]` on the table `Usuario` will be added. If there are existing duplicate values, this will fail.
  - Added the required column `nickName` to the `Usuario` table without a default value. This is not possible if the table is not empty.

*/
-- DropIndex
DROP INDEX "Usuario_nickname_key";

-- AlterTable
ALTER TABLE "Usuario" DROP COLUMN "nickname",
ADD COLUMN     "nickName" VARCHAR(50) NOT NULL;

-- CreateIndex
CREATE UNIQUE INDEX "Usuario_nickName_key" ON "Usuario"("nickName");
