const statusCode = require('http-status-codes').StatusCodes;
const create = require('../../services/products/create');
const findByName = require('../../services/products/findByName');
const error = require('../../utils/errorMessages');
const errorMessage = require('../../middlewares/errorMessage');

module.exports = async (req, res, next) => {
  try {
    const { name, quantity } = req.body;

    const product = await findByName(name);

    if (product) {
      return res.status(statusCode.UNPROCESSABLE_ENTITY).json(errorMessage(error.alreadyExists)
      .error);
    }
    
    const newProduct = await create({ name, quantity });
    
    if (newProduct.error) return res.status(statusCode.UNPROCESSABLE_ENTITY).json(newProduct.error);

    const response = {
      _id: newProduct.insertedId,
      name,
      quantity,
    };

    res.status(statusCode.CREATED).json(response);
  } catch (err) {
    next(err);
  }
};