const express = require('express');
const createSale = require('./create');
const getAllSales = require('./getAll');
const getSaleById = require('./getById');
const updateSale = require('./update');
const deleteSale = require('./delete');

const router = express.Router({ mergeParams: true });

router.get('/', getAllSales);
router.get('/:id', getSaleById);
router.put('/:id', updateSale);
router.delete('/:id', deleteSale);
router.post('/', createSale);

module.exports = router;