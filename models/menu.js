const mongoose = require('mongoose');


const menuSchema = new mongoose.Schema({
    biryanis: {
        type: Array,
        required: true
    },
    breads: {
        type: Array,
        required: true
    },
    curries: {
        type: Array,
        required: true
    },
    softdrinks: {
        type: Array,
        required: true
    }
})

module.exports = mongoose.model('Menu', menuSchema);