const express = require('express');
const Table = require('../models/table');
const router = express.Router();

router.get('/', async(req, res) => {
    try {
        const response = await Table.find();
        res.json(response);
    } catch(e) {
        res.send(e)
    }
});

router.get('/:id', async(req, res) => {
    try {
        const response = await Table.findById(req.params.id);
        res.json(response);
    } catch(e) {
        res.send(e)
    }
});

router.post('/new-table', async(req, res) => {
    try {
        const { tableNumber, reservationStatus, cost, totalCost } = req.body;
        const table = new Table({
            tableNumber,
            reservationStatus,
            cost,
            totalCost
        });
        const response = await table.save();
        res.json(response);
    } catch(e) {
        res.send(e)
    }
});

router.patch('/:id', async(req, res) => {
    try {
        const table = await Table.findById(req.params.id);
        table.reservationStatus = req.body.reservationStatus;
        table.totalCost = req.body.totalCost;
        table.orderNumber = req.body.orderNumber;
        table.orderId = req.body.orderId;
        const result = await table.save();
        res.json(result);
    } catch(e) {
        res.send(e)
    }
});

router.delete('/:id', async(req, res) => {
    try {
        const response = await Table.findByIdAndDelete(req.params.id);
        res.json(response);
    } catch(e) {
        res.send(e)
    }
});



module.exports = router;