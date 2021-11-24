const error = async (err, _req, res, _next) => {
  res.status(500).end();
};

module.exports = (app) => {
  app.use(error);
};