const update = require('../../models/products/update');
const { isValidId } = require('../../middlewares/utils/validations');
const isValidProduct = require('../../middlewares/product/isValidProduct');
const errorMessage = require('../../middlewares/errorMessage');
const error = require('../../utils/errorMessages');

module.exports = async (product) => {
  const { id } = product;
  if (!isValidId(id)) return errorMessage(error.invalidSale);
  if (typeof isValidProduct(product) === 'object') return isValidProduct(product);

  return update(product);
};