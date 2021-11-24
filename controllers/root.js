const express = require('express');

const sales = require('./sales/router');
const products = require('./products/router');

const root = express.Router({ mergeParams: true });

sales(root);
products(root);

module.exports = (app) => {
  app.use('/', root);
};