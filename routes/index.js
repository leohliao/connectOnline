var express = require('express');
var router = express.Router();
var id = require('../imagedata.json');

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', {
    title: 'Express',
    imagedata: id
  });
});

module.exports = router;
