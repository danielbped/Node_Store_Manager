const { ObjectId } = require('mongodb');
const connection = require('../connection');

module.exports = async ({ id, name, quantity }) => connection().then(
  (db) => db.collection('products').updateOne(
    { _id: ObjectId(id) },
    { $set: { name, quantity } },
  ),
);