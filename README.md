## Install dependencies

```bash
  cd login-with-prisma-next14 && npm install
```

## Create PostgreSQL database clean

## Create .env

Add the following:

```bash
# Environment variables declared in this file are automatically made available to Prisma.
# See the documentation for more detail: https://pris.ly/d/prisma-schema#accessing-environment-variables-from-the-schema

# Prisma supports the native connection string format for PostgreSQL, MySQL, SQLite, SQL Server, MongoDB and CockroachDB.
# See the documentation for all the connection string options: https://pris.ly/d/connection-strings

DATABASE_URL="postgresql://USER_DATABASE:USER_PASSWORD_DATABASE@localhost:PORT_DATABASE/NAME_DATABASE?schema=public"
```
Custom DATABASE_URL:
- USER_DATABASE: Add your user database
- USER_PASSWORD_DATABASE: Replace for your password user database
- PORT_DATABASE: Replacer for PostgreSQL port, by default 5432
- NAME_DATABASE: Replacer name database

## Getting Started

First, run the development server:

```bash
npm run dev
# or
yarn dev
# or
pnpm dev
# or
bun dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

## Create table with Prisma migrations

- Added model to prisma schema.
- Run command:

```bash
npx prisma migrate dev --name init
```

