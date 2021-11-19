const getById = require('../../models/products/getById');
const isValidId = require('../../middlewares/product/isValidId');

module.exports = async (id) => {
  if (isValidId(id).error) return isValidId(id);

  return getById(id);
};