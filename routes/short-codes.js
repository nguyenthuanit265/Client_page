var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('short-codes', { title: 'Best Store' });
});

module.exports = router;
