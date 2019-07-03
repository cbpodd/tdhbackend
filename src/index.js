require('dotenv').config();
const express = require('express');
const app = express();
const port = process.env.PORT;
const cors = require('cors');

const errorHandler = require('./apis/error');

app.use(cors());

app.use((req, res, next) => {
  const err = new Error('Route not found :(');
  err.status = 404;
  err.data = req.route;
  next(err);
});

app.use(errorHandler);
app.listen(port, () => console.log(`Listening on port ${port}!`));
