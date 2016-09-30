var EnglishNavView = require( './views/EnglishNavView' );
var EnglishHomeView = require( './views/EnglishHomeView' );

window.onload = function() {
  main();
}

var main = function() {
  displayNav();
  displayHome();
}

var displayNav = function() {
  var view = new EnglishNavView();
}

var displayHome = function() {
  var view = new EnglishHomeView();
}