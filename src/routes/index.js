var express = require('express');
var router = express.Router();

router.get('/', function(req, res, next) {
  res.render('index', { title: 'Dave Thompson - Full-stack software developer' });
});

module.exports = router;
