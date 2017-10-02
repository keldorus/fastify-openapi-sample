const path = require('path');

const fastify = require('fastify')();

const opts = {
    openapi : path.join('.', 'openapi', 'openapi.yaml');
};

fastify.register([
  require('fastify-openapi'),
],
opts,
(err) => {
  if (err) {
    throw err;
  }
});

fastify.listen(3000, (err) => {
  if (err) {
    throw err;
  }

  console.log(`server listening on ${fastify.server.address().port}`);
});
