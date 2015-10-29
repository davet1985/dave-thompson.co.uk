var express = require('express');
var fs = require('fs');
var Index = require('../models/index.js');
var Post = require('../models/post.js');
var cfg = require('../../config/config.' + process.env.NODE_ENV);
var router = express.Router();

router.get('/', function(req, res, next) {
  res.render('index');
});

router.get('/blog/:year/:month/:slug', function(req, res, next) {
  readIndex(function(index) {
    var post = index.findPost(req.params.year, req.params.month, req.params.slug);
    if (post == undefined) {
      res.status(404).send('Post not found');
    } else {
      res.render('blog', { title: ' | Blog', index: index, post : post });
    }
  });
});

router.get('/blog', function(req, res, next) {
  readIndex(function(index) {
    var post = index.getLatestPost();
    if (post == undefined) {
      res.status(404).send('Post not found');
    } else {
      res.render('blog', { title: '| Blog', index: index, post : post });
    }
  });
});

function readIndex(callback) {
  fs.readFile(cfg.contentDirectory + '/index.json', 'utf8', function(err, data) {
    callback(new Index(JSON.parse(data)));
  });
}

module.exports = router;
