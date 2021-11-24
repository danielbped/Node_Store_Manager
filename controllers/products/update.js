const statusCode = require('http-status-codes').StatusCodes;
const updateProductService = require('../../services/products/update');

const updateProductController = async (req, res, next) => {
  try {
    const { id } = req.params;

    const { name, quantity } = req.body;

    const product = { id, name, quantity };

    const updatedProduct = await updateProductService(product);
    
    if (typeof (updatedProduct.error) === 'object') {
      return res.status(statusCode.UNPROCESSABLE_ENTITY)
        .json(updatedProduct.error);
    }

    res.status(statusCode.OK).json(product);
  } catch (err) {
    next(err);
  }
};

module.exports = (router) => {
  router.put('/:id', updateProductController);
};