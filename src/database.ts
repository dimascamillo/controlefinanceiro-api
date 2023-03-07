import 'dotenv/config'
import { knex as setupKnex, Knex } from "knex";

export const config: Knex.Config = {
  client: 'mysql',
  connection: {
    host: process.env.DATABASE_URL,
    port: 3306,
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