module.exports = async (err, _req, res, _next) => {
  console.error(err);

  res.status(500).end();
};