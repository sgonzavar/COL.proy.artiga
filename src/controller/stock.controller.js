const pool = require('../db');

const getAllStock = async (req, res) => {

    try {
        const allStock = await pool.query(
            "SELECT * FROM stock"
        );
        res.json(allStock.rows)
    } catch (error) {
        console.log(error.message);
    }
}

const getStock = async (req, res) => {
    try {
        const {id} = req.params;
        const result = await pool.query(`SELECT * FROM stock WHERE id=${id}`);
    
        if (result.rows.length === 0)
            return res.status(404).json({
                message: 'Stock not found',
            });
        res.json(result.rows[0]);
    } catch (error) {
        console.log(error.message);
    }
}

const createStock = async (req, res) => {
    const { title, description, category, volume } = req.body

    try {
        const result = await pool.query(
            "INSERT INTO stock (title, description, category, volume) VALUES ($1, $2, $3, $4) RETURNING* ",
            [title, description, category, volume]
        );

        res.json(result.rows[0].now)
    } catch (error) {
        console.log(error.message);
    }
}

const deleteStock = async (req, res) => {
    res.send("delete element on stock")
}

const updateStock = async (req, res) => {
    res.send("update element on stock");
}

module.exports = {
    getAllStock,
    getStock,
    createStock,
    deleteStock,
    updateStock,
}