const express = require('express');
const createSale = require('./create');

const router = express.Router({ mergeParams: true });

router.post('/', createSale);

module.exports = router;