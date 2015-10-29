var Post = require('../models/post');

var Index = function(data) {
  this.years = data.years;
}

Index.prototype.getLatestPost = function() {
  return new Post(this.years[0].posts[0]);
};

Index.prototype.findYear = function(yearTitle) {
  var yearsFound = this.years.filter(function(year) {
    return year.title === yearTitle;
  });
  if (yearsFound.length > 0) {
    return yearsFound[0];
  } else {
    return undefined;
  }
};

Index.prototype.findPost = function(yearTitle, monthTitle, slug) {
  var yearFound = this.findYear(yearTitle);
  if (yearFound == undefined) {
    return undefined;
  }
  var postsFound = yearFound.posts.filter(function(post) {
    return post.slug === yearTitle + '/' + monthTitle + '/' + slug;
  });
  if (postsFound.length > 0) {  
    return new Post(postsFound[0]);
  } else {
    return undefined;
  }
};

module.exports = Index;