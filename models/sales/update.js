const { ObjectId } = require('mongodb');
const { getConnection } = require('../connection');

module.exports = async ({ id, sale }) => getConnection().then(
  (db) => db.collection('sales').updateOne(
    { _id: ObjectId(id) },
    { $set: { itensSold: sale } },
  ),
);