const express = require('express');
const create = require('./create');

const router = express.Router({ mergeParams: true });

router.post('/products', create);

module.exports = { router };