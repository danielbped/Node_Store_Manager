const { ObjectId } = require('mongodb');
const getProductById = require('../../services/products/getById');

const isQuantityValid = async (quantity) => {
  if (!quantity || quantity <= 0) return false;

  return true;
};

const isQuantityANumber = async (quantity) => {
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

const isProductAvailable = async (productId, quantity) => {
  const { quantity: productQuantity } = await getProductById(productId);

  return productQuantity > quantity;
};

module.exports = {
  isQuantityANumber,
  isNameValid,
  isQuantityValid,
  isValidId,
  isProductAvailable,
};