module.exports = {
  invalidName: {
    code: 'invalid_data',
    message: '"name" length must be at least 5 characters long',
  },
  invalidQuantity: {
    code: 'invalid_data',
    message: '"quantity" must be larger than or equal to 1',
  },
  quantityIsNotANumber: {
    code: 'invalid_data',
    message: '"quantity" must be a number',
  },
  alreadyExists: {
    code: 'invalid_data',
    message: 'Product already exists',
  },
  invalidId: {
    code: 'invalid_data',
    message: 'Wrong id format',
  },
  invalidSaleId: {
    code: 'invalid_data',
    message: 'Wrong sale ID format',
  },
  notFound: {
    code: 'invalid_data',
    message: 'Can\'t find products with this id',
  },
  invalidSale: {
    code: 'invalid_data',
    message: 'Wrong product ID or invalid quantity',
  },
  saleNotFound: {
    code: 'not_found',
    message: 'Sale not found',
  },
  stockProblem: {
    code: 'stock_problem',
    message: 'Such amount is not permitted to sell',
  },
};