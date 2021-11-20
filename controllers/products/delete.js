const { isValidId } = require('../../middlewares/utils/validations');
const deleteProduct = require('../../services/products/delete');
const getById = require('../../services/products/getById');
const errorMessage = require('../../middlewares/errorMessage');
const errors = require('../../utils/errorMessages');

module.exports = async (req, res, next) => {
  try {
    const { id } = req.params;

    if (!isValidId(id)) return res.status(422).json(errorMessage(errors.invalidId).error);
    
    const product = getById(id);

    await deleteProduct(id);

    res.status(200).json(product);
  } catch (err) {
    next(err);
  }
};