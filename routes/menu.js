const express = require('express');
const Menu = require('../models/menu');
const router = express.Router();

router.get('/', async(req, res) => {
    try {
        const response = await Menu.find();
        res.json(response);
    } catch(e) {
        res.send(e)
    }
});

router.post('/new-menu', async(req, res) => {
    try {
        const { biryanis, breads, curries, softdrinks, starters, soups } = req.body;
        const menu = new Menu({
            biryanis,
            breads,
            curries,
            softdrinks,
            starters,
            soups
        });
        const response = await menu.save();
        res.json(response);
    } catch(e) {
        res.send(e)
    }
});

module.exports = router;