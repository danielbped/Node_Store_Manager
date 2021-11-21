const statusCode = require('http-status-codes').StatusCodes;
const getAll = require('../../services/sales/getAll');

module.exports = async (_req, res, next) => {
  try {
    const sales = await getAll();

    res.status(statusCode.OK).json({ sales });
  } catch (err) {
    next(err);
  }
};