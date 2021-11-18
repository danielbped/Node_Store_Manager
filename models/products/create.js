const connection = require('../connection');

module.exports = async (product) => {
  const { name, quantity } = product;

  const newProduct = await connection().then(
    (db) => db.collection('StoreManager').insertOne({ name, quantity }),
  );

  return newProduct;
};