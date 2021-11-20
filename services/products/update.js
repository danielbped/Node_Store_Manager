const update = require('../../models/products/update');
const { isValidId } = require('../../middlewares/utils/validations');
const isProductValid = require('../../middlewares/product/isValidProduct');

module.exports = async (product) => {
  const { id } = product;
  if (isValidId(id).error) return isValidId(id);
  if (isProductValid(product).error) return isProductValid(product);

  return update(product);
};