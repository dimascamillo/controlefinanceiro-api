import fastify from "fastify";
import crypto from 'node:crypto';
import { knex } from "./databse";

const app = fastify();

app.get('/transactions', async () => {
  const transactions = await knex('transactions').insert({
    id: crypto.randomUUID(),
    title: 'Transação de teste',
    description: 'Primeira transação',
    type: 'outcome',
    category: 'teste',
    price: 10000
  }).returning('*')

  return transactions
})

app.get('/transactions/results', async () => {
  const transactions = await knex('transactions').select('*')

  return transactions
})

app.listen({
  port: 3333
}).then(() => {
  console.log('Server loadings complete')
});