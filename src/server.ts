import fastify from "fastify";
import { knex } from "./database";

const app = fastify();

// MÉTODOS HTTP: GET, POST, PUT, PATCH, DELETE

//Route test
app.get('/test', () => {
  return 'Route test, This Server running at http://localhost:3333'
});

//Query está buscando todos os dados na tabela teste no banco de dados transactions
app.get('/transactions', async () => {
  const tables = await knex('teste').select('*')

  return tables
});

app.listen({
  port: 3333
}).then(() => {
  console.log('Server loaded...')
});