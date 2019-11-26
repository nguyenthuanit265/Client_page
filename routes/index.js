var express = require('express');
var router = express.Router();
var productController = require('../controllers/productController');
var homeController = require('../controllers/homeController');
var loginController = require('../controllers/loginController');
var registerController = require('../controllers/registerController');
var emailController = require('../controllers/emailController');
var furnitureController = require('../controllers/furnitureController');
var checkoutController = require('../controllers/checkoutController');

/* GET home page. */

router.get('/',homeController.home);


// PRODUCT
router.get('/product', productController.product_list);

router.get('/product/single/:id', productController.product_detail);

router.get('/products', productController.product_list);


// LOGIN
router.get('/login', loginController.login);

//REGISTER
router.get('/register', registerController.register);

//MAIL
router.get('/mail', emailController.email);

//FURNITURE
router.get('/furniture', furnitureController.furniture);

//CHECKOUT
router.get('/checkout', checkoutController.checkout);




module.exports = router;
