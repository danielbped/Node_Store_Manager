const create = require('../../models/products/create');
const isProductValid = require('../../middlewares/product/isValidProduct');

module.exports = async (product) => {
  if (isProductValid(product).error) return isProductValid(product);

  return create(product);
};