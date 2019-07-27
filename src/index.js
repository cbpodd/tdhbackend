require('dotenv').config();

const express = require('express');
const bodyParser = require('body-parser');

const routes = require('./routes');
const errorHandler = require('./routes/error');

const app = express();
const port = process.env.PORT || 8081;

app.use(require('cors')());
app.use(bodyParser.json());

require('./db').connectToDB();

app.use('/api', routes);

app.use((_req, _res, next) => {
  const err = new Error('Route not found :(');
  err.status = 404;
  next(err);
});

app.use(errorHandler);
app.listen(port);
