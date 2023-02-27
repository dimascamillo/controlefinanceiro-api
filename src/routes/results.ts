import { FastifyInstance } from "fastify"
import { knex } from "../databse"

export async function transactionsResults(app: FastifyInstance) {
  app.get('/results', async () => {
    const transactions = await knex('transactions').select('*')
  
    return transactions
  })
}