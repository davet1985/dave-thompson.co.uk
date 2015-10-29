var fs = require('fs');
var cfg = require('../config/config.' + process.env.NODE_ENV);
var Index = require('../src/models/index.js');
var Post = require('../src/models/post.js');

describe("Index", function() {

  var index;

  beforeEach(function() {
    var data = fs.readFileSync(cfg.contentDirectory + '/index.json', 'utf8');
    index = new Index(JSON.parse(data));
  });

  it("should initialise an index with 2 years", function() {
    expect(index instanceof Index).toBeTruthy();
    expect(index.years.length).toBe(2);
  });

  it("should return a year if exists", function() {
    var year = index.findYear('2015');
    expect(year.title).toBe('2015');
  });

  it("should return undefined if a year does not exist", function() {
    var year = index.findYear('2010');
    expect(year).toBe(undefined);
  });

  it("should return a post if exists", function() {
    var post = index.findPost('2015', '10', 'test-post');
    expect(post instanceof Post).toBeTruthy();
    expect(post.slug).toBe('2015/10/test-post');
    expect(post.title).toBe('Test post');
    expect(post.filename).toBe('test-post.json');
  });

  it("should return the latest post", function() {
    var post = index.getLatestPost();
    expect(post instanceof Post).toBeTruthy();
    expect(post.slug).toBe('2015/10/test-post');
    expect(post.title).toBe('Test post');
    expect(post.filename).toBe('test-post.json');
  });

});