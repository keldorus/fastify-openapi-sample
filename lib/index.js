const path = require('path');

const fastify = require('fastify')();
const fastifyOpenAPI = require('fastify-openapi');

const opts = {
  openapi: path.join(__dirname, '..', 'openapi', 'openapi.yaml'),
  controllerPath : path.join(__dirname, 'controllers'),
};

fastify.register(
  fastifyOpenAPI,
  opts,
  (err) => {
    if (err) {
      throw err;
    }
  },
);

fastify.listen(3000, (err) => {
  if (err) {
    throw err;
  }

  console.log(`server listening on ${fastify.server.address().port}`);
});
