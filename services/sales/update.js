const update = require('../../models/sales/update');
const { isValidId } = require('../../middlewares/utils/validations');
const isValidSale = require('../../middlewares/sales/isValidSale');
const errorMessage = require('../../middlewares/errorMessage');
const error = require('../../utils/errorMessages');

module.exports = async ({ id, sale }) => {
  if (!isValidId(id)) return errorMessage(error.invalidSale);

  if (isValidSale(sale).error) return isValidSale(sale);

  return update(sale);
};