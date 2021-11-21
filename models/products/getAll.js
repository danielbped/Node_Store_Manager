const connection = require('../connection');

module.exports = async () => connection().then(
  (db) => db.collection('products').find().toArray(),
);