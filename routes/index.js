var express = require('express');
var router = express.Router();
var path= require("path");
/* GET home page. */
router.get('/', function(req, res, next) {
  // res.sendFile('/index.html');
  res.render('index');
});
router.get('/update',function(req,res, next){
  // or more concisely
  var sys = require('sys')
  var exec = require('child_process').exec;
  function puts(error, stdout, stderr) { sys.puts(stdout) }
  exec("git pull origin master", puts);
  // ddd
});

module.exports = router;
