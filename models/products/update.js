const { ObjectId } = require('mongodb');
const { getConnection } = require('../connection');

module.exports = async ({ id, name, quantity }) => getConnection().then(
  (db) => db.collection('products').updateOne(
    { _id: ObjectId(id) },
    { $set: { name, quantity } },
  ),
);