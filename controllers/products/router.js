const express = require('express');
const createProduct = require('./create');
const getAllProducts = require('./getAll');
const getProductById = require('./getById');

const router = express.Router({ mergeParams: true });

router.get('/products', getAllProducts);
router.get('/products/:id', getProductById);
router.post('/products', createProduct);

module.exports = router;