module.exports = (error) => ({
  error: {
    err: {
      code: 'not_found',
      message: error,
    },
  },
});