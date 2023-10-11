const PetController = require("../controllers/pet.controller");
module.exports = function (app) {
  app.get("/api", PetController.index);
  app.get("/api/pets", PetController.getAllPets);
  app.post("/api/pets", PetController.createPet);
  app.get("/api/pets/:id", PetController.getPet);
  app.delete("/api/pets/:id", PetController.deletePet);
  app.patch("/api/pets/:id", PetController.updatePet);
};
