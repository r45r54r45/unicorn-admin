var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
    res.render('notice');
});
router.get('/read', function(req, res, next) {
    res.render('read_notice');
});


module.exports = router;
