const connection = require('../connection');

module.exports = async (productName) => connection().then(
  (db) => db.collection('StoreManager').findOne({ name: productName }),
);
