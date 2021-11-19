const express = require('express');
const bodyParser = require('body-parser');

const app = express();
app.use(bodyParser.json());

const routerProducts = require('./controllers/products/router');

const error = require('./middlewares/error');

const port = 3000;

app.get('/', (_request, response) => {
  response.send();
});

app.use('/', routerProducts);

app.use(error);

app.listen(port, () => `App listening on port ${port}`);