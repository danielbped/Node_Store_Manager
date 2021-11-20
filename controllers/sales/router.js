const express = require('express');
const createSale = require('./create');
const getAllSales = require('./getAll');
const getSaleById = require('./getById');

const router = express.Router({ mergeParams: true });

router.get('/', getAllSales);
router.get('/:id', getSaleById);
router.post('/', createSale);

module.exports = router;