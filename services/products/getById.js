const getById = require('../../models/products/getById');
const { isValidId } = require('../../middlewares/utils/validations');

module.exports = async (id) => {
  if (isValidId(id).error) return isValidId(id);

  return getById(id);
};