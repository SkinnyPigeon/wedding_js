var EnglishCommentsView = require( './views/EnglishCommentsView' );
var EnglishMapView = require( './views/EnglishMapView' );

window.onload = function() {
  main();
}

var main = function() {
  // displayComments();
  displayMap();
}

var displayComments = function() {
  var view = new EnglishCommentsView();
}

var displayMap = function() {
  var view = new EnglishMapView();
}