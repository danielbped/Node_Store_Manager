const statusCode = require('http-status-codes').StatusCodes;
const getSaleByIdService = require('../../services/sales/getById');
const error = require('../../utils/errorMessages');
const errorMessage = require('../../middlewares/errorMessage');

const getSaleByIdController = async (req, res, next) => {
  try {
    const { id } = req.params;

    const sale = await getSaleByIdService(id);

    if (!sale) {
      return res.status(statusCode.NOT_FOUND)
        .json(errorMessage(error.saleNotFound).error);
    }

    res.status(statusCode.OK).json(sale);
  } catch (err) {
    next(err);
  }
};

module.exports = (router) => {
  router.get('/:id', getSaleByIdController);
};