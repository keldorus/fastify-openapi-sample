# fastify-openapi-sample
Sample for fastify-openapi

Build it:
> docker build . -t fastify-openapi-sample

Run it:
> docker run -p 8080:3000 --name fastify-openapi-sample --rm -it -v /usr/lib/node_modules/fastify-openapi:/usr/lib/node_modules/fastify-openapi fastify-openapi-sample