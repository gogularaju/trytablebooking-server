const express = require('express');
const Order = require('../models/order');
const router = express.Router();

router.get('/', async(req, res) => {
    try {
        const response = await Order.find();
        res.json(response);
    } catch(e) {
        res.send(e)
    }
});

router.post('/new-order', async(req, res) => {
    try {
        const { status, orderNumber, tableNumber, orderItems } = req.body;
        const order = new Order({
            status,
            orderNumber,
            tableNumber,
            orderItems
        });
        const response = await order.save();
        res.json(response);
    } catch(e) {
        res.send(e)
    }
});



module.exports = router;