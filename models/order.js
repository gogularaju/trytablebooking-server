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
    },
    orderCost: {
        type: String,
        required: true
    },
    orderDateTime: {
        type: String,
        require: false
    }
})

module.exports = mongoose.model('Order', orderSchema);