'use strict';

function listPets(request, reply) {
    reply.send({ hello: 'listPets' });
}

function createPets(request, reply) {
    reply.send({ hello: 'createPets' });
}

function showPetById(request, reply) {
    reply.send({ hello: 'showPetById' });
}

module.exports = {
    listPets,
    createPets,
    showPetById,
};
