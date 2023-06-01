import fastify from 'fastify'
import { PrismaClient } from '@prisma/client'

// Inicializa o fastify na aplicação
const app = fastify()
// Inicializa o prisma na aplicação
const prisma = new PrismaClient()

app.get('/users', async () => {
  const users = await prisma.user.findMany()
  return users
})

app
  .listen({
    port: 3333,
  })
  .then(() => {
    console.log('HTTP server running on http://localhost:3333')
  })
