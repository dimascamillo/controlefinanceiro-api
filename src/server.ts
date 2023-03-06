import fastify from "fastify";

const app = fastify();

// MÉTODOS HTTP: GET, POST, PUT, PATCH, DELETE

//Route test
app.get('/test', () => {
  return 'Route test, This Server running at http://localhost:3333'
});

app.listen({
  port: 3333
}).then(() => {
  console.log('Server loaded...')
});