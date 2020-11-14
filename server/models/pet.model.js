const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const PetSchema = new mongoose.Schema({
    name: {
        type: String,
        required: [true, "Name is required!"],
        minlength: [3, "Name must be at least 3 characters long!"]
    },
    petType: {
        type: String,
        required: [true, "Pet Type is required!"],
        minlength: [3, "Pet Type must be at least 3 characters long!"]
    },
    description: {
        type: String,
        required: [true, "Description is required!"],
        minlength: [3, "Description must be at least 3 characters long!"]
    },
    skill1: {
        type: String,
    },
    skill2: {
        type: String,
    },
    skill3: {
        type: String,
    }
}, {timestamps: true})

PetSchema.path("name").validate(async (name) => {
   const nameCount = await mongoose.models.Pet.countDocuments({ name })
   return !nameCount
}, "Name already in use");

const Pet = mongoose.model("Pet", PetSchema);

module.exports = Pet;