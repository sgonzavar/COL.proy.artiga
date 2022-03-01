const { Router } = require('express');
const { getAllStock,
    getStock,
    createStock,
    deleteStock,
    updateStock, } = require('../controller/stock.controller');

const router = Router();

router.get('/stock', getAllStock)

router.get('/stock/:id', getStock)

router.post('/stock', createStock)

router.delete('/stock', deleteStock)

router.put('/stock', updateStock)

//export module node.js
module.exports = router;