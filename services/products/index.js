const create = require('./create');
const update = require('./update');
const findByName = require('./findByName');
const getAll = require('./getAll');
const getById = require('./getById');
const deleteProduct = require('./delete');

module.exports = {
  create,
  update,
  deleteProduct,
  findByName,
  getAll,
  getById,
};