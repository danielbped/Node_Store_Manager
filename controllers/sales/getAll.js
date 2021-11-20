const getAll = require('../../services/sales/getAll');

module.exports = async (_req, res, next) => {
  try {
    const sales = await getAll();

    res.status(200).json({ sales });
  } catch (err) {
    next(err);
  }
};