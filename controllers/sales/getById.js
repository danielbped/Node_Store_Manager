const statusCode = require('http-status-codes').StatusCodes;
const getById = require('../../services/sales/getById');
const error = require('../../utils/errorMessages');
const errorMessage = require('../../middlewares/sales/errorMessage');

module.exports = async (req, res, next) => {
  try {
    const { id } = req.params;

    const sale = await getById(id);

    if (!sale) return res.status(statusCode.NOT_FOUND).json(errorMessage(error.saleNotFound).error);

    res.status(statusCode.OK).json(sale);
  } catch (err) {
    next(err);
  }
};