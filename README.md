## Login with Prisma in NextJS and PostgreSQL

![Screenshot at Jan 12 13-13-04](https://github.com/luissanchezdev/login-with-prisma-next14/assets/50006980/b6ffa6ac-ca40-4282-8282-c8ee7d88ae72)


Tener instalado PostgreSQL en su computador

1. Instalación de dependencias

```bash
npm run dev
# or
yarn dev
# or
pnpm dev
```

2. Crear un archivo .env agregando los siguientes parametros personalizandolos a su configuración:

```bash
DATABASE_URL="postgresql://USER_DB:PASSWORD_USER_DB@HOST_DB:PORT_DB/NAME_DB?schema=public"
NEXTAUTH_URL="http://localhost:3000"
NEXTAUTH_SECRET="SECRET"
```

Cambiar los valores del archivo .env por los propios.

USER_DB: Usuario de la base de datos
PASSWORD_USER_DB: Contraseña del usuario de la base de datos
HOST_DB: Host, por defecto "localhost"
PORT_DB: Puerto de la base de datos. En PostgreSQL por defecto es 5432
NAME_DB: Nombre de la base de datos
