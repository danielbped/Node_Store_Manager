const create = require('../../services/sales/create');

module.exports = async (req, res, next) => {
  try {
    const sales = req.body;

    const itensSold = await create(sales);

    console.log(itensSold);

    res.status(200).json({ itensSold });
  } catch (err) {
    next(err);
  }
};