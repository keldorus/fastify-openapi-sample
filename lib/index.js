const { join } = require('path');

const fastify = require('fastify')({
  logger: { level: 'info' },
});
const fastifyOpenAPI = require('fastify-openapi');

const opts = {
  openapi: join(__dirname, '..', 'openapi', 'openapi.yaml'),
  controllersPath: join(__dirname, 'controllers'),
  controllerTag: 'x-controller',
  operationTag: 'operationId',
};

fastify.register(
  fastifyOpenAPI,
  opts
);

fastify.listen(process.env.PORT || 3000, (err) => {
  if (err) {
    console.log(err);
    process.exit(1);
  }

  console.log(`server listening on ${fastify.server.address().port}`);
});
