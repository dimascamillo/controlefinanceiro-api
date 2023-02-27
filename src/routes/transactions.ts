import { knex } from "../databse"
import { z } from 'zod';
import crypto from 'node:crypto';
import { FastifyInstance } from "fastify";

export async function transactionsRoutes(app: FastifyInstance) {

  app.post('/', async (request, response) => {
    const createTransactionBodySchema = z.object({
      title: z.string(),
      description: z.string(),
      type: z.enum(['income', 'outcome']),
      category: z.string(),
      price: z.number(),
    })

    const { title, type, description, category, price } = createTransactionBodySchema.parse(request.body)

    await knex('transactions').insert({
      id: crypto.randomUUID(),
      title,
      description,
      type,
      category,
      price
    })

    return response.status(201).send('Transação efetuada')
  })
}