const { ObjectId } = require('mongodb');
const { getConnection } = require('../connection');

module.exports = async (id) => getConnection().then(
  (db) => db.collection('sales').findOne(ObjectId(id)),
);