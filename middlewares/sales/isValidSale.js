const errorMessage = require('../errorMessage');
const errors = require('../../utils/errorMessages');

const {
  isQuantityValid,
  isQuantityANumber,
} = require('../utils/validations');

module.exports = (sales) => sales.map(({ quantity }) => {
    const isSaleQuantityValid = () => isQuantityValid(quantity) && isQuantityANumber(quantity);

    if (!isSaleQuantityValid()) return errorMessage(errors.invalidSale);

    return true;
  }).find((sale) => sale.error) || true;