const connection = require('../connection');

module.exports = async (productName) => connection().then(
  (db) => db.collection('products').findOne({ name: productName }),
);
