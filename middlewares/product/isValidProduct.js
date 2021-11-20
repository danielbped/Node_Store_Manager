const errorMessage = require('../errorMessage');
const errors = require('../../utils/errorMessages');

const {
  isNameValid,
  isQuantityValid,
  isQuantityANumber,
} = require('../utils/validations');

module.exports = (product) => {
  const { name, quantity } = product;

  if (!isNameValid(name)) return errorMessage(errors.invalidName);

  if (!isQuantityValid(quantity)) return errorMessage(errors.invalidQuantity);

  if (!isQuantityANumber(quantity)) return errorMessage(errors.quantityIsNotANumber);

  return true;
};