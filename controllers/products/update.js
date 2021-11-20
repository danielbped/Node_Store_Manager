const { isValidId } = require('../../middlewares/utils/validations');
const update = require('../../services/products/update');
const errorMessage = require('../../middlewares/errorMessage');
const errors = require('../../utils/errorMessages');

module.exports = async (req, res, next) => {
  try {
    const { id } = req.params;

    const { name, quantity } = req.body;

    if (!isValidId(id)) return res.status(422).json(errorMessage(errors.invalidId));

    const product = { id, name, quantity };

    const updatedProduct = await update(product);

    if (updatedProduct.error) return res.status(422).json(updatedProduct.error);

    res.status(200).json(product);
  } catch (err) {
    next(err);
  }
};