const express = require('express');
const createSale = require('./create');
const getAllSales = require('./getAll');

const router = express.Router({ mergeParams: true });

router.get('/', getAllSales);
router.post('/', createSale);

module.exports = router;