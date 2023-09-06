const fakeUser = {
  id: 1,
  username: 'teste',
  password: '123',
  SECRET_KEY: 'bolinha-de-gorfe'
}

async function routes(fastify) {
  fastify.get('/', async (request, reply) => {
    reply.send('Servidor ligado')
  })

  fastify.post('/signin', async (request, reply) => {
    const user = {
      id: 1,
      username: request.body.username,
      password: request.body.password,
      SECRET_KEY: 'bolinha-de-gorfe'
    }

    if (user.username !== fakeUser.username || user.password !== fakeUser.password) {
      reply.status(401).send('Acesso negado! Username ou senha estão incorretos.')

      return
    }

    const token = fastify.jwt.sign({
      id: 1,
      name: user.name
    }, user.SECRET_KEY
    )

    console.log(token);
    console.log(SECRET_KEY);

    reply.send({ token })
  })

  fastify.get('/protected', (request, reply) => {

  })
}

export default routes
