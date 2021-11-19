const express = require('express');
const createProduct = require('./create');
const getAllProducts = require('./getAll');
const getProductById = require('./getById');
const updateProduct = require('./update');
const deleteProduct = require('./delete');

const router = express.Router({ mergeParams: true });

router.get('/products', getAllProducts);
router.post('/products', createProduct);
router.get('/products/:id', getProductById);
router.put('/products/:id', updateProduct);
router.delete('/products/:id', deleteProduct);

module.exports = router;