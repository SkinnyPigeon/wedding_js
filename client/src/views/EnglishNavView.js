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

    var map = document.createElement( 'li' );
    map.innerText = "Map"
    map.onclick = function() {
      this.displayMap();
    }
  },

  displayMap: function() {
    var view = new EnglishMapView();
  }

}

module.exports = EnglishNavView;