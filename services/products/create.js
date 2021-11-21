const create = require('../../models/products/create');
const isProductValid = require('../../middlewares/product/isValidProduct');

module.exports = async (product) => {
  if (typeof await isProductValid(product) === 'object') return isProductValid(product);

  return create(product);
};