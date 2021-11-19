const isValidId = require('../../middlewares/product/isValidId');
const update = require('../../services/products/update');

module.exports = async (req, res, next) => {
  try {
    const { id } = req.params;

    const { name, quantity } = req.body;

    if (isValidId(id).error) return res.status(422).json(isValidId(id).error);

    const product = { id, name, quantity };

    const updatedProduct = await update(product);

    if (updatedProduct.error) return res.status(422).json(updatedProduct.error);

    res.status(200).json(product);
  } catch (err) {
    next(err);
  }
};