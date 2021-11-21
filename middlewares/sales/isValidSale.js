const errorMessage = require('../errorMessage');
const errors = require('../../utils/errorMessages');

const {
  isQuantityValid,
  isQuantityANumber,
  isProductAvailable,
} = require('../utils/validations');

module.exports = async (sales) => sales.map(async ({ productId, quantity }) => {
  const isSaleQuantityValid = async () => (
    await isQuantityValid(quantity) && isQuantityANumber(quantity)
  );

  if (!await isSaleQuantityValid()) return errorMessage(errors.invalidSale);

  if (!await isProductAvailable(productId, quantity)) return errorMessage(errors.stockProblem);

  return true;
}).find(async (sale) => sale.error) || true;