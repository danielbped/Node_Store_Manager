const create = require('../../services/sales/create');

module.exports = async (req, res, next) => {
  try {
    const sales = req.body;

    const itensSold = await create(...sales);

    if (itensSold[0].error) return res.status(422).json(itensSold[0].error);

    res.status(200).json({
      _id: itensSold[0].insertedId,
      itensSold: sales,
    });
  } catch (err) {
    next(err);
  }
};