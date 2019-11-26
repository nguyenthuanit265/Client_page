var express = require('express');
var router = express.Router();

// Require controller modules.
var productController = require('../controllers/productController');


router.get('/product', productController.product_list);

router.get('/product/single/:id', productController.product_detail);

router.get('/products', productController.product_list);


module.exports = router;