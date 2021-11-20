const update = require('../../services/sales/update');

module.exports = async (req, res, next) => {
  try {
    const { id } = req.params;

    const sale = req.body;

    const saleWithId = { id, sale };

    const updatedSale = await update(saleWithId);

    if (updatedSale.error) return res.status(422).json(updatedSale.error);

    res.status(200).json({
      _id: id,
      itensSold: sale,
    });
  } catch (err) {
    next(err);
  }
};