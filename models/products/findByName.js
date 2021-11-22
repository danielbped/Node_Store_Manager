const { getConnection } = require('../connection');

module.exports = async (productName) => getConnection().then(
  (db) => db.collection('products').findOne({ name: productName }),
);
