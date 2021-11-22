const { getConnection } = require('../connection');

module.exports = async () => getConnection().then(
  (db) => db.collection('sales').find().toArray(),
);