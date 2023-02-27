import fastify from "fastify";
import { env } from "./env";
import { transactionsResults } from "./routes/results";
import { transactionsRoutes } from "./routes/transactions";

const app = fastify();

app.register(transactionsRoutes, {
  prefix: 'transactions', 
})

app.listen({
  port: env.PORT
}).then(() => {
  console.log('Server loadings complete')
});