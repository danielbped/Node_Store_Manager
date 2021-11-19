const getById = require('../../services/products/getById');

module.exports = async (req, res, next) => {
  try {
    const { id } = req.params;

    const product = await getById(id);

    res.status(200).json(product);
  } catch (err) {
    next(err);
  }
};