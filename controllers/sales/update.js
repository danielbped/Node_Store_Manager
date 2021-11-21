const statusCode = require('http-status-codes').StatusCodes;
const update = require('../../services/sales/update');

module.exports = async (req, res, next) => {
  try {
    const { id } = req.params;

    const sale = req.body;

    const saleWithId = { id, sale };

    const updatedSale = await update(saleWithId);

    if (updatedSale.error) {
      return res.status(statusCode.UNPROCESSABLE_ENTITY).json(updatedSale.error);
    }

    res.status(statusCode.OK).json({
      _id: id,
      itensSold: sale,
    });
  } catch (err) {
    next(err);
  }
};