import fastify from 'fastify';
import { knex } from './database';

const app = fastify();

app.get('/transactions', async () => {
  const tables = await knex('transactions').select('*')

  return tables
})

app.listen({
  port: 3333
}).then(() => {
  console.log('HTTP SERVER RUNNING')
})