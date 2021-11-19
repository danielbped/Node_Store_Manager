const deleteProduct = require('../../models/products/delete');
const isValidId = require('../../middlewares/product/isValidId');

module.exports = async (id) => {
  if (isValidId(id).error) return isValidId(id);

  return deleteProduct(id);
};