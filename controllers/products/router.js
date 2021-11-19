const express = require('express');
const createProduct = require('./create');
const getAllProducts = require('./getAll');
const getProductById = require('./getById');
const updateProduct = require('./update');

const router = express.Router({ mergeParams: true });

router.get('/products', getAllProducts);
router.get('/products/:id', getProductById);
router.put('/products/:id', updateProduct);
router.post('/products', createProduct);

module.exports = router;