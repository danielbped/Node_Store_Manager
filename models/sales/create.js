const { getConnection } = require('../connection');

module.exports = async (sales) => {
  const newSale = await getConnection().then(
    (db) => db.collection('sales').insertOne({ itensSold: sales }),
  );

  return newSale;
};