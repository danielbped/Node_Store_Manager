const create = require('../../models/sales/create');
const updateProduct = require('../products/update');
const getProductById = require('../products/getById');
const isValidSale = require('../../middlewares/sales/isValidSale');

module.exports = async (sales) => {
  const response = await isValidSale(sales);

  if (response.error) return response;

  sales.forEach(async ({ productId, quantity }) => {
    const { quantity: availableQuantity, name } = await getProductById(productId);

    const newQuantity = availableQuantity - quantity;

    updateProduct({ id: productId, name, quantity: newQuantity });
  });

  return create(sales);
};