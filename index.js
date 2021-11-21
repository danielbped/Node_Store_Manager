const express = require('express');
const bodyParser = require('body-parser');

const app = express();
app.use(bodyParser.json());

const root = require('./controllers/root');

const error = require('./middlewares/error');

const port = 3000;

app.get('/', (_request, response) => {
  response.send();
});

app.use('/', root);

app.use(error);

app.listen(port, () => console.log(`App listening on port ${port}`));