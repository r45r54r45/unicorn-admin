var express = require('express');
var router = express.Router();
var multer = require('multer')({
    inMemory: true,
    fileSize: 5 * 1024 * 1024
});
var gcloud = require('gcloud');
var storage = gcloud.storage({projectId: 901522536554});
var bucket = storage.bucket("image_yic");

/* GET home page. */
router.get('/', function (req, res, next) {
    res.render('notice');
});
router.get('/read', function (req, res, next) {
    res.render('read_notice');
});
router.post('/image', multer.single('file'), function (req, res, next) {
    console.log(req.file);
    if (req.file) {
        try {
            console.log(req.file);
            var blob = bucket.file("notice_" + new Date().getTime() + "." + req.file.mimetype.split("/")[1]);
            var blobStream = blob.createWriteStream();
            blobStream.on('error', function (err) {
                console.log(err);
                return next(err);
            });
            blobStream.on('finish', function () {
                var publicUrl = 'https://storage.googleapis.com/' + bucket.name + '/' + blob.name;
                console.log({result: true, image: publicUrl});
                res.json({result: true, image: publicUrl});
            });
            blobStream.end(req.file.buffer);
        }catch(err){
            console.log(err);
        }
    } else {
        res.json({result: false});
    }
});

module.exports = router;
