const create = require('../../models/sales/create');

module.exports = async (...sales) => sales.forEach(async (sale) => create(sale));
