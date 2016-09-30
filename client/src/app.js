var EnglishNavView = require( './views/EnglishNavView' );
var EnglishCommentsView = require( './views/EnglishCommentsView' );
var EnglishMapView = require( './views/EnglishMapView' );

window.onload = function() {
  main();
}

var main = function() {
  displayNav();
  displayComments();
  displayMap();
}

var displayNav = function() {
  var view = new EnglishNavView();
}

var displayComments = function() {
  var view = new EnglishCommentsView();
}

var displayMap = function() {
  var view = new EnglishMapView();
}