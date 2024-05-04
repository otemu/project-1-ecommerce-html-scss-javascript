const express = require('express');
const router = express.Router();

const productsCtrl = require('../controllers/products');

router.get('/products/', productsCtrl.productsAllItems);
router.get('/products/:id', productsCtrl.productsOneItem);
router.post('/products-order', productsCtrl.productsOrder);

module.exports = router;
