const getById = require('../../services/sales/getById');
const error = require('../../utils/errorMessages');
const errorMessage = require('../../middlewares/sales/errorMessage');

module.exports = async (req, res, next) => {
  try {
    const { id } = req.params;

    const sale = await getById(id);

    if (!sale) return res.status(404).json(errorMessage(error.saleNotFound).error);

    res.status(200).json(sale);
  } catch (err) {
    next(err);
  }
};