const create = require('../../models/sales/create');
const isValidSale = require('../../middlewares/sales/isValidSale');

module.exports = async (sales) => {
  const response = isValidSale(sales);

  if (response.error) return response;

  return create(sales);
};