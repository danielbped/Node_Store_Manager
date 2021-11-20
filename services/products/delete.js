const deleteProduct = require('../../models/products/delete');
const { isValidId } = require('../../middlewares/utils/validations');

module.exports = async (id) => {
  if (isValidId(id).error) return isValidId(id);

  return deleteProduct(id);
};