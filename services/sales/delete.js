const deleteSale = require('../../models/sales/delete');
const updateProduct = require('../products/update');
const getProductById = require('../products/getById');
const getSaleById = require('./getById');
const { isValidId } = require('../../middlewares/utils/validations');

module.exports = async (id) => {
  if (isValidId(id).error) return isValidId(id);

  const { itensSold } = await getSaleById(id);

  itensSold.forEach(async ({ productId, quantity }) => {
    const { quantity: availableQuantity, name } = await getProductById(productId);
  
    const newQuantity = availableQuantity + quantity;
  
    updateProduct({ id: productId, name, quantity: newQuantity });
  });

  return deleteSale(id);
};