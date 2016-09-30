var EnglishHomeView = require( './EnglishHomeView' );
var EnglishMapView = require( './EnglishMapView' );
var EnglishCommentsView = require( './EnglishCommentsView' );

var EnglishNavView = function() {
  this.display();
}

EnglishNavView.prototype = {

  display: function() {
    var navSpace = document.getElementById( 'nav-space' );
    var navList = document.createElement( 'ul' );
    navList.id = 'nav';

    var flag = document.createElement( 'li' );
    flag.innerHTML = "<img src='./css/image/spain.png' >";

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

    var comments = document.createElement( 'li' );
    comments.innerText = "Comments";
    comments.onclick = function() {
      this.displayComments();
    }.bind( this );

    navSpace.appendChild( flag );
    navSpace.appendChild( home );
    navSpace.appendChild( map );
    navSpace.appendChild( comments );
  },

  displayHome: function() {
    this.clear();
    var homeSpace = document.getElementById( 'home-space' );
    homeSpace.style.display = "block";
    var view = new EnglishHomeView();
  },

  displayMap: function() {
    this.clear();
    var mapSpace = document.getElementById( 'map' );
    mapSpace.style.display = "block";
    var view = new EnglishMapView();
  },

  displayComments: function() {
    this.clear();
    var commentSpace = document.getElementById( 'comment-space' );
    commentSpace.style.display = "block";
    var view = new EnglishCommentsView();
  },

  clear: function() {
    var navSpace = document.getElementById( 'nav-space' );
    navSpace.innerText = "";
    this.display();

    var homeSpace = document.getElementById( 'home-space' );
    homeSpace.style.display = "none";

    var mapSpace = document.getElementById( 'map' );
    mapSpace.style.display = "none";

    var commentSpace = document.getElementById( 'comment-space' );
    commentSpace.style.display = "none";
  },

}

module.exports = EnglishNavView;