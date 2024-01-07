-- CreateTable
CREATE TABLE "Usuario" (
    "id" SERIAL NOT NULL,
    "nombre" VARCHAR(50) NOT NULL,
    "apellidos" VARCHAR(50) NOT NULL,
    "nickname" VARCHAR(50) NOT NULL,
    "direccion" VARCHAR(100) NOT NULL,
    "telefono" VARCHAR(20) NOT NULL,
    "email" VARCHAR(255) NOT NULL,

    CONSTRAINT "Usuario_pkey" PRIMARY KEY ("id")
);

-- CreateIndex
CREATE UNIQUE INDEX "Usuario_nickname_key" ON "Usuario"("nickname");

-- CreateIndex
CREATE UNIQUE INDEX "Usuario_email_key" ON "Usuario"("email");
