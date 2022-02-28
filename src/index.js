const express = require("express");
const morgan = require("morgan");

//Import Routes
const stockRoute = require('./routes/stock.routes');

const app = express();

//use element imported
app.use(morgan('dev'))

//enable json for express
app.use(express.json())

//use router module
app.use(stockRoute);

app.listen(3000)
console.log('am up localhost 3000')