module.exports = (error) => ({
  error: {
    err: {
      code: 'invalid_data',
      message: error,
    },
  },
});