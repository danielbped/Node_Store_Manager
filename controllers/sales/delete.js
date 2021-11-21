const statusCode = require('http-status-codes').StatusCodes;
const { isValidId } = require('../../middlewares/utils/validations');
const deleteSale = require('../../services/sales/delete');
const getById = require('../../services/sales/getById');
const errorMessage = require('../../middlewares/errorMessage');
const errors = require('../../utils/errorMessages');

module.exports = async (req, res, next) => {
  try {
    const { id } = req.params;

    if (!isValidId(id)) {
      return res.status(statusCode.UNPROCESSABLE_ENTITY).json(errorMessage(errors.invalidSaleId)
      .error);
    }

    const sale = getById(id);

    await deleteSale(id);

    res.status(statusCode.OK).json(sale);
  } catch (err) {
    next(err);
  }
};