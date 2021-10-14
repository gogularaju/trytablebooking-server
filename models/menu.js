const mongoose = require('mongoose');


const menuSchema = new mongoose.Schema({
    biryanis: {
        type: Array,
        required: false
    },
    breads: {
        type: Array,
        required: false
    },
    curries: {
        type: Array,
        required: false
    },
    softdrinks: {
        type: Array,
        required: false
    },
    starters: {
        type: Array,
        required: false
    },
    soups: {
        type: Array,
        required: false
    }
})

module.exports = mongoose.model('Menu', menuSchema);