var express = require('express');
var router = express.Router();
var path= require("path");
/* GET home page. */
router.get('/', function(req, res, next) {
  if(req.query.update){
    var sys = require('sys')
    var exec = require('child_process').exec;
    function puts(error, stdout, stderr) { sys.puts(stdout) }
    exec("git pull origin master", puts);
    res.render('index');
  }else{
    res.render('index');
  }
});

module.exports = router;
