const findByName = require('../../models/products/findByName');

module.exports = async (product) => findByName(product);