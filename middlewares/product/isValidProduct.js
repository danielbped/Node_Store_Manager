const errorMessage = require('../errorMessage');
const errors = require('../../utils/errorMessages');

const isQuantityValid = (quantity) => {
  if (!quantity || quantity < 0) return false;

  return true;
};

const isQuantityANumber = (quantity) => {
  const isNumberRegex = (/\d/).test(quantity);
  if (!isNumberRegex) return false;

  return true;
};

const isNameValid = (name) => {
  if (!name || name.length < 5 || typeof name !== 'string') return false;

  return true;
};

module.exports = (product) => {
  const { name, quantity } = product;

  if (!isNameValid(name)) return errorMessage(errors.invalidName);

  if (!isQuantityValid(quantity)) return errorMessage(errors.invalidQuantity);

  if (!isQuantityANumber(quantity)) return errorMessage(errors.quantityIsNotANumber);

  return true;
};