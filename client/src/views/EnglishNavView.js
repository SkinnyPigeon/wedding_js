var EnglishMapView = require( './EnglishMapView' );

var EnglishNavView = function() {
  this.display();
}

EnglishNavView.prototype = {

  display: function() {
    var navSpace = document.getElementById( 'nav-space' );
    var navList = document.createElement( 'ul' );
    navList.id = 'nav';

    var flag = document.createElement( 'li' );

    var home = document.createElement( 'li' );
    home.innerText = "Home";
    home.onclick = function() {
      this.displayHome();
    }.bind( this );

    var map = document.createElement( 'li' );
    map.innerText = "Map"
    map.onclick = function() {
      this.displayMap();
    }.bind( this );

    navSpace.appendChild( home );
    navSpace.appendChild( map );
  },

  displayHome: function() {
    this.clear();
  },

  displayMap: function() {
    this.clear();
    var mapSpace = document.getElementById( 'map' );
    mapSpace.style.display = "block";
    var view = new EnglishMapView();
  },

  clear: function() {
    var mapSpace = document.getElementById( 'map' );
    mapSpace.style.display = "none";
    var commentSpace = document.getElementById( 'comment-space' );
    commentSpace.style.display = "none";
  },

}

module.exports = EnglishNavView;