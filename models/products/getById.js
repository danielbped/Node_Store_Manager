const { ObjectId } = require('mongodb');
const connection = require('../connection');

module.exports = async (id) => {
  const product = await connection().then(
    (db) => db.collection('products').findOne(ObjectId(id)),
  );

  return product;
};