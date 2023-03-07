import { knex as setupKnex, Knex } from "knex";
import { env } from "./env";

export const config: Knex.Config = {
  client: 'mysql',
  connection: {
    host: env.DATABASE_URL,
    port: env.PORT,
    user: 'root',
    password: '123456',
    database: 'transaction'
  },
  migrations: {
    extension: 'ts',
    directory: './db/migrations'
  }
}

export const knex = setupKnex(config)