const mongoose = require('mongoose');


const orderSchema = new mongoose.Schema({
    status: {
        type: String,
        required: true
    },
    orderNumber: {
        type: String,
        required: true
    },
    tableNumber: {
        type: String,
        required: true
    },
    orderItems: {
        type: Array,
        required: true
    }
})

module.exports = mongoose.model('Order', orderSchema);