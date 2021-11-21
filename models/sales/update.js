const { ObjectId } = require('mongodb');
const connection = require('../connection');

module.exports = async ({ id, sale }) => connection().then(
  (db) => db.collection('sales').updateOne(
    { _id: ObjectId(id) },
    { $set: { itensSold: sale } },
  ),
);