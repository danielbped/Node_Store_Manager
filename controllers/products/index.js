const createProduct = require('./create');
const updateProduct = require('./update');
const getAllProducts = require('./getAll');
const getProductById = require('./getById');
const deleteProduct = require('./delete');

module.exports = {
  createProduct,
  updateProduct,
  deleteProduct,
  getAllProducts,
  getProductById,
};