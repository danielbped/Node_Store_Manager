const express = require('express');

const sales = require('./sales/router');
const products = require('./products/router');

const root = express.Router({ mergeParams: true });

root.use('/sales', sales);
root.use('/products', products);

module.exports = root;