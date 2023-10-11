const { Pet } = require("../models/pet.model");
module.exports.index = (request, response) => {
  response.json({
    message:
      "To use this API to access pets, pay attention to the following keys and their paired values",
    create:
      "/api/pets/ -- http post a json object with a name, description, type, and an array of skills",
    readOne: "/api/pets/:id -- http get replace id with a specific pet id",
    readAll: "/api/pets -- http get, will return all pets",
    update: "/api/pets/:id -- http patch",
    delete: "/api/pets/:id - http delete",
  });
};

//* CREATE
module.exports.createPet = (request, response) => {
  const { name, type, description, skills } = request.body;
  Pet.create({
    name,
    type,
    description,
    skills,
  })
    .then((pet) => response.json(pet))
    .catch((err) => response.status(400).json(err));
};

//* READ
module.exports.getAllPets = (request, response) => {
  Pet.find({})
    .then((pets) => response.json(pets))
    .catch((err) => response.status(400).json(err));
};

module.exports.getPet = (request, response) => {
  Pet.findOne({ _id: request.params.id })
    .then((pet) => response.json(pet))
    .catch((err) => response.status(400).json(err));
};

//* DELETE
module.exports.deletePet = (request, response) => {
  Pet.deleteOne({ _id: request.params.id })
    .then((deleteConfirmation) => response.json(deleteConfirmation))
    .catch((err) => response.status(400).json(err));
};

//* UPDATE
module.exports.updatePet = (request, response) => {
  Pet.findOneAndUpdate(
    { _id: request.params.id },
    request.body,
    { runValidators: true },
    {
      new: true,
    }
  )
    .then((updatedPet) => response.json(updatedPet))
    .catch((err) => response.status(400).json(err));
};
