const statusCode = require('http-status-codes').StatusCodes;
const { isValidId } = require('../../middlewares/utils/validations');
const deleteProductService = require('../../services/products/delete');
const getByIdService = require('../../services/products/getById');
const errorMessage = require('../../middlewares/errorMessage');
const errors = require('../../utils/errorMessages');

const deleteProductController = async (req, res, next) => {
  try {
    const { id } = req.params;

    if (!isValidId(id)) {
      return res.status(statusCode.UNPROCESSABLE_ENTITY)
        .json(errorMessage(errors.invalidId).error);
    }
    
    const product = getByIdService(id);

    await deleteProductService(id);

    res.status(statusCode.OK).json(product);
  } catch (err) {
    next(err);
  }
};

module.exports = (router) => {
  router.delete('/:id', deleteProductController);
};