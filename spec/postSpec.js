var Post = require("../src/models/post.js");

describe("Post", function() {

  var post;
  var postObj = {"slug": "post-slug", "title": "Post title", "date": "6th October 2015", "author": "Dave Thompson", "filename": "test-post.md"};

  beforeEach(function() {
    post = new Post(postObj, false);
  });

  it("should initialise a post without reading markdown file", function() {
    expect(post instanceof Post).toBeTruthy();
    expect(post.slug).toBe('post-slug');
    expect(post.title).toBe('Post title');
    expect(post.date).toBe('6th October 2015');
    expect(post.author).toBe('Dave Thompson');
    expect(post.filename).toBe('test-post.md');
  });

  it("should retrieve data from post markdown file", function() {
    post.retrieveContent();
    expect(post.content).toBe('<h1 id="test-post">Test post</h1>\n');
  });

  it("should initialise a post and read markdown file", function() {
    var testPost = new Post(postObj);
    expect(testPost instanceof Post).toBeTruthy();
    expect(testPost.slug).toBe('post-slug');
    expect(testPost.title).toBe('Post title');
    expect(testPost.date).toBe('6th October 2015');
    expect(testPost.author).toBe('Dave Thompson');
    expect(testPost.filename).toBe('test-post.md');
    expect(testPost.content).toBe('<h1 id="test-post">Test post</h1>\n');
  });

});