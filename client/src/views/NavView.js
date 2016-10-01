var EnglishHomeView = require( './EnglishHomeView' );
var EnglishMapView = require( './EnglishMapView' );
var EnglishCommentsView = require( './EnglishCommentsView' );
var EnglishContactView = require( './EnglishContactView' );

var SpanishHomeView = require( './SpanishHomeView' );
var SpanishMapView = require( './SpanishMapView' );
var SpanishCommentsView = require( './SpanishCommentsView' );
var SpanishContactView = require( './SpanishContactView' );

function EnglishNavView() {
  this.displayEnglish();
}

EnglishNavView.prototype = {

  displayEnglish: function() {
    var navSpace = document.getElementById( 'nav-space' );

    var title = document.createElement( 'h1' );
    title.innerText = "Our Wedding";

    var navList = document.createElement( 'ul' );
    navList.id = 'nav';

    var home = document.createElement( 'li' );
    home.innerText = "Home";
    home.onclick = function() {
      this.displayEnglishHome();
    }.bind( this );

    var map = document.createElement( 'li' );
    map.innerText = "Map"
    map.onclick = function() {
      this.displayEnglishMap();
    }.bind( this );

    var comments = document.createElement( 'li' );
    comments.innerText = "Comments";
    comments.onclick = function() {
      this.displayEnglishComments();
    }.bind( this );

    var flag = document.createElement( 'li' );
    flag.innerHTML = "<img src='./css/image/scotland.png' >";
    flag.onclick = function() {
      this.changeToSpanish();
    }.bind( this );

    var contact = document.createElement( 'li' );
    contact.innerText = "Contact";
    contact.onclick = function() {
      this.displayEnglishContact();
    }.bind( this );

    navSpace.appendChild( title );
    navSpace.appendChild( contact );
    navSpace.appendChild( map );
    navSpace.appendChild( comments );
    navSpace.appendChild( home );
    navSpace.appendChild( flag );

  },

  displaySpanish: function() {
    var navSpace = document.getElementById( 'nav-space' );
    var navList = document.createElement( 'ul' );
    navList.id = 'nav';

    var title = document.createElement( 'h1' );
    title.innerText = "Nuestra Boda";

    var home = document.createElement( 'li' );
    home.innerText = "Casa";
    home.onclick = function() {
      this.displaySpanishHome();
    }.bind( this );

    var map = document.createElement( 'li' );
    map.innerText = "Mapa"
    map.onclick = function() {
      this.displaySpanishMap();
    }.bind( this );

    var comments = document.createElement( 'li' );
    comments.innerText = "Comentarios";
    comments.onclick = function() {
      this.displaySpanishComments();
    }.bind( this );

    var flag = document.createElement( 'li' );
    flag.innerHTML = "<img src='./css/image/spain.png' >";
    flag.onclick = function() {
      this.changeToEnglish();
    }.bind( this );

    var contact = document.createElement( 'li' );
    contact.innerText = "Contacto";
    contact.onclick = function() {
      this.displaySpanishContact();
    }.bind( this );

    navSpace.appendChild( title );
    navSpace.appendChild( contact );
    navSpace.appendChild( map );
    navSpace.appendChild( comments );
    navSpace.appendChild( home );
    navSpace.appendChild( flag );

  },

  displayEnglishHome: function() {
    this.clearEnglish();
    var homeSpace = document.getElementById( 'home-space' );
    homeSpace.style.display = "block";
    var view = new EnglishHomeView();
  },

  displayEnglishMap: function() {
    this.clearEnglish();
    var mapSpace = document.getElementById( 'map' );
    mapSpace.style.display = "block";
    var view = new EnglishMapView();
  },

  displayEnglishComments: function() {
    this.clearEnglish();
    var commentSpace = document.getElementById( 'comment-space' );
    commentSpace.style.display = "block";
    var view = new EnglishCommentsView();
  },

  displayEnglishContact: function() {
    this.clearEnglish();
    var contactSpace = document.getElementById( 'contact-space' );
    contactSpace.style.display = "block";
    var view = new EnglishContactView();
  },

  displaySpanishHome: function() {
    this.clearSpanish();
    var homeSpace = document.getElementById( 'home-space' );
    homeSpace.style.display = "block";
    var view = new SpanishHomeView();
  },

  displaySpanishMap: function() {
    this.clearSpanish();
    var mapSpace = document.getElementById( 'map' );
    mapSpace.style.display = "block";
    var view = new SpanishMapView();
  },

  displaySpanishComments: function() {
    this.clearSpanish();
    var commentSpace = document.getElementById( 'comment-space' );
    commentSpace.style.display = "block";
    var view = new SpanishCommentsView();
  },

  displaySpanishContact: function() {
    this.clearSpanish();
    var contactSpace = document.getElementById( 'contact-space' );
    contactSpace.style.display = "block";
    var view = new SpanishContactView();
  },

  changeToSpanish: function() {
    this.changeLanguage();
    this.displaySpanish();
    this.displaySpanishHome();
  },

  changeToEnglish: function() {
    this.changeLanguage();
    this.displayEnglish();
    this.displayEnglishHome();
  },

  clearEnglish: function() {
    var navSpace = document.getElementById( 'nav-space' );
    navSpace.innerText = "";
    this.displayEnglish();

    var homeSpace = document.getElementById( 'home-space' );
    homeSpace.style.display = "none";

    var mapSpace = document.getElementById( 'map' );
    mapSpace.style.display = "none";

    var commentSpace = document.getElementById( 'comment-space' );
    commentSpace.style.display = "none";

    var contactSpace = document.getElementById( 'contact-space' );
    contactSpace.style.display = "none";
  },

  clearSpanish: function() {
    var navSpace = document.getElementById( 'nav-space' );
    navSpace.innerText = "";
    this.displaySpanish();

    var homeSpace = document.getElementById( 'home-space' );
    homeSpace.style.display = "none";

    var mapSpace = document.getElementById( 'map' );
    mapSpace.style.display = "none";

    var commentSpace = document.getElementById( 'comment-space' );
    commentSpace.style.display = "none";

    var contactSpace = document.getElementById( 'contact-space' );
    contactSpace.style.display = "none";
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
module.exports = EnglishNavView;