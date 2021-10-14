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
    },
    orderNumber: {
        type: String,
        required: false
    },
    orderId: {
        type: String,
        required: false
    }
})

module.exports = mongoose.model('Table', tableSchema);