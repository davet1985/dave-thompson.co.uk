var Post = require("../src/models/post.js");

describe("Post", function() {

  var post;

  beforeEach(function() {
    post = new Post({"slug": "post-slug", "title": "Post title", "filename": "test-post.json"}, false);
  });

  it("should initialise a post without reading file", function() {
    expect(post instanceof Post).toBeTruthy();
    expect(post.slug).toBe('post-slug');
    expect(post.title).toBe('Post title');
    expect(post.filename).toBe('test-post.json');
  });

  it("should retrieve data from post content file", function() {
    post.retrieveContent();
    expect(post.date).toBe('6th October 2015');
    expect(post.author).toBe('Dave Thompson');
    expect(post.content).toBe('<p>Test post content</p>\n');
  });

});