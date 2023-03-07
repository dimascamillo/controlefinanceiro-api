import 'dotenv/config'
import { z } from 'zod';

//schema = formato de dados
const envSchema = z.object({
  NODE_ENV: z.enum(['development', 'production']).default('production'),
  DATABASE_URL: z.string(),
  PORT: z.number().default(3306),
})

//quando chamo o metodo parse() ele pega o schema(envSchema) ele passa os dados
//que estão vindo de process.env, e o zod faz a validação do schema automaticamente
const _env = envSchema.safeParse(process.env)

if (_env.success === false) {
  console.error('Variáveis de ambiente inválidas', _env.error.format())

  throw new Error('Variáveis de ambiente inválidas')
}

export const env = _env.data;