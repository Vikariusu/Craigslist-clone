const mongoose = require("mongoose");

const neighborhoodSchema = new mongoose.Schema({
    _id: {type: String},
    name: {
        type: String,
        required: "Title cannot be blank!"
    },
    coordinates: {
        type: Array,
        required: "Coordinates cannot be empty!"
    },
    borough: {
        type: String,
        required: "Borough cannot be empty!"
    },
    radius: {
        type: Number
    }
})

const Neighborhood = mongoose.model('Neighborhood', neighborhoodSchema);

module.exports = Neighborhood;
