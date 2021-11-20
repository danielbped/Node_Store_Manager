const create = require('../../models/sales/create');
const isValidSale = require('../../middlewares/sales/isValidSale');

module.exports = async (sales) => {
  const response = sales.map((sale) => isValidSale(sale));

  if (response[0].error) return response[0];

  return create(sales);
};