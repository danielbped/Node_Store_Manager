const statusCode = require('http-status-codes').StatusCodes;
const getAllSalesService = require('../../services/sales/getAll');

const getAllSalesController = async (_req, res, next) => {
  try {
    const sales = await getAllSalesService();

    res.status(statusCode.OK).json({ sales });
  } catch (err) {
    next(err);
  }
};

module.exports = (router) => {
  router.get('/', getAllSalesController);
};