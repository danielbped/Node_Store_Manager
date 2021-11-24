const express = require('express');
const productControllers = require('./index');

const router = express.Router({ mergeParams: true });

productControllers.getAllProducts(router);
productControllers.createProduct(router);
productControllers.getProductById(router);
productControllers.updateProduct(router);
productControllers.deleteProduct(router);

module.exports = (root) => {
  root.use('/products', router);
};