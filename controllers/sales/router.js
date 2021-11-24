const express = require('express');
const saleControllers = require('./index');

const router = express.Router({ mergeParams: true });

saleControllers.getAllSales(router);
saleControllers.getSaleById(router);
saleControllers.updateSale(router);
saleControllers.deleteSale(router);
saleControllers.createSale(router);

module.exports = (root) => {
  root.use('/sales', router);
};