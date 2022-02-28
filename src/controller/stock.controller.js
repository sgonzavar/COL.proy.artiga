const pool = require('../db');

const getAllStock = async (req, res) => {
    res.send("this is list on stock")
}

const getStock = async (req, res) => {
    res.send("this is list on stock")
}

const createStock = async (req, res) => {
    const {title, description, category, volume} = req.body

    const result = await pool.query("INSERT INTO stock (title, description, category, volume) VALUES ($1, $2, $3, $4) RETURNING* ",
    [title, description, category, volume]);

    res.json(result.rows[0])
    res.send("create element on stock")
}

const deleteStock = async (req, res) => {
    res.send("delete element on stock")
}

const updateStock = async (req, res) => {
    res.send("update element on stock");}

module.exports = {
    getAllStock,
    getStock,
    createStock,
    deleteStock,
    updateStock,
}