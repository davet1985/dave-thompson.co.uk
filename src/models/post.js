var fs = require('fs');
var marked = require('marked');
var cfg = require('../../config/config.' + process.env.NODE_ENV);

var Post = function(props, readFile) {
  if (typeof readFile === 'undefined') { readFile = true; }
  this.slug = props.slug;
  this.title = props.title;
  this.date = props.date;
  this.author = props.author;
  this.filename = props.filename;
  if (readFile) {
    this.retrieveContent();
  }
}

Post.prototype.retrieveContent = function() {
  var data = fs.readFileSync(cfg.contentDirectory + '/posts/' + this.filename, 'utf8');
  this.content = marked(data);
};

module.exports = Post;
