var EnglishHomeView = require( './EnglishHomeView' );
var EnglishVenueView = require( './EnglishVenueView' );
var EnglishBusView = require( './EnglishBusView' );
var EnglishMapView = require( './EnglishMapView' );
var EnglishGiftView = require( './EnglishGiftView' );
var EnglishCommentsView = require( './EnglishCommentsView' );
var EnglishContactView = require( './EnglishContactView' );
var EnglishRSPV = require( './EnglishRSVP' );

var SpanishHomeView = require( './SpanishHomeView' );
var SpanishVenueView = require( './SpanishVenueView' );
var SpanishBusView = require( './SpanishBusView' );
var SpanishMapView = require( './SpanishMapView' );
// var SpanishGiftView = require( './SpanishGiftView' );
// var SpanishCommentsView = require( './SpanishCommentsView' );
// var SpanishContactView = require( './SpanishContactView' );
// var SpanishRSPV = require( './SpanishRSVP' );

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

    var venue = document.createElement( 'li' );
    venue.innerText = "Venue";
    venue.onclick = function() {
      this.displayEnglishVenue();
    }.bind( this );

    var bus = document.createElement( 'li' );
    bus.innerText = "Buses";
    bus.onclick = function() {
      this.displayEnglishBus();
    }.bind( this );

    var hotels = document.createElement( 'li' );
    hotels.innerText = "Hotels";
    hotels.onclick = function() {
      this.displayEnglishMap();
    }.bind( this );

    var rsvp = document.createElement( 'li' );
    rsvp.innerText = "RSVP";
    rsvp.onclick = function() {
      this.displayEnglishRSVP();
    }.bind( this );

    var gifts = document.createElement( 'li' );
    gifts.innerText = "Gifts"
    gifts.onclick = function() {
      this.displayEnglishGift();
    }.bind( this );

    var comments = document.createElement( 'li' );
    comments.innerText = "Guest Book";
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

    navList.appendChild( flag );
    navList.appendChild( home );
    navList.appendChild( venue );
    navList.appendChild( bus );
    navList.appendChild( hotels );
    navList.appendChild( rsvp );
    navList.appendChild( gifts );
    navList.appendChild( comments );
    navList.appendChild( contact );

    navSpace.appendChild( title );
    navSpace.appendChild( navList );
  },

  displaySpanish: function() {
    var navSpace = document.getElementById( 'nav-space' );

    var title = document.createElement( 'h1' );
    title.innerText = "Nuestra Boda";

    var navList = document.createElement( 'ul' );
    navList.id = 'nav';

    var home = document.createElement( 'li' );
    home.innerText = "Home";
    home.onclick = function() {
      this.displaySpanishHome();
    }.bind( this );

    var venue = document.createElement( 'li' );
    venue.innerText = "Salón";
    venue.onclick = function() {
      this.displaySpanishVenue();
    }.bind( this );

    var bus = document.createElement( 'li' );
    bus.innerText = "Autobús";
    bus.onclick = function() {
      this.displaySpanishBus();
    }.bind( this );

    var hotels = document.createElement( 'li' );
    hotels.innerText = "Hoteles";
    hotels.onclick = function() {
      this.displaySpanishMap();
    }.bind( this );

    var rsvp = document.createElement( 'li' );
    rsvp.innerText = "Confirmar asistencia";
    rsvp.onclick = function() {
      this.displaySpanishRSVP();
    }.bind( this );

    var gifts = document.createElement( 'li' );
    gifts.innerText = "Lista de bodas"
    gifts.onclick = function() {
      this.displaySpanishGift();
    }.bind( this );

    var comments = document.createElement( 'li' );
    comments.innerText = "Libro de invitados";
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

    navList.appendChild( flag );
    navList.appendChild( home );
    navList.appendChild( venue );
    navList.appendChild( bus );
    navList.appendChild( hotels );
    navList.appendChild( rsvp );
    navList.appendChild( gifts );
    navList.appendChild( comments );
    navList.appendChild( contact );

    navSpace.appendChild( title );
    navSpace.appendChild( navList );
  },

  displayEnglishHome: function() {
    this.clearEnglish();
    var homeSpace = document.getElementById( 'home-space' );
    homeSpace.style.display = "block";

    var view = new EnglishHomeView();
  },

  displayEnglishVenue: function() {
    this.clearEnglish();
    var venueSpace = document.getElementById( 'venue-space' );
    venueSpace.style.display = "block";
    var view = new EnglishVenueView();
  },

  displayEnglishBus: function() {
    this.clearEnglish();
    var busSpace = document.getElementById( 'bus-space' );
    busSpace.style.display = "block";
    // var mapSpace = document.getElementById( 'map' );
    // mapSpace.style.display = "block";
    var view = new EnglishBusView();
  },

  displayEnglishMap: function() {
    this.clearEnglish();
    var hotelSpace = document.getElementById( 'hotel-space' );
    hotelSpace.style.display = "block";
    var mapSpace = document.getElementById( 'map' );
    mapSpace.style.display = "block";
    var view = new EnglishMapView();
  },

  displayEnglishRSVP: function() {
    this.clearEnglish();
    var rsvpSpace = document.getElementById( 'rsvp-space' );
    rsvpSpace.style.display = "block";
    var view = new EnglishRSPV();
  },

  displayEnglishGift: function() {
    this.clearEnglish();
    var giftSpace = document.getElementById( 'gift-space' );
    giftSpace.style.display = "block";
    var view = new EnglishGiftView();
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

  displaySpanishVenue: function() {
    this.clearSpanish();
    var venueSpace = document.getElementById( 'venue-space' );
    venueSpace.style.display = "block";
    var view = new SpanishVenueView();
  },

  displaySpanishBus: function() {
    this.clearSpanish();
    var busSpace = document.getElementById( 'bus-space' );
    busSpace.style.display = "block";
    // var mapSpace = document.getElementById( 'map' );
    // mapSpace.style.display = "block";
    var view = new SpanishBusView();
  },

  displaySpanishMap: function() {
    this.clearSpanish();
    var hotelSpace = document.getElementById( 'hotel-space' );
    hotelSpace.style.display = "block";
    var mapSpace = document.getElementById( 'map' );
    mapSpace.style.display = "block";
    var view = new SpanishMapView();
  },

  displaySpanishRSVP: function() {
    this.clearSpanish();
    var rsvpSpace = document.getElementById( 'rsvp-space' );
    rsvpSpace.style.display = "block";
    var view = new SpanishRSPV();
  },

  displaySpanishGift: function() {
    this.clearSpanish();
    var giftSpace = document.getElementById( 'gift-space' );
    giftSpace.style.display = "block";
    var view = new SpanishGiftView();
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
    this.clear();
    this.displayEnglish();
  },

  clearSpanish: function() {
    this.clear();
    this.displaySpanish();
  },

  clear: function() {
    var navSpace = document.getElementById( 'nav-space' );
    navSpace.innerText = "";

    var homeSpace = document.getElementById( 'home-space' );
    homeSpace.style.display = "none";

    var mapSpace = document.getElementById( 'map' );
    mapSpace.style.display = "none";

    var venueSpace = document.getElementById( 'venue-space' );
    venueSpace.style.display = "none";

    var hotelSpace = document.getElementById( 'hotel-space' );
    hotelSpace.style.display = "none";

    var busSpace = document.getElementById( 'bus-space' );
    busSpace.style.display = "none";

    var rsvpSpace = document.getElementById( 'rsvp-space' );
    rsvpSpace.style.display = "none";

    var giftSpace = document.getElementById( 'gift-space' );
    giftSpace.style.display = "none";

    var giftList = document.getElementById( 'gift-list' );
    giftList.style.display = "none";

    var commentSpace = document.getElementById( 'comment-space' );
    commentSpace.style.display = "none";

    var contactSpace = document.getElementById( 'contact-space' );
    contactSpace.style.display = "none";

    var circleSpace = document.getElementById( 'circle-space' );
    circleSpace.style.display = "none";
    circleSpace.style.display = "block";
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