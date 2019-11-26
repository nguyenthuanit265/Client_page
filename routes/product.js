var express = require('express');
var router = express.Router();
var Product = require('../models/product');
var async  = require('async');
router.get('/', function (req, res, next) {

  var action = req.query.act;
  if (action === 'asc') {
    Product.find()
      .sort([['price', 'ascending']])
      .exec(function (err, list_products) {
        if (err) { return next(err); }
        //Successful, so render
        // res.redirect('/product');
        res.render('product', { title: 'Product List Asc', product_list: list_products});

      });
  } else if (action === 'desc') {
    Product.find()
      .sort([['price', 'descending']])
      .exec(function (err, list_products) {
        if (err) { return next(err); }
        //Successful, so render
        // res.redirect('/product');
        res.render('product', { title: 'Product List Desc', product_list: list_products });

      });
  } else if (action === 'nameaz') {
    Product.find()
      .sort([['name', 'descending']])
      .exec(function (err, list_products) {
        if (err) { return next(err); }
        //Successful, so render
        // res.redirect('/product');
        res.render('product', { title: 'Product List Asc Name', product_list: list_products });

      });
  } else if (action === 'nameza') {
    Product.find()
      .sort([['name', 'ascending']])
      .exec(function (err, list_products) {
        if (err) { return next(err); }
        //Successful, so render
        // res.redirect('/product');
        res.render('product', { title: 'Product List Desc Name', product_list: list_products });

      });
  } else {
    Product.find({})
      .exec(function (err, list_products) {

        if (err) { return next(err); }
        //Successful, so render
        res.render('product', { title: 'Product List', product_list: list_products });
      });

  }


});
// router.get('/asc', function (req, res, next) {

  
  
//     Product.find()
//       .sort([['price', 'ascending']])
//       .exec(function (err, list_products) {
//         if (err) { return next(err); }
//         //Successful, so render
//         // res.redirect('/product');
//         res.render('product', { title: 'Product List Asc', product_list: list_products });

//       });
  

// });
router.get('/single/:id', function (req, res, next) {

  
      var id = req.params.id;
      
      async.parallel({
        product: function (callback) {
          Product.findById(id)
            .exec(callback);
        }
      }, function (err, results) {
        if (err) { return next(err); }
        if (results.product == null) { // No results.
          var err = new Error('Product not found');
          err.status = 404;
          return next(err);
        }
        // Successful, so render.
        res.render('single', { title: 'product Detail', product: results.product });
    
    
      }
    
    
      );

      // async.parallel({
      //   product: function (callback) {
      //     Product.findById(req.params.id)
      //       .exec(callback)
      //   },
    
      // }, function (err, results) {
      //   if (err) { return next(err); } // Error in API usage.
      //   if (results.product == null) { // No results.
      //     var err = new Error('product not found');
      //     err.status = 404;
      //     return next(err);
      //   }
      //   // Successful, so render.
      //   res.render('single', { title: 'product Detail', product: results.product});
      // }
    
      // );
    
});


module.exports = router;
