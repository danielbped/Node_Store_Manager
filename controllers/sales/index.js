const createSale = require('./create');
const updateSale = require('./update');
const getAllSales = require('./getAll');
const getSaleById = require('./getById');
const deleteSale = require('./delete');

module.exports = {
  createSale,
  updateSale,
  deleteSale,
  getAllSales,
  getSaleById,
};