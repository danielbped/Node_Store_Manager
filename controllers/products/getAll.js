const statusCode = require('http-status-codes').StatusCodes;
const getAll = require('../../services/products/getAll');

module.exports = async (_req, res, next) => {
  try {
    const products = await getAll();
    
    res.status(statusCode.OK).json({ products });
  } catch (err) {
    next(err);
  }
};