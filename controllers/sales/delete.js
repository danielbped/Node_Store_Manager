const { isValidId } = require('../../middlewares/utils/validations');
const deleteSale = require('../../services/sales/delete');
const getById = require('../../services/sales/getById');
const errorMessage = require('../../middlewares/errorMessage');
const errors = require('../../utils/errorMessages');

module.exports = async (req, res, next) => {
  try {
    const { id } = req.params;

    if (!isValidId(id)) return res.status(422).json(errorMessage(errors.invalidSaleId).error);

    const sale = getById(id);

    await deleteSale(id);

    res.status(200).json(sale);
  } catch (err) {
    next(err);
  }
};