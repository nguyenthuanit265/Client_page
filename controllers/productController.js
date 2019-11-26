var Product = require('../models/product');
var async  = require('async');
exports.product_list = function(req, res, next) {

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
      
  };

// Display detail page for a specific book.
exports.product_detail = function(req, res, next) {

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

};