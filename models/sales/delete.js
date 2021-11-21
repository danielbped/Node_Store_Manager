const { ObjectId } = require('mongodb');
const connection = require('../connection');

module.exports = async (id) => connection().then(
  (db) => db.collection('sales').deleteOne({ _id: ObjectId(id) }),
);