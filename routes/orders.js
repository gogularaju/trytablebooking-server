const express = require('express');
const Order = require('../models/order');
const router = express.Router();

const generateRandomOrderNumber = () => {
        let now = Date.now().toString();
        return  [now.slice(0, 4), now.slice(4, 10), now.slice(10, 14)].join('-')
};

router.get('/', async(req, res) => {
    try {
        const response = await Order.find();
        res.json(response);
    } catch(e) {
        res.send(e)
    }
});

router.get('/:id', async(req, res) => {
    try {
        const response = await Order.findById(req.params.id);
        res.json(response);
    } catch(e) {
        res.send(e)
    }
});

router.post('/new-order', async(req, res) => {
    try {
        const { status, tableNumber, orderItems, orderCost, orderDateTime } = req.body;
        const order = new Order({
            status,
            orderNumber: generateRandomOrderNumber(),
            tableNumber,
            orderItems,
            orderCost,
            orderDateTime
        });
        const response = await order.save();
        res.json(response);
    } catch(e) {
        res.send(e)
    }
});

router.patch('/:id', async(req, res) => {
    try {
        const order = await Order.findById(req.params.id);
        order.orderItems = req.body.orderItems;
        order.orderCost = req.body.orderCost;
        order.orderDateTime = req.body.orderDateTime;
        
        const result = await order.save();
        res.json(result);
    } catch(e) {
        res.send(e)
    }
});



module.exports = router;