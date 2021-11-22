const create = require('./create');
const update = require('./update');
const getAll = require('./getAll');
const getById = require('./getById');
const deleteProduct = require('./delete');

module.exports = {
  create,
  update,
  deleteProduct,
  getAll,
  getById,
};