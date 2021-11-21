const statusCode = require('http-status-codes').StatusCodes;
const create = require('../../services/sales/create');
// const getProductById = require('../../services/products/getById');

module.exports = async (req, res, next) => {
  try {
    const sales = req.body;

    const itensSold = await create(sales);

    if (itensSold.error) return res.status(statusCode.UNPROCESSABLE_ENTITY).json(itensSold.error);

    res.status(200).json({
      _id: itensSold.insertedId,
      itensSold: sales,
    });
  } catch (err) {
    next(err);
  }
};