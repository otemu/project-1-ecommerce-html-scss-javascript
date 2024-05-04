const express = require('express');
const path = require('path');
const bodyParser = require('body-parser');

const app = express();
const cors = require('cors');
const productRoutes = require('./routes/products');

app.use(cors());

app.use((req, res, next) => {
  res.setHeader('Access-Control-Allow-Origin', '*');
  res.setHeader(
    'Access-Control-Allow-Headers',
    'Origin, X-Requested-With, Content, Accept, Content-Type, Authorization'
  );
  res.setHeader(
    'Access-Control-Allow-Methods',
    'GET, POST, PUT, DELETE, PATCH, OPTIONS'
  );
  next();
});

// parse images
app.use('/images', express.static(path.join(__dirname, 'images')));
app.use(express.static('images'));

// parse application/x-www-form-urlencoded
app.use(bodyParser.urlencoded({ extended: false }));
// parse application/json
app.use(bodyParser.json());

//routes
app.use('/api', productRoutes);

module.exports = app;
