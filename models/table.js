const mongoose = require('mongoose');


const tableSchema = new mongoose.Schema({
    tableNumber: {
        type: String,
        required: true
    },
    reservationStatus: {
        type: String,
        required: true
    },
    cost: {
        type: String,
        required: false
    },
    totalCost: {
        type: String,
        required: true
    }
})

module.exports = mongoose.model('Table', tableSchema);