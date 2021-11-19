const connection = require('../connection');

module.exports = async () => connection().then(
  (db) => db.collection('StoreManager').find().toArray(),
);