import Fastify from 'fastify'
import cors from '@fastify/cors'
import fastifyJwt from '@fastify/jwt'

import routes from './routes/routes.js'

async function app() {
  const fastify = Fastify({
    logger: false
  })

  fastify.register(cors)
  fastify.register(fastifyJwt, {
    secret: 'supersecret'
  })
  fastify.register(routes)

  await fastify.listen({
    port: 3000
  },
    function (error, address) {
      if (error) {
        console.log(error)
        process.exit(1)
      }

      console.log(`Servidor rodando no ${address}`);
    })
}

app()