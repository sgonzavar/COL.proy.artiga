const { Router } = require('express');
const pool = require('../db');

const router = Router();

router.get('/stock', async(req, res) => {
    const result = await pool.query('SELECT NOW()')
    console.log(result)
    res.json('executed')
});

router.get('/stock/10',(req, res) => {
    res.send("this is 10 element on stock")
});

router.post('/stock',(req, res) => {
    res.send("create element on stock")
});

router.delete('/stock',(req, res) => {
    res.send("delete element on stock")
});

router.put('/stock',(req, res) => {
    res.send("update element on stock")
});

//export module node.js
module.exports = router;