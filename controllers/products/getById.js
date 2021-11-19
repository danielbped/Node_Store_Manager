const isValidId = require('../../middlewares/product/isValidId');
const getById = require('../../services/products/getById');

module.exports = async (req, res, next) => {
  try {
    const { id } = req.params;

    if (isValidId(id).error) return res.status(422).json(isValidId(id).error);

    const product = await getById(id);

    res.status(200).json(product);
  } catch (err) {
    next(err);
  }
};