const express = require('express');
const createProduct = require('./create');
const getAllProducts = require('./getAll');
const getProductById = require('./getById');
const updateProduct = require('./update');
const deleteProduct = require('./delete');

const router = express.Router({ mergeParams: true });

router.get('/', getAllProducts);
router.post('/', createProduct);
router.get('/:id', getProductById);
router.put('/:id', updateProduct);
router.delete('/:id', deleteProduct);

module.exports = router;