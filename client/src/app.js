var EnglishNavView = require( './views/EnglishNavView' );
var EnglishCommentsView = require( './views/EnglishCommentsView' );

window.onload = function() {
  main();
}

var main = function() {
  displayNav();
  displayComments();
}

var displayNav = function() {
  var view = new EnglishNavView();
}

var displayComments = function() {
  var view = new EnglishCommentsView();
}
