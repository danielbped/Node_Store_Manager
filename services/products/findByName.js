const findByName = require('../../models/products/findByName');

module.exports = async (name) => findByName(name);