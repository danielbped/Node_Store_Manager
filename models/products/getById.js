const { ObjectId } = require('mongodb');
const { getConnection } = require('../connection');

module.exports = async (id) => getConnection().then(
  (db) => db.collection('products').findOne(ObjectId(id)),
);