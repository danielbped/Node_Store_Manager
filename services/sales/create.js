const create = require('../../models/sales/create');
const isValidSale = require('../../middlewares/sales/isValidSale');

module.exports = async (...sales) => Promise.all(
  sales.map(
    async (sale) => {
      if (isValidSale(sale).error) return isValidSale(sale);

      return create(sale);
    },
  ),
);
