const { ObjectId } = require('mongodb');

const isQuantityValid = (quantity) => {
  if (!quantity || quantity <= 0) return false;

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

const isValidId = (id) => {
  if (!ObjectId.isValid(id)) return false;
  
  return true;
};

module.exports = {
  isQuantityANumber,
  isNameValid,
  isQuantityValid,
  isValidId,
};