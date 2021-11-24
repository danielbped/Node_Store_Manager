const statusCode = require('http-status-codes').StatusCodes;
const { isValidId } = require('../../middlewares/utils/validations');
const getByIdService = require('../../services/products/getById');
const error = require('../../utils/errorMessages');
const errorMessage = require('../../middlewares/errorMessage');

const getProductByIdController = async (req, res, next) => {
  try {
    const { id } = req.params;

    if (!isValidId(id)) {
      return res.status(statusCode.UNPROCESSABLE_ENTITY)
        .json(errorMessage(error.invalidId).error);
    }

    const product = await getByIdService(id);

    if (!product) {
      return res.status(statusCode.NOT_FOUND)
        .json(errorMessage(error.notFound));
    }

    res.status(statusCode.OK).json(product);
  } catch (err) {
    next(err);
  }
};

module.exports = (router) => {
  router.get('/:id', getProductByIdController);
};