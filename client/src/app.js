var CommentsView = require( './models/CommentsView' );

window.onload = function() {
  main();
}

var main = function() {
  displayComments();
}

var displayComments = function() {
  var view = new CommentsView();
}