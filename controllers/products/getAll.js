const statusCode = require('http-status-codes').StatusCodes;
const getAllProductsService = require('../../services/products/getAll');

const getAllProductsController = async (_req, res, next) => {
  try {
    const products = await getAllProductsService();

    res.status(statusCode.OK).json({ products });
  } catch (err) {
    next(err);
  }
};

module.exports = (router) => {
  router.get('/', getAllProductsController);
};