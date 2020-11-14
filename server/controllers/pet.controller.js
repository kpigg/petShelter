const Pet = require("../models/pet.model");

module.exports.findAllPetss = (req, res) => {
    Pet.find()
            .then(allPets => res.json({pets: allPets}))
            .catch(err => res.json({message: "Something went wrong", error: err}))
}

module.exports.findOnePet = (req, res) =>{
    Pet.findOne({_id: req.params._id})
            .then(onePet => res.json({pet: onePet}))
            .catch(err => res.json({message: "Something went wrong", error: err}))
}

module.exports.createPet = (req, res) => {
    Pet.create(req.body)
        .then(newPet => res.json({pet: newPet}))
        .catch(err => res.json({message: "Something went wrong", error: err}))
}

module.exports.deletePet = (req, res) => {
    Pet.remove({_id: req.params._id})
        .then(res.json({message: 'Your pet was removed!'}))
        .catch(err => res.json({message: 'Something went wrong', error: err}))
}

module.exports.updatePet = (req, res) => {
    Pet.update({_id: req.params._id}, {
        $set: {
            name: req.body.name,
            petType: req.body.petType,
            description: req.body.description,
            skill1: req.body.skill1,
            skill2: req.body.skill2,
            skill3: req.body.skill3
        }
    }, {runValidators: true})
            .then(allPets => res.json({pets: allPets}))
            .catch(err => res.json({message: "Something went wrong", error: err}))
}