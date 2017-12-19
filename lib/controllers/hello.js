function listPets(request, reply) {
  console.log(request.body);
  console.log(request.query);
  console.log(request.params);
  console.log(request.headers);

  reply.send({ hello: 'listPets' });
}

function createPets(request, reply) {
  console.log(request.body);
  console.log(request.query);
  console.log(request.params);
  console.log(request.headers);

  reply.send({ hello: 'createPets' });
}

function showPetById(request, reply) {
  console.log(request.body);
  console.log(request.query);
  console.log(request.params);
  console.log(request.headers);

  reply.send({ id: request.params.id, name : 'toto', tag: 'tutu' });
}

function deletePet(request, reply) {
  console.log(request.body);
  console.log(request.query);
  console.log(request.params);
  console.log(request.headers);

  reply.send({ hello: 'deletePet' });
}



module.exports = {
  listPets,
  createPets,
  showPetById,
  deletePet,
};
