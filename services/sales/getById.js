const { isValidId } = require('../../middlewares/utils/validations');
const getById = require('../../models/sales/getById');

module.exports = async (id) => {
  if (!isValidId(id)) return false;

  return getById(id);
};