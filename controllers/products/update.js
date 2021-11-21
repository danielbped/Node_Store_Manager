const statusCode = require('http-status-codes').StatusCodes;
const update = require('../../services/products/update');

module.exports = async (req, res, next) => {
  try {
    const { id } = req.params;

    const { name, quantity } = req.body;

    const product = { id, name, quantity };

    const updatedProduct = await update(product);
    
    if (typeof (updatedProduct.error) === 'object') {
      return res.status(statusCode.UNPROCESSABLE_ENTITY)
        .json(updatedProduct.error);
    }

    res.status(statusCode.OK).json(product);
  } catch (err) {
    next(err);
  }
};