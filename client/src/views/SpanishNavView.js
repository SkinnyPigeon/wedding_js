var SpanishHomeView = require( './SpanishHomeView' );
var SpanishMapView = require( './SpanishMapView' );
var SpanishCommentsView = require( './SpanishCommentsView' );

var EnglishNavView = require( './EnglishNavView' );
var EnglishHomeView = require( './EnglishHomeView' );

var SpanishNavView = function() {
  this.display();
}

SpanishNavView.prototype = {

  display: function() {
    var navSpace = document.getElementById( 'nav-space' );
    var navList = document.createElement( 'ul' );
    navList.id = 'nav';

    var home = document.createElement( 'li' );
    home.innerText = "Casa";
    home.onclick = function() {
      this.displayHome();
    }.bind( this );

    var map = document.createElement( 'li' );
    map.innerText = "Mapa"
    map.onclick = function() {
      this.displayMap();
    }.bind( this );

    var comments = document.createElement( 'li' );
    comments.innerText = "Comentarios";
    comments.onclick = function() {
      this.displayComments();
    }.bind( this );

    var flag = document.createElement( 'li' );
    flag.innerHTML = "<img src='./css/image/scotland.png' >";
    flag.onclick = function() {
      this.changeToEnglish();
    }.bind( this );

    navSpace.appendChild( map );
    navSpace.appendChild( comments );
    navSpace.appendChild( home );
    navSpace.appendChild( flag );

  },

  displayHome: function() {
    this.clear();
    var homeSpace = document.getElementById( 'home-space' );
    homeSpace.style.display = "block";
    var view = new SpanishHomeView();
  },

  displayMap: function() {
    this.clear();
    var mapSpace = document.getElementById( 'map' );
    mapSpace.style.display = "block";
    var view = new SpanishMapView();
  },

  displayComments: function() {
    this.clear();
    var commentSpace = document.getElementById( 'comment-space' );
    commentSpace.style.display = "block";
    var view = new SpanishCommentsView();
  },

  changeToEnglish: function() {
    this.changeLanguage();
    var navView = new EnglishNavView();
    var homeView = new EnglishHomeView();
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

  changeLanguage: function() {
    var navSpace = document.getElementById( 'nav-space' );
    navSpace.innerText = "";

    var homeSpace = document.getElementById( 'home-space' );
    homeSpace.style.display = "block";

    var mapSpace = document.getElementById( 'map' );
    mapSpace.style.display = "block";

    var commentSpace = document.getElementById( 'comment-space' );
    commentSpace.style.display = "block";
  },

}

module.exports = SpanishNavView;