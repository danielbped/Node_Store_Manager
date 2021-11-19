const { ObjectId } = require('mongodb');
const connection = require('../connection');

module.exports = async (id) => {
  const product = await connection().then(
    (db) => db.collection('StoreManager').findOne(ObjectId(id)),
  );

  return product;
};