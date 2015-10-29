var fs = require('fs');
var marked = require('marked');
var cfg = require('../../config/config.' + process.env.NODE_ENV);

var Post = function(props, readFile) {
  if (typeof readFile === 'undefined') { readFile = true; }
  this.slug = props.slug;
  this.title = props.title;
  this.filename = props.filename;
  if (readFile) {
    this.retrieveContent();
  }
}

Post.prototype.retrieveContent = function() {
  var data = fs.readFileSync(cfg.contentDirectory + '/posts/' + this.filename, 'utf8');
  data = JSON.parse(data);
  this.date = data.date;
  this.author = data.author;
  this.content = marked(data.content);
};

module.exports = Post;
