const connection = require('../connection');

module.exports = async (sale) => {
  const { productId, quantity } = sale;

  const newSale = await connection().then(
    (db) => db.collection('sales').insertOne({ productId, quantity }),
  );

  return newSale;
};