const errorMessage = require('../errorMessage');
const errors = require('../../utils/errorMessages');

const {
  isNameValid,
  isQuantityValid,
  isQuantityANumber,
} = require('../utils/validations');

module.exports = async (product) => {
  const { name, quantity } = product;

  if (!isNameValid(name)) return errorMessage(errors.invalidName);

  if (!await isQuantityValid(quantity)) return errorMessage(errors.invalidQuantity);
  
  if (!await isQuantityANumber(quantity)) return errorMessage(errors.quantityIsNotANumber);

  return true;
};