const products = require('../models/products');

exports.productsAllItems = (req, res) => {
  const productUpdated = products.all().map((product) => {
    return {
      ...product,
      imageSrc: `${req.protocol}://${req.get('host')}/images/${
        product.imageSrc
      }`,
    };
  });
  return res.status(200).json(productUpdated);
};

exports.productsOneItem = (req, res) => {
  const singleProduct = products.findById(req.params.id);
  if (singleProduct) {
    res.status(200).json({
      ...singleProduct,
      imageSrc: `${req.protocol}://${req.get('host')}/images/${
        singleProduct.imageSrc
      }`,
    });
  } else {
    return res.status(404).send(new Error('No product found'));
  }
};

exports.productsOrder = (req, res) => {
  if (
    !req.body?.order ||
    !req.body?.order?.details ||
    !req.body?.order?.products
  ) {
    return res.status(400).send(new Error('Data not sent correctly'));
  }

  return res.status(201).json({
    confirmation: Date.now(),
    details: req.body.order.detail,
    products: req.body.order.products,
  });
};
