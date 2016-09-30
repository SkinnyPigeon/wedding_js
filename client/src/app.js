var EnglishNavView = require( './views/EnglishNavView' );
var EnglishHomeView = require( './views/EnglishHomeView' );
var SpanishHomeView = require( './views/SpanishHomeView' );
var SpanishNavView = require( './views/SpanishNavView' );

var NavView = require( './views/NavView' )

window.onload = function() {
  main();
}

var main = function() {
  displayNav();
  displayHome();
}

var displayNav = function() {
  // var navView = new EnglishNavView();
  // var view = new SpanishNavView();
  var view = new NavView();
}

var displayHome = function() {
  var view = new EnglishHomeView();
  // var view = new SpanishHomeView();

}