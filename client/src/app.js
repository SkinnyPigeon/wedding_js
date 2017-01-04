var EnglishHomeView = require( './views/EnglishHomeView' );
var NavView = require( './views/NavView' )

window.onload = function() {
  main();
}

var main = function() {
  displayNav();
  displayHome();
}

var displayNav = function() {
  var view = new NavView();
}

var displayHome = function() {
  var view = new EnglishHomeView();
}