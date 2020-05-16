
const express = require('express');
const logger = require('morgan');
const bodyParser = require('body-parser');
require('dotenv').config()

const app = express();

const product = require('./routes/product')

app.use(logger('dev'));
app.use(bodyParser.json())
app.use(bodyParser.urlencoded({
  extended: true
}));

app.use('/product', product)

app.get('/', (req, res) => res.status(200).send({
  message: 'Tes Example',
}));

const port = process.env.PORT || 3000;
app.listen(port, () => {
  console.log(`server running on port ${port}`);
});

app.use(function(req, res, next) {
  res.status(404).send({message: 'API Not Found'})
});

module.exports = app;
