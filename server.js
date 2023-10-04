import {fastify} from "fastify";

const server = fastify()

server.post('/videos', () => {
  return 'Hello World'
})

server.get('/videos', () => {
  return 'Hello Node'
})

server.get('/hello', () => {
  return 'Hello Puto'
})

server.listen({
  port: 3333,
})
