const update = require('../../models/products/update');
const { isValidId } = require('../../middlewares/utils/validations');
const isValidProduct = require('../../middlewares/product/isValidProduct');

module.exports = async (product) => {
  const { id } = product;
  if (isValidId(id).error) return isValidId(id);
  if (isValidProduct(product).error) return isValidProduct(product);

  return update(product);
};