const mongoose = require('mongoose');

const petsSchema = new mongoose.Schema({
    name: {
    type: String,
    required: true
    },

    age: {
    type: Number,
    required: true,
    min: 0
    },

    category: {
    type: String,
    lowercase: true,
    enum: ['Dog', 'Cat']
    },

    desc: {
        type: String,
        required: true
    }
});

const pet = mongoose.model('pet', petsSchema);
module.exports = pet;