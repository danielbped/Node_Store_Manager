const { getConnection } = require('../connection');

module.exports = async () => getConnection().then(
  (db) => db.collection('products').find().toArray(),
);