import fastify from "fastify";
import crypto from 'node:crypto';
import { knex } from "./database";

const app = fastify();

// MÉTODOS HTTP: GET, POST, PUT, PATCH, DELETE

//Route test
app.get('/test', () => {
  return 'Route test, This Server running at http://localhost:3333'
});

//Query está buscando todos os dados na tabela teste no banco de dados transactions
app.get('/transactions', async () => {
  const tables = await knex('transactions').select('*')

  return tables
});

app.get('/teste-transactions', async () => {
  const transactions = await knex('transactions').insert({
    id: crypto.randomUUID(),
    title: 'Transação de teste',
    category: 'Transação de teste',
    sessions_id: crypto.randomUUID(),
  })
  
  return transactions
})

app.listen({
  port: 3333
}).then(() => {
  console.log('Server loaded...')
});