import { knex as setupKnex } from "knex";

export const knex = setupKnex({
  client: 'mysql',
  connection: {
    host: '127.0.0.1',
    port: 3306,
    user: 'root',
    password: '123456',
    database: 'transactions'
  }
})