const create = require('../../services/sales/create');

module.exports = async (req, res, next) => {
  try {
    const sales = req.body;

    const itensSold = await create(sales);

    if (itensSold.error) return res.status(422).json(itensSold.error);

    res.status(200).json({
      _id: itensSold.insertedId,
      itensSold: sales,
    });
  } catch (err) {
    next(err);
  }
};