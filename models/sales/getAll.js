const connection = require('../connection');

module.exports = async () => connection().then(
  (db) => db.collection('sales').find().toArray(),
);