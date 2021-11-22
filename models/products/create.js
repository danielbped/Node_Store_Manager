const { getConnection } = require('../connection');

module.exports = async (product) => {
  const { name, quantity } = product;

  const newProduct = await getConnection().then(
    (db) => db.collection('products').insertOne({ name, quantity }),
  );

  return newProduct;
};