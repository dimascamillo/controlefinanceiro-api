import fastify from 'fastify';

const app = fastify();

app.get('/transactions', () => {
  return 'Hello world!';
})

app.listen({
  port: 3333
}).then(() => {
  console.log('HTTP SERVER RUNNING')
})