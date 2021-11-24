const statusCode = require('http-status-codes').StatusCodes;
const updateSaleService = require('../../services/sales/update');

const updateSaleController = async (req, res, next) => {
  try {
    const { id } = req.params;

    const sale = req.body;

    const saleWithId = { id, sale };

    const updatedSale = await updateSaleService(saleWithId);

    if (updatedSale.error) {
      return res.status(statusCode.UNPROCESSABLE_ENTITY)
        .json(updatedSale.error);
    }

    res.status(statusCode.OK).json({
      _id: id,
      itensSold: sale,
    });
  } catch (err) {
    next(err);
  }
};

module.exports = (router) => {
  router.put('/:id', updateSaleController);
};