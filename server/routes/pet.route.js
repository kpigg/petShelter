const PetController = require("../controllers/pet.controller");

module.exports = app => {
    app.get("/api/pets", PetController.findAllPetss),
    app.get("/api/pets/:_id", PetController.findOnePet),
    app.post("/api/pets/new", PetController.createPet),
    app.delete("/api/pets/delete/:_id", PetController.deletePet),
    app.put("/api/pets/update/:_id", PetController.updatePet)
}


