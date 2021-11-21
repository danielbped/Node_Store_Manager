module.exports = ({ code, message }) => ({
  error: {
    err: {
      code,
      message,
    },
  },
});