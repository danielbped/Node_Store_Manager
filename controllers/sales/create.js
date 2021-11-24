const statusCode = require('http-status-codes').StatusCodes;
const createSaleService = require('../../services/sales/create');

const createSaleController = async (req, res, next) => {
  try {
    const sales = req.body;

    const itensSold = await createSaleService(sales);

    if (itensSold.error) {
      return res.status(
        itensSold.error.err.code.includes('stock')
          ? statusCode.NOT_FOUND : statusCode.UNPROCESSABLE_ENTITY,
        ).json(itensSold.error);
    }

    res.status(200).json({
      _id: itensSold.insertedId,
      itensSold: sales,
    });
  } catch (err) {
    next(err);
  }
};

module.exports = (router) => {
  router.post('/', createSaleController);
};