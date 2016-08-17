var express = require('express');
var router = express.Router();
var path= require("path");
/* GET home page. */
router.get('/', function(req, res, next) {
  // res.sendFile('/index.html');
  res.render('index');
});


module.exports = router;
