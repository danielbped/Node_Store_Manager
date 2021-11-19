const getAll = require('../../services/products/getAll');

module.exports = async (_req, res, next) => {
  try {
    const products = await getAll();
    
    res.status(200).json({ products });
  } catch (err) {
    next(err);
  }
};