var EnglishNavView = require( './views/EnglishNavView' );
var EnglishHomeView = require( './views/EnglishHomeView' );
var SpanishHomeView = require( './views/SpanishHomeView' );
var SpanishNavView = require( './views/SpanishNavView' );

window.onload = function() {
  main();
}

var main = function() {
  displayNav();
  displayHome();
}

var displayNav = function() {
  var view = new EnglishNavView();
  // var view = new SpanishNavView();
}

var displayHome = function() {
  var view = new EnglishHomeView();
  // var view = new SpanishHomeView();

}