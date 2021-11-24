const statusCode = require('http-status-codes').StatusCodes;
const { isValidId } = require('../../middlewares/utils/validations');
const deleteSaleService = require('../../services/sales/delete');
const getSaleByIdService = require('../../services/sales/getById');
const errorMessage = require('../../middlewares/errorMessage');
const errors = require('../../utils/errorMessages');

const deleteSaleController = async (req, res, next) => {
  try {
    const { id } = req.params;

    if (!isValidId(id)) {
      return res.status(statusCode.UNPROCESSABLE_ENTITY)
        .json(errorMessage(errors.invalidSaleId).error);
    }

    const sale = getSaleByIdService(id);

    await deleteSaleService(id);

    res.status(statusCode.OK).json(sale);
  } catch (err) {
    next(err);
  }
};

module.exports = (router) => {
  router.delete('/:id', deleteSaleController);
};