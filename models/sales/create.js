const connection = require('../connection');

module.exports = async (sales) => {
  const newSale = await connection().then(
    (db) => db.collection('sales').insertOne({ itensSold: sales }),
  );

  return newSale;
};