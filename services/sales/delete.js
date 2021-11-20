const deleteSale = require('../../models/sales/delete');
const { isValidId } = require('../../middlewares/utils/validations');

module.exports = async (id) => {
  if (isValidId(id).error) return isValidId(id);

  return deleteSale(id);
};