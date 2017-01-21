/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId])
/******/ 			return installedModules[moduleId].exports;
/******/
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			exports: {},
/******/ 			id: moduleId,
/******/ 			loaded: false
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.loaded = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(0);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ function(module, exports, __webpack_require__) {

	var EnglishHomeView = __webpack_require__( 1 );
	var NavView = __webpack_require__( 2 )
	
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

/***/ },
/* 1 */
/***/ function(module, exports) {

	var EnglishHomeView = function() {
	  this.display();
	}
	
	EnglishHomeView.prototype = {
	
	  display: function() {
	    var homeSpace = document.getElementById( 'home-space' );
	    homeSpace.innerText = "";
	
	    var welcome = document.createElement( 'h1' );
	    welcome.className = "circleTitleRaised";
	    welcome.innerText = "Welcome to our website";
	
	    var dotsOne = document.createElement( 'p' );
	    dotsOne.innerText = "--------------------------------"
	
	    var dotsTwo = document.createElement( 'p' );
	    dotsTwo.innerText = "--------------------------------"
	
	    var text = document.createElement( 'h5' );
	    text.innerText = "Here you’ll find everything you’ll need to get to our wedding and more. \n\n Drop by our guest book to say hello or go to the venue page to find information about the venue location and a way to share photos on the big day. \n\n For those of you travelling in from out of town you’ll find some suggested hotels and information about the bus that’ll be running from Orihuela to the venue. \n\n Some of you have already asked us what we would like in the way of presents. For those so inclined you can find some ideas in the gift section. \n\n Please RSVP through the website. You can also confirm if you’ll need the bus on that page."
	
	    var message = document.createElement( 'h5' );
	    message.innerText = "We hope to see you all there on the 1st of April at half past twelve.";
	    message.id = "message";
	
	    var us = document.createElement( 'h1' );
	    us.innerText = "Laura & Euan";
	
	    var language = document.createElement( 'h1' );
	    language.innerText = "Cambiar de idioma";
	
	    var languageText = document.createElement( 'h5' );
	    languageText.innerText = "Pulsa en la bandera para cambiar el idioma."
	
	    homeSpace.appendChild( welcome );
	    homeSpace.appendChild( dotsOne );
	    homeSpace.appendChild( text );
	    homeSpace.appendChild( message );
	    homeSpace.appendChild( us );
	    homeSpace.appendChild( languageText );
	  },
	
	}
	
	module.exports = EnglishHomeView;

/***/ },
/* 2 */
/***/ function(module, exports, __webpack_require__) {

	var EnglishHomeView = __webpack_require__( 1 );
	var EnglishVenueView = __webpack_require__( 3 );
	var EnglishBusView = __webpack_require__( 4 );
	var EnglishMapView = __webpack_require__( 5 );
	var EnglishGiftView = __webpack_require__( 6 );
	var EnglishCommentsView = __webpack_require__( 13 );
	var EnglishContactView = __webpack_require__( 14 );
	var EnglishRSPV = __webpack_require__( 15 );
	
	var SpanishHomeView = __webpack_require__( 16 );
	var SpanishVenueView = __webpack_require__( 17 );
	var SpanishBusView = __webpack_require__( 18 );
	var SpanishMapView = __webpack_require__( 19 );
	var SpanishGiftView = __webpack_require__( 20 );
	var SpanishCommentsView = __webpack_require__( 21 );
	var SpanishContactView = __webpack_require__( 22 );
	var SpanishRSPV = __webpack_require__( 23 );
	
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

/***/ },
/* 3 */
/***/ function(module, exports) {

	var EnglishVenueView = function() {
	  this.display();
	}
	
	EnglishVenueView.prototype = {
	
	  display: function() {
	    var venueSpace = document.getElementById( 'venue-space' );
	    venueSpace.innerText = "";
	
	    var title = document.createElement( 'h1' );
	    title.className = "circleTitleRaised";
	    title.innerText = "Salones Canario";
	
	    var dotsOne = document.createElement( 'p' );
	    dotsOne.innerText = "--------------------------------"
	
	    var dotsTwo = document.createElement( 'p' );
	    dotsTwo.innerText = "--------------------------------"
	
	    var text = document.createElement( 'h5' );
	    text.id = "venueText";
	    text.innerText = "We hope to see you all there for the ceremony at 12.30 which will be held in the garden. Afterwards there will be drinks and nibbles. Following that will be a sit down meal inside the venue before the day finishes with a DJ and open bar."
	
	    var address = document.createElement( 'a' );
	    address.innerText = "Salones Canarios, Calle Constitución, 03170 Rojales, Alicante, Spain \n (click me)";
	    address.href = "https://www.google.co.uk/maps/place/Salones+Canario/@38.085104,-0.7316289,17z/data=!3m1!4b1!4m5!3m4!1s0xd63af14268fcecf:0xe8048d44d8dd442f!8m2!3d38.085104!4d-0.7294402";
	    address.target = "_blank";
	    address.id = "address";
	
	    var slackTitle = document.createElement( 'h1' );
	    slackTitle.innerText = "How To Share Your Photos"
	
	    var slackText = document.createElement( 'h5' );
	    slackText.innerText = "We would love for you to share your pictures of the ceremony and party with all of us. If you'd like to join in then send us your email address and we'll invite you to join a group in an app called Slack. It's free and private. All you have to do is post the photos you take to the channel in Slack and we'll all get to see them on the big screen in the venue."
	
	    var contact = document.createElement( 'ul' );
	
	    var email = document.createElement( 'li' );
	    email.innerHTML = "<img src='./css/image/email.png' >";
	
	    var emailAddress = document.createElement( 'a' );
	    emailAddress.href = "mailto:euanandlaura@gmail.com";
	    emailAddress.innerText = "euanandlaura@gmail.com";
	
	    contact.appendChild( email );
	    contact.appendChild( emailAddress );
	
	    venueSpace.appendChild( title );
	    venueSpace.appendChild( dotsOne );
	    venueSpace.appendChild( text );
	    venueSpace.appendChild( address );
	    venueSpace.appendChild( slackTitle );
	    venueSpace.appendChild( dotsTwo );
	    venueSpace.appendChild( slackText );
	    venueSpace.appendChild( contact );
	  },
	}
	
	module.exports = EnglishVenueView;

/***/ },
/* 4 */
/***/ function(module, exports) {

	var EnglishBusView = function() {
	
	  this.center = { lat: 38.0864422, lng: -0.8313381 };
	  this.map = new google.maps.Map( document.getElementById( 'map' ), {
	    center: this.center,
	    zoom: 11
	  })
	
	  this.display();
	  this.displayMap();
	}
	
	EnglishBusView.prototype = {
	
	  display: function() {
	    var busSpace = document.getElementById( 'bus-space' );
	    busSpace.innerText = "";
	
	    var title = document.createElement( 'h1' );
	    title.className = "circleTitle";
	    title.innerText = "Buses";
	
	    var dotsOne = document.createElement( 'p' );
	    dotsOne.innerText = "--------------------------------"
	
	    var text = document.createElement( 'h5' );
	    text.innerText = "For those of you staying in Orihuela we will be providing a bus to and from the wedding so no need to worry about taxis or sorting out a lift. We don't have the exact time or location that it'll run from but we will update this as soon as we have those details. \n\n Please confirm on the RSVP page if you will need to use the bus so we can have an idea about the numbers."
	
	    var contactDiv = document.createElement( 'div' );
	    contactDiv.id = "contactDiv";
	
	    var contact = document.createElement( 'ul' );
	    contactDiv.appendChild( contact );
	
	    var email = document.createElement( 'li' );
	    email.innerHTML = "<img src='./css/image/email.png' >";
	
	    var address = document.createElement( 'a' );
	    address.href = "mailto:euanandlaura@gmail.com";
	    address.innerText = "euanandlaura@gmail.com";
	
	    contact.appendChild( email );
	    contact.appendChild( address );
	
	    busSpace.appendChild( title );
	    busSpace.appendChild( dotsOne );
	    busSpace.appendChild( text );
	    busSpace.appendChild( contactDiv );
	  },
	
	  displayMap: function() {
	    var salone = new google.maps.Marker({
	      position: { lat: 38.085552, lng: -0.729775 },
	      map: this.map,
	      animation: google.maps.Animation.DROP,
	      title: 'Salone Canario'
	    });
	
	    var saloneInfo = new google.maps.InfoWindow({
	      content: "Salone Canario"
	    });
	
	    salone.addListener( 'click', function() {
	      saloneInfo.open( this.map, salone )
	    })
	  }
	}
	
	module.exports = EnglishBusView;

/***/ },
/* 5 */
/***/ function(module, exports) {

	var EnglishMapView = function() {
	  this.display();
	}
	
	EnglishMapView.prototype = {
	
	  display: function() {
	    var hotelSpace = document.getElementById( 'hotel-space' );
	    hotelSpace.innerText = "";
	
	    var title = document.createElement( 'h1' );
	    title.className = "circleTitleRaised";
	    title.innerText = "Hotels";
	
	    var dotsOne = document.createElement( 'p' );
	    dotsOne.innerText = "--------------------------------"
	
	    var text = document.createElement( 'h5' );
	    text.innerText = "For those of you who are travelling in from out of town or just looking for somewhere a bit closer to the venue we have picked a couple places that you might be interested in. \n\n Orihuela is a large and lovely town that's home to Laura's family and has got a selection of places to eat, drink and enjoy. The Hotel Palacio de Tudemir are happy to give us a discount if we block book 10 rooms so let us know if you fancy booking there and we'll get it all set up. \n\n To see where these are just give the map or websites below a click.";
	
	    var palacioDeTudemir = document.createElement( 'h5' );
	    palacioDeTudemir.innerText = "Palacio de Tudemir: ";
	    palacioDeTudemir.className = "hotels";
	
	    var palacioDeTudemirMap = document.createElement( 'a' );
	    palacioDeTudemirMap.innerText = "Map"
	    palacioDeTudemirMap.href = "https://www.google.co.uk/maps/dir/Hotel+Boutique+Palacio+de+Tudemir,+Calle+Alfonso+XIII,+1,+03300+Orihuela,+Alicante,+Spain/Salones+Canario,+Calle+Constituci%C3%B3n,+Rojales,+Spain/@38.0596435,-0.9071404,12z/data=!3m1!4b1!4m13!4m12!1m5!1m1!1s0xd63991de05ee827:0x7aefcd1fad58759!2m2!1d-0.9447066!2d38.0859664!1m5!1m1!1s0xd63af14268fcecf:0xe8048d44d8dd442f!2m2!1d-0.7294402!2d38.085104";
	    palacioDeTudemirMap.target = "_blank";
	
	    var palacioDeTudemirSite = document.createElement( 'a' );
	    palacioDeTudemirSite.innerText = "Website"
	    palacioDeTudemirSite.href = "http://www.hotelpalaciotudemir.com/en";
	    palacioDeTudemirSite.target = "_blank";
	
	
	    var hostalReyTeodomiro = document.createElement( 'h5' );
	    hostalReyTeodomiro.innerText = "Hostal Rey Teodomiro: ";
	    hostalReyTeodomiro.className = "hotels";
	
	    var hostalReyTeodomiroMap = document.createElement( 'a' );
	    hostalReyTeodomiroMap.innerText = "Map"
	    hostalReyTeodomiroMap.href = "https://www.google.co.uk/maps/dir/Hostal+Rey+Teodomiro,+Avenida+Teodomiro,+Orihuela,+Spain/Salones+Canario,+Calle+Constituci%C3%B3n,+Rojales,+Spain/@38.1662726,-0.9575739,11z/data=!3m1!4b1!4m13!4m12!1m5!1m1!1s0xd63991fbca946ff:0xef0498debb46c0e4!2m2!1d-0.9456179!2d38.0818869!1m5!1m1!1s0xd63af14268fcecf:0xe8048d44d8dd442f!2m2!1d-0.7294402!2d38.085104"
	    hostalReyTeodomiroMap.target = "_blank";
	
	    var hostalReyTeodomiroSite = document.createElement( 'a' );
	    hostalReyTeodomiroSite.innerText = "Website";
	    hostalReyTeodomiroSite.href = "http://www.hostalreyteodomiro.eu/";
	    hostalReyTeodomiroSite.target = "_blank";
	
	    var losPalacios = document.createElement( 'h5' );
	    losPalacios.innerText = "Los Palacios: ";
	    losPalacios.className = "hotels";
	
	    var losPalaciosMap = document.createElement( 'a' );
	    losPalaciosMap.innerText = "Map";
	    losPalaciosMap.href = "https://www.google.co.uk/maps/dir/Los+Palacios,+Avenida+Vega+Baja,+Formentera+del+Segura,+Spain/Salones+Canario,+Calle+Constituci%C3%B3n,+Rojales,+Spain/@38.0864439,-0.7298043,17z/data=!3m1!4b1!4m13!4m12!1m5!1m1!1s0xd63af138e9be99f:0x28ebfd508ffa70e4!2m2!1d-0.7269625!2d38.0880189!1m5!1m1!1s0xd63af14268fcecf:0xe8048d44d8dd442f!2m2!1d-0.7294402!2d38.085104";
	    losPalaciosMap.target = "_blank";
	
	    var losPalaciosSite = document.createElement( 'a' );
	    losPalaciosSite.innerText = "Website";
	    losPalaciosSite.href = "https://www.tripadvisor.co.uk/Hotel_Review-g1078806-d1106612-Reviews-Los_Palacios-Formentera_Del_Segura_Costa_Blanca_Province_of_Alicante_Valencian_Countr.html";
	    losPalaciosSite.target = "_blank";
	
	
	    var laLaguna = document.createElement( 'h5' );
	    laLaguna.innerText = "La Laguna:";
	    laLaguna.className = "hotels";
	
	    var laLagunaMap = document.createElement( 'a' );
	    laLagunaMap.innerText = "Map";
	    laLagunaMap.href = "https://www.google.co.uk/maps/dir/Hotel+La+Laguna+Spa+%26+Golf,+Avenida+Antonio+Quesada,+Quesada,+Spain/Salones+Canario,+Calle+Constituci%C3%B3n,+Rojales,+Spain/@38.0629029,-0.7429271,14z/data=!3m1!4b1!4m13!4m12!1m5!1m1!1s0xd63a92611432135:0x69d8fece45c999fa!2m2!1d-0.7111099!2d38.0494862!1m5!1m1!1s0xd63af14268fcecf:0xe8048d44d8dd442f!2m2!1d-0.7294402!2d38.085104";
	    laLagunaMap.target = "_blank";
	
	    var laLagunaSite = document.createElement( 'a' );
	    laLagunaSite.innerText = "Website";
	    laLagunaSite.href = "http://www.hotellalaguna.com/en/";
	    laLagunaSite.target = "_blank";
	
	    var brOne = document.createElement( 'br' );
	    var brTwo = document.createElement( 'br' );
	    var brThree = document.createElement( 'br' );
	
	    var orihuela = document.createElement( 'h1' );
	    orihuela.innerText = "Hotels in Orihuela";
	
	    var rojales = document.createElement( 'h1' );
	    rojales.innerText = "Hotels in Rojales";
	
	    hotelSpace.appendChild( title );
	    hotelSpace.appendChild( dotsOne );
	    hotelSpace.appendChild( text );
	
	    hotelSpace.appendChild( orihuela );
	    hotelSpace.appendChild( palacioDeTudemir );
	    hotelSpace.appendChild( palacioDeTudemirMap );
	    hotelSpace.appendChild( palacioDeTudemirSite );
	
	    hotelSpace.appendChild( brOne );
	    hotelSpace.appendChild( hostalReyTeodomiro );
	    hotelSpace.appendChild( hostalReyTeodomiroMap );
	    hotelSpace.appendChild( hostalReyTeodomiroSite );
	
	    hotelSpace.appendChild( rojales );
	    hotelSpace.appendChild( losPalacios );
	    hotelSpace.appendChild( losPalaciosMap );
	    hotelSpace.appendChild( losPalaciosSite );
	
	
	    hotelSpace.appendChild( brTwo );
	    hotelSpace.appendChild( laLaguna );
	    hotelSpace.appendChild( laLagunaMap );
	    hotelSpace.appendChild( laLagunaSite );
	  },
	}
	
	module.exports = EnglishMapView;

/***/ },
/* 6 */
/***/ function(module, exports, __webpack_require__) {

	var EnglishFlightsView = __webpack_require__( 7 );
	var EnglishHotelsView = __webpack_require__( 8 );
	var EnglishDrinksView = __webpack_require__( 9 );
	var EnglishFoodView = __webpack_require__( 10 );
	var EnglishBoatView = __webpack_require__( 11 );
	var EnglishLavaView = __webpack_require__( 12 );
	
	var EnglishGiftView = function() {
	  this.display();
	}
	
	EnglishGiftView.prototype = {
	
	  display: function() {
	    var giftSpace = document.getElementById( 'gift-space' );
	    giftSpace.innerText = "";
	
	    var title = document.createElement( 'h1' );
	    title.className = "circleTitle";
	    title.innerText = "Gifts";
	
	    var dotsOne = document.createElement( 'p' );
	    dotsOne.innerText = "--------------------------------"
	
	    var text = document.createElement( 'h5' );
	    text.innerText = "Obviously we will be delighted just to see you all there but for those of you who wish to give us a gift then we certainly wouldn't turn down you generousity. Currently we are renting a flat that is fully kitted out so we are not in desperate need of household goods. We are however going on our honeymoon a few days after the wedding and if you'd like to contribute towards some of it then we would be eternally grateful to you. \n\n Click below to see some of the ways you could help out.";
	
	    var button = document.createElement( 'button' );
	    button.innerText = "Click Me";
	    button.onclick = function() {
	      this.displayGifts();
	    }.bind( this );
	
	    giftSpace.appendChild( title );
	    giftSpace.appendChild( dotsOne );
	    giftSpace.appendChild( text );
	    giftSpace.appendChild( button );
	  },
	
	  displayGifts: function() {
	    var circleSpace = document.getElementById( 'circle-space' );
	
	    var giftSpace = document.getElementById( 'gift-space' );
	    giftSpace.innerText = "";
	    giftSpace.style.display = "block";
	
	    var title = document.createElement( 'h1' );
	    title.className = "circleTitle";
	    title.innerText = "Gifts";
	
	    var dotsTwo = document.createElement( 'p' );
	    dotsTwo.innerText = "--------------------------------"
	
	    var text = document.createElement( 'h5' );
	    text.innerText = "Click on one of the items below to see a bit more about it and to contribute should you wish."
	
	    var listOne = document.createElement( 'ul' );
	    var listTwo = document.createElement( 'ul' );
	
	    var flights = document.createElement( 'img' );
	    flights.className = "giftImage";
	    flights.src = "../css/image/plane.png";
	    flights.onclick = function() {
	      this.displayFlights();
	    }.bind( this );
	
	    var lavaTour = document.createElement( 'img' );
	    lavaTour.className = "giftImage";
	    lavaTour.src = "../css/image/volcano.png";
	    lavaTour.onclick = function() {
	      this.displayLavaTour();
	    }.bind( this );
	
	    var boatTour = document.createElement( 'img' );
	    boatTour.className = "giftImage";
	    boatTour.src = "../css/image/boat.png";
	    boatTour.onclick = function() {
	      this.displayBoatTour();
	    }.bind( this );
	
	    var hotels = document.createElement( 'img' );
	    hotels.className = "giftImage";
	    hotels.src = "../css/image/hotel.png";
	    hotels.onclick = function() {
	      this.displayHotels();
	    }.bind( this );
	
	    var drinks = document.createElement( 'img' );
	    drinks.className = "giftImage";
	    drinks.src = "../css/image/drink.png";
	    drinks.onclick = function() {
	      this.displayDrinks();
	    }.bind( this );
	
	    var food = document.createElement( 'img' );
	    food.className = "giftImage";
	    food.src = "../css/image/pineapple.png";
	    food.onclick = function() {
	      this.displayFood();
	    }.bind( this );
	
	    var br = document.createElement( 'br' );
	
	    listOne.appendChild( flights );
	    listOne.appendChild( lavaTour );
	    listOne.appendChild( boatTour );
	    listTwo.appendChild( hotels );
	    listTwo.appendChild( drinks );
	    listTwo.appendChild( food );
	
	    giftSpace.appendChild( title );
	    giftSpace.appendChild( dotsTwo );
	    giftSpace.appendChild( text );
	    giftSpace.appendChild( listOne );
	    giftSpace.appendChild( br );
	    giftSpace.appendChild( listTwo );
	  },
	
	  displayFlights: function() {
	    var view = new EnglishFlightsView();
	  },
	
	  displayHotels: function() {
	    var view = new EnglishHotelsView();
	  },
	
	  displayDrinks: function() {
	    var view = new EnglishDrinksView();
	  },
	
	  displayFood: function() {
	    var view = new EnglishFoodView();
	  },
	
	  displayBoatTour: function() {
	    var view = new EnglishBoatView();
	  },
	
	  displayLavaTour: function() {
	    var view = new EnglishLavaView();
	  }
	
	}
	
	module.exports = EnglishGiftView;

/***/ },
/* 7 */
/***/ function(module, exports) {

	var EnglishFlightsView = function() {
	  // this.url = "https://gift-database.herokuapp.com/gifts";
	  // this.url = "http://localhost:8080/gifts";
	  this.flightUrl = "http://localhost:1235/flights";
	
	  this.flightObject = [];
	  this.leave = 0;
	  this.returnFlight = 0;
	  this.bigIsland = 0;
	  this.maui = 0;
	  this.kauai = 0;
	
	  this.buyLeave = 0;
	  this.buyReturnFlight = 0;
	  this.buyBigIsland = 0;
	  this.buyMaui = 0;
	  this.buyKauai = 0;
	
	  this.total = 0;
	
	  this.getFlights();
	}
	
	EnglishFlightsView.prototype = {
	
	  getFlights: function() {
	
	    setInterval( function() {
	      if( this.flightObject.length === 0 ) {
	        this.displayLoading()
	      }
	    }.bind( this ), 10 );
	
	    var request = new XMLHttpRequest();
	    request.open( 'GET', this.flightUrl );
	    request.setRequestHeader("Content-Type", "application/json")
	
	    request.onload = () => {
	      if( request.status === 200 ) {
	        var flightObject = JSON.parse( request.responseText );
	        this.flightObject = flightObject;
	        for( var i = 0; i < flightObject.length; i++ ) {
	            if( this.flightObject[i].id === 1 ) {
	                this.leave = flightObject[i].leave;
	                this.returnFlight = flightObject[i].return;
	                this.bigIsland = flightObject[i].bigisland;
	                this.maui = flightObject[i].maui;
	                this.kauai = flightObject[i].kauai;
	            }
	        }
	        this.hideLoading();
	        this.displayFlights();
	      }
	    }
	    request.send( null );
	  },
	
	  updateFlights: function() {
	    var newLeave = this.leave - this.buyLeave;
	    var newReturn = this.returnFlight - this.buyReturnFlight;
	    var newBigIsland = this.bigIsland - this.buyBigIsland;
	    var newMaui = this.maui - this.buyMaui;
	    var newKauai = this.kauai - this.buyKauai;
	
	    var url = this.flightUrl + "/1";
	    var request = new XMLHttpRequest();
	    request.open( 'PUT', url );
	    request.setRequestHeader( "Content-type", "application/json" );
	    request.onload = () => {
	        console.log( "Loaded" );
	    }
	    var data = {
	      flight : {
	        leave: newLeave,
	        return: newReturn,
	        bigisland: newBigIsland,
	        maui: newMaui,
	        kauai: newKauai
	      }
	    }
	    request.send( JSON.stringify( data ));
	    console.log( data );
	  },
	
	
	  displayLoading: function() {
	    var giftSpace = document.getElementById( 'gift-space' );
	    giftSpace.style.display = "none";
	
	    var giftList = document.getElementById( "gift-list" );
	    giftList.innerText = "";
	    giftList.style.display = "block";
	
	    var img = document.createElement( 'img' );
	    img.src = "./css/image/loading.gif";
	    img.id = "loading";
	    giftList.appendChild( img );
	  },
	
	  hideLoading: function() {
	    var giftList = document.getElementById( 'gift-list' );
	    giftList.innerText = "";
	  },
	
	  displayFlights: function() {
	    var giftSpace = document.getElementById( 'gift-space' );
	    giftSpace.style.display = "none";
	
	    var giftList = document.getElementById( 'gift-list' );
	
	    while( giftList.hasChildNodes() ) {
	      giftList.removeChild( giftList.lastChild );
	    }
	
	    var title = document.createElement( 'h1' );
	    title.innerText = "Flights";
	    title.className = "circleTitle";
	
	    var dotsFour = document.createElement( 'p' );
	    dotsFour.innerText = "--------------------------------"
	
	    var text = document.createElement( 'h5' );
	    text.innerText = "These are the big ones. We've got a couple flights to get to Hawaii then another few internal flights. \n\n If you are worried we would might have to swim some of it click below."
	
	    var goButton = document.createElement( 'button' );
	    goButton.innerText = "Flights";
	    goButton.onclick = function() {
	      this.displayFlightPick();
	    }.bind( this );
	
	    var backButton = document.createElement( 'button' );
	    backButton.innerText = "Back";
	    backButton.onclick = function() {
	      this.displayGifts(); 
	    }.bind( this );
	
	    giftList.style.display = "block";
	
	    giftList.appendChild( title );
	    giftList.appendChild( dotsFour );
	    giftList.appendChild( text );
	    giftList.appendChild( goButton );
	    giftList.appendChild( backButton );
	  },
	
	  displayForm: function( towardsValue ) {
	    var giftSpace = document.getElementById( 'gift-space' );
	    giftSpace.style.display = "none";
	
	    var giftList = document.getElementById( 'gift-list' );
	    giftList.style.display = "none";
	
	    while( giftList.hasChildNodes() ) {
	      giftList.removeChild( giftList.lastChild );
	    }
	
	    giftList.style.display = "block";
	
	    var title = document.createElement( 'h1' );
	    title.className = "circleTitle";
	    title.innerText = "Thank You";
	
	    var dotsThree = document.createElement( 'p' );
	    dotsThree.innerText = "--------------------------------"
	
	    var name = document.createElement( 'input' );
	    name.placeholder = "Name...";
	
	    var email = document.createElement( 'input' );
	    email.placeholder = "Email...";
	
	    var message = document.createElement( 'input' );
	    message.placeholder = "Message";
	
	    var button = document.createElement( 'button' );
	    button.innerText = "Gift";
	
	    button.onclick = function() {
	      this.updateFlights();
	      var request = new XMLHttpRequest();
	      request.open( 'POST', this.flightUrl );
	      request.setRequestHeader("Content-Type", "application/json");
	      request.onload = () => {
	        this.displayThankYou();
	      }
	      var data = {
	        flight: {
	          name: name.value,
	          email: email.value,
	          total: this.total,
	          comment: message.value,
	          leave: this.buyLeave,
	          return: this.buyReturnFlight,
	          bigisland: this.buyBigIsland,
	          maui: this.buyMaui,
	          kauai: this.buyKauai,
	          currency: "£"
	        }
	      }
	      request.send( JSON.stringify( data ));
	    }.bind( this )
	
	    var backButton = document.createElement( 'button' );
	    backButton.innerText = "Back";
	    backButton.onclick = function() {
	      this.displayFlightPick();
	    }.bind( this );
	
	    var brOne = document.createElement( 'br' );
	    var brTwo = document.createElement( 'br' );
	    var brThree = document.createElement( 'br' );
	
	    giftList.appendChild( title );
	    giftList.appendChild( dotsThree );
	    giftList.appendChild( name );
	    giftList.appendChild( email );
	    giftList.appendChild( brOne );
	    giftList.appendChild( brTwo );
	    giftList.appendChild( message );
	    giftList.appendChild( brThree );
	    giftList.appendChild( button );
	    giftList.appendChild( backButton );
	  },
	
	  displayThankYou: function() {
	    var giftSpace = document.getElementById( 'gift-space' );
	    giftSpace.style.display = "none";
	
	    while( giftSpace.hasChildNodes() ) {
	      giftSpace.removeChild( giftSpace.lastChild );
	    }
	
	    var giftList = document.getElementById( 'gift-list' );
	    giftList.style.display = "none";
	
	    var thankYou = document.createElement( 'h1' );
	    thankYou.className = "circleTitle";
	    thankYou.innerText = "Thank you very much";
	    giftSpace.style.display = "block";
	
	    giftSpace.appendChild( thankYou );
	  },
	
	  displayFlightPick: function() {
	
	    var giftSpaced = document.getElementById( 'gift-space' );
	    giftSpaced.style.display = "none";
	
	    var giftSpace = document.getElementById( 'gift-list' );
	    giftSpace.style.display = "block";
	
	    while( giftSpace.hasChildNodes() ) {
	      giftSpace.removeChild( giftSpace.lastChild );
	    }
	
	    var flightTitle = document.createElement( 'h1' );
	    flightTitle.innerText = "Flights";
	    flightTitle.className = "circleTitleRaisedHigher";
	
	    // ##################################################
	
	    var flightListOne = document.createElement( 'ul' );
	    flightListOne.id = "flightListOne";
	
	    var leaveList = document.createElement( 'li' );
	
	    var leave = document.createElement( 'img' );
	    leave.src = "../css/image/plane.png";
	    leave.id = "leaveImg";
	    leave.className = "giftImage";
	
	    var cost = 100;
	
	    var leaveUnit = document.createElement( 'h5' );
	    leaveUnit.innerText = "£" + cost + "\nPer Unit";
	
	    var leaveAvail = document.createElement( 'h5' );
	    leaveAvail.innerText = "Available: " + this.leave + "/8";
	
	    var leaveSelectValue = document.createElement( 'h5' );
	
	    var leaveSelect = document.createElement( 'input' );
	    leaveSelect.type = "range";
	    leaveSelect.step = 1;
	    leaveSelect.min = 0;
	    leaveSelect.max = this.leave;
	    leaveSelect.value = 0;
	    leaveSelect.list = "steplist";
	
	    leaveSelect.onchange = function() {
	        leaveSelectValue.innerText = "Give " + leaveSelect.value + " Units";
	        this.buyLeave = leaveSelect.value;
	        this.total = cost * leaveSelect.value;
	    }.bind( this );
	
	    leaveSelectValue.innerText = "Give " + leaveSelect.value + " Units";
	
	    var leaveText = document.createElement( 'h5' );
	    leaveText.innerText = "Flight to Hawaii \n\n";
	
	    giftSpace.appendChild( flightListOne );
	
	    leaveList.appendChild( leave );
	    leaveList.appendChild( leaveText );
	    leaveList.appendChild( leaveUnit );
	    leaveList.appendChild( leaveAvail );
	    leaveList.appendChild( leaveSelect );
	    leaveList.appendChild( leaveSelectValue );
	
	    flightListOne.appendChild( leaveList );
	
	// ######################################################
	
	    var returnFlightList = document.createElement( 'li' );
	
	    var returnFlight = document.createElement( 'img' );
	    returnFlight.src = "../css/image/plane.png";
	    returnFlight.id = "returnFlightImg";
	    returnFlight.className = "giftImage";
	
	    var cost = 100
	    var returnFlightUnit = document.createElement( 'h5' );
	    returnFlightUnit.innerText = "£" + cost + "\n Per Unit";
	
	    var returnFlightAvail = document.createElement( 'h5' );
	    returnFlightAvail.innerText = "Available: " + this.returnFlight + "/8";
	
	    var returnFlightSelectValue = document.createElement( 'h5' );
	
	    var returnFlightSelect = document.createElement( 'input' );
	    returnFlightSelect.type = "range";
	    returnFlightSelect.step = 1;
	    returnFlightSelect.min = 0;
	    returnFlightSelect.max = this.returnFlight;
	    returnFlightSelect.value = 0;
	    returnFlightSelect.list = "steplist";
	
	    returnFlightSelect.onchange = function() {
	        returnFlightSelectValue.innerText = "Give " + returnFlightSelect.value + " Units";
	        this.buyReturnFlight = returnFlightSelect.value;
	        this.total = cost * returnFlightSelect.value;
	    }.bind( this );
	
	    returnFlightSelectValue.innerText = "Give " + returnFlightSelect.value + " Units";
	
	    var returnText = document.createElement( 'h5' );
	    returnText.innerText = "Flight back home";
	
	    giftSpace.appendChild( flightListOne );
	
	    returnFlightList.appendChild( returnFlight );
	    returnFlightList.appendChild( returnText );
	    returnFlightList.appendChild( returnFlightUnit );
	    returnFlightList.appendChild( returnFlightAvail );
	    returnFlightList.appendChild( returnFlightSelect );
	    returnFlightList.appendChild( returnFlightSelectValue );
	
	    // ##################################################
	
	    var bigIslandFlightList = document.createElement( 'li' );
	
	    var bigIslandFlight = document.createElement( 'img' );
	    bigIslandFlight.src = "../css/image/plane.png";
	    bigIslandFlight.id = "returnFlightImg";
	    bigIslandFlight.className = "giftImage";
	
	    var cost = 100;
	
	    var bigIslandFlightUnit = document.createElement( 'h5' );
	    bigIslandFlightUnit.innerText = "£" + cost + "\n Per Unit";
	
	    var bigIslandFlightAvail = document.createElement( 'h5' );
	    bigIslandFlightAvail.innerText = "Available: " + this.bigIsland + "/2";
	
	    var bigIslandFlightSelectValue = document.createElement( 'h5' );
	
	    var bigIslandFlightSelect = document.createElement( 'input' );
	    bigIslandFlightSelect.type = "range";
	    bigIslandFlightSelect.step = 1;
	    bigIslandFlightSelect.min = 0;
	    bigIslandFlightSelect.max = this.bigIsland;
	    bigIslandFlightSelect.value = 0;
	    bigIslandFlightSelect.list = "steplist";
	
	    bigIslandFlightSelect.onchange = function() {
	        bigIslandFlightSelectValue.innerText = "Give " + bigIslandFlightSelect.value + " Units";
	        this.buyBigIsland = bigIslandFlightSelect.value;
	        this.total = cost * bigIslandFlightSelect.value;
	    }.bind( this );
	
	    bigIslandFlightSelectValue.innerText = "Give " + bigIslandFlightSelect.value + " Units";
	
	    var bigIslandText = document.createElement( 'h5' );
	    bigIslandText.innerText = "Big Island to Maui";
	
	    bigIslandFlightList.appendChild( bigIslandFlight );
	    bigIslandFlightList.appendChild( bigIslandText );
	    bigIslandFlightList.appendChild( bigIslandFlightUnit );
	    bigIslandFlightList.appendChild( bigIslandFlightAvail );
	    bigIslandFlightList.appendChild( bigIslandFlightSelect );
	    bigIslandFlightList.appendChild( bigIslandFlightSelectValue );
	
	    flightListOne.appendChild( bigIslandFlightList );
	
	    // ##################################################
	
	    var flightListTwo = document.createElement( 'ul' );
	    flightListTwo.id = "flightListTwo";
	
	    var mauiFlightList = document.createElement( 'li' );
	
	    var mauiFlight = document.createElement( 'img' );
	    mauiFlight.src = "../css/image/plane.png";
	    mauiFlight.id = "returnFlightImg";
	    mauiFlight.className = "giftImage";
	
	    var cost = 100;
	
	    var mauiFlightUnit = document.createElement( 'h5' );
	    mauiFlightUnit.innerText = "£" + cost + "\nPer Unit";
	
	    var mauiFlightAvail = document.createElement( 'h5' );
	    mauiFlightAvail.innerText = "Available: " + this.maui + "/2";
	
	    var mauiFlightSelectValue = document.createElement( 'h5' );
	
	    var mauiFlightSelect = document.createElement( 'input' );
	    mauiFlightSelect.type = "range";
	    mauiFlightSelect.step = 1;
	    mauiFlightSelect.min = 0;
	    mauiFlightSelect.max = this.maui;
	    mauiFlightSelect.value = 0;
	    mauiFlightSelect.list = "steplist";
	
	    mauiFlightSelect.onchange = function() {
	        mauiFlightSelectValue.innerText = "Give " + mauiFlightSelect.value + " Units";
	        this.buyMaui = mauiFlightSelect.value;
	        this.total = cost * mauiFlightSelect.value;
	    }.bind( this );
	
	    mauiFlightSelectValue.innerText = "Give " + mauiFlightSelect.value + " Units";
	
	    var mauiText = document.createElement( 'h5' );
	    mauiText.innerText = "Maui to Kauai\n\n";
	
	    mauiFlightList.appendChild( mauiFlight );
	    mauiFlightList.appendChild( mauiText );
	    mauiFlightList.appendChild( mauiFlightUnit );
	    mauiFlightList.appendChild( mauiFlightAvail );
	    mauiFlightList.appendChild( mauiFlightSelect );
	    mauiFlightList.appendChild( mauiFlightSelectValue );
	
	    // ###################################################
	
	    var kauaiFlightList = document.createElement( 'li' );
	
	    var kauaiFlight = document.createElement( 'img' );
	    kauaiFlight.src = "../css/image/plane.png";
	    kauaiFlight.id = "returnFlightImg";
	    kauaiFlight.className = "giftImage";
	
	    var cost = 100;
	
	    var kauaiFlightUnit = document.createElement( 'h5' );
	    kauaiFlightUnit.innerText = "£" + cost + "\n Per Unit";
	
	    var kauaiFlightAvail = document.createElement( 'h5' );
	    kauaiFlightAvail.innerText = "Available: " + this.kauai + "/1";
	
	    var kauaiFlightSelectValue = document.createElement( 'h5' );
	
	    var kauaiFlightSelect = document.createElement( 'input' );
	    kauaiFlightSelect.type = "range";
	    kauaiFlightSelect.step = 1;
	    kauaiFlightSelect.min = 0;
	    kauaiFlightSelect.max = this.kauai;
	    kauaiFlightSelect.value = 0;
	    kauaiFlightSelect.list = "steplist";
	
	    kauaiFlightSelect.onchange = function() {
	        kauaiFlightSelectValue.innerText = "Give " + kauaiFlightSelect.value + " Units";
	        this.buyKauai = kauaiFlightSelect.value;
	        this.total = cost * kauaiFlightSelect.value;
	    }.bind( this );
	
	    kauaiFlightSelectValue.innerText = "Give " + kauaiFlightSelect.value + " Units";
	
	    var kauaiText = document.createElement( 'h5' );
	    kauaiText.innerText = "Kauai to Honolulu";
	
	    kauaiFlightList.appendChild( kauaiFlight );
	    kauaiFlightList.appendChild( kauaiText );
	    kauaiFlightList.appendChild( kauaiFlightUnit );
	    kauaiFlightList.appendChild( kauaiFlightAvail );
	    kauaiFlightList.appendChild( kauaiFlightSelect );
	    kauaiFlightList.appendChild( kauaiFlightSelectValue );
	
	    flightListOne.appendChild( kauaiFlightList );
	    flightListTwo.appendChild( mauiFlightList );
	    flightListTwo.appendChild( returnFlightList );
	
	    giftSpace.appendChild( flightListTwo );
	
	    giftSpace.style.display = "block";
	
	    // #############################################
	
	    var giveButton = document.createElement( 'button' );
	    var cancelButton = document.createElement( 'button' );
	
	    giveButton.innerText = "Gift...";
	    giveButton.onclick = function() {
	      this.displayForm();
	    }.bind( this );
	
	    cancelButton.innerText = "Back...";
	    cancelButton.onclick = function() {
	      this.displayGifts();
	    }.bind( this );
	
	    giftSpace.appendChild( giveButton );
	    giftSpace.appendChild( cancelButton );
	  },
	
	  displayGifts: function() {
	    var giftList = document.getElementById( 'gift-list' );
	    giftList.style.display = "none";
	
	    var giftSpace = document.getElementById( 'gift-space' );
	    giftSpace.style.display = "block";
	  }
	}
	
	module.exports = EnglishFlightsView;

/***/ },
/* 8 */
/***/ function(module, exports) {

	var EnglishHotelsView = function() {
	  this.hotelUrl = "http://localhost:1235/hotels";
	
	  this.hotelObject = [];
	  this.kona = 0;
	  this.volcano = 0;
	  this.maui = 0;
	  this.kauai = 0;
	  this.honolulu = 0;
	
	  this.buyKona = 0;
	  this.buyVolcano = 0;
	  this.buyMaui = 0;
	  this.buyKauai = 0;
	  this.buyHonolulu = 0;
	
	  this.total = 0;
	
	  this.getHotels();
	}
	
	EnglishHotelsView.prototype = {
	
	  getHotels: function() {
	    setInterval( function() {
	      if( this.hotelObject.length === 0 ) {
	        this.displayLoading()
	      }
	    }.bind( this ), 10 );
	
	    var request = new XMLHttpRequest();
	    request.open( 'GET', this.hotelUrl );
	    request.setRequestHeader("Content-Type", "application/json")
	
	    request.onload = () => {
	      if( request.status === 200 ) {
	        var hotelObject = JSON.parse( request.responseText );
	        this.hotelObject = hotelObject;
	        for( var i = 0; i < hotelObject.length; i++ ) {
	            if( this.hotelObject[i].id === 1 ) {
	                this.kona = hotelObject[i].kona;
	                this.volcano = hotelObject[i].volcano;
	                this.maui = hotelObject[i].maui;
	                this.kauai = hotelObject[i].kauai;
	                this.honolulu = hotelObject[i].honolulu;
	            }
	        }
	        this.hideLoading();
	        this.displayHotels();
	      }
	    }
	    request.send( null );
	  },
	
	  displayLoading: function() {
	    var giftSpace = document.getElementById( 'gift-space' );
	    giftSpace.style.display = "none";
	
	    var giftList = document.getElementById( "gift-list" );
	    giftList.innerText = "";
	    giftList.style.display = "block";
	
	    var img = document.createElement( 'img' );
	    img.src = "./css/image/loading.gif";
	    img.id = "loading";
	    giftList.appendChild( img );
	  },
	
	  hideLoading: function() {
	    var giftList = document.getElementById( 'gift-list' );
	    giftList.innerText = "";
	  },
	
	  updateHotels: function() {
	    var newKona = this.kona - this.buyKona;
	    var newVolcano = this.volcano - this.buyVolcano;
	    var newMaui = this.maui - this.buyMaui;
	    var newKauai = this.kauai - this.buyKauai;
	    var newHonolulu = this.honolulu - this.buyHonolulu;
	
	    var url = this.hotelUrl + "/1";
	    var request = new XMLHttpRequest();
	    request.open( 'PUT', url );
	    request.setRequestHeader( "Content-type", "application/json" );
	    request.onload = () => {
	        console.log( "Loaded" );
	    }
	    var data = {
	      hotel : {
	        kona: newKona,
	        volcano: newVolcano,
	        maui: newMaui,
	        kauai: newKauai,
	        honolulu: newHonolulu
	      }
	    }
	    request.send( JSON.stringify( data ));
	    console.log( data );
	  },
	
	  displayHotels: function() {
	    var giftSpace = document.getElementById( 'gift-space' );
	    giftSpace.style.display = "none";
	
	    var giftList = document.getElementById( 'gift-list' );
	
	    while( giftList.hasChildNodes() ) {
	      giftList.removeChild( giftList.lastChild );
	    }
	
	    var title = document.createElement( 'h1' );
	    title.innerText = "Hotels";
	    title.className = "circleTitle";
	
	    var dotsFour = document.createElement( 'p' );
	    dotsFour.innerText = "--------------------------------"
	
	    var text = document.createElement( 'h5' );
	    text.innerText = "Another big one. We're there for a while so having a bed to sleep on would come in very handy. \n\n If you'd like to help with these the give this a click."
	
	    var goButton = document.createElement( 'button' );
	    goButton.innerText = "Hotels";
	    goButton.onclick = function() {
	      this.displayHotelPick();
	    }.bind( this );
	
	    var backButton = document.createElement( 'button' );
	    backButton.innerText = "Back";
	    backButton.onclick = function() {
	      this.displayGifts() 
	    }.bind( this );
	
	    giftList.style.display = "block";
	
	    giftList.appendChild( title );
	    giftList.appendChild( dotsFour );
	    giftList.appendChild( text );
	    giftList.appendChild( goButton );
	    giftList.appendChild( backButton );
	  },
	
	  displayForm: function( towardsValue ) {
	    var giftSpace = document.getElementById( 'gift-space' );
	    giftSpace.style.display = "none";
	
	    var giftList = document.getElementById( 'gift-list' );
	    giftList.style.display = "none";
	
	    while( giftList.hasChildNodes() ) {
	      giftList.removeChild( giftList.lastChild );
	    }
	
	    giftList.style.display = "block";
	
	    var title = document.createElement( 'h1' );
	    title.className = "circleTitle";
	    title.innerText = "Thank You";
	
	    var dotsThree = document.createElement( 'p' );
	    dotsThree.innerText = "--------------------------------"
	
	    var name = document.createElement( 'input' );
	    name.placeholder = "Name...";
	
	    var email = document.createElement( 'input' );
	    email.placeholder = "Email...";
	
	    var message = document.createElement( 'input' );
	    message.placeholder = "Message";
	
	    var button = document.createElement( 'button' );
	    button.innerText = "Click";
	
	    button.onclick = function() {
	      this.updateHotels();
	      var request = new XMLHttpRequest();
	      request.open( 'POST', this.hotelUrl );
	      request.setRequestHeader("Content-Type", "application/json");
	      request.onload = () => {
	        this.displayThankYou();
	      }
	      var data = {
	        hotel: {
	          name: name.value,
	          email: email.value,
	          total: this.total,
	          comment: message.value,
	          kona: this.buyKona,
	          volcano: this.buyVolcano,
	          maui: this.buyMaui,
	          kauai: this.buyKauai,
	          honolulu: this.buyHonolulu,
	          currency: "£"
	        }
	      }
	      request.send( JSON.stringify( data ));
	    }.bind( this )
	
	    var backButton = document.createElement( 'button' );
	    backButton.innerText = "Back";
	    backButton.onclick = function() {
	      this.displayHotelPick();
	    }.bind( this );
	
	    var brOne = document.createElement( 'br' );
	    var brTwo = document.createElement( 'br' );
	    var brThree = document.createElement( 'br' );
	
	    giftList.appendChild( title );
	    giftList.appendChild( dotsThree );
	    giftList.appendChild( name );
	    giftList.appendChild( email );
	    giftList.appendChild( brOne );
	    giftList.appendChild( brTwo );
	    giftList.appendChild( message );
	    giftList.appendChild( brThree );
	    giftList.appendChild( button );
	    giftList.appendChild( backButton );
	  },
	
	  displayThankYou: function() {
	    var giftSpace = document.getElementById( 'gift-space' );
	    giftSpace.style.display = "none";
	
	    while( giftSpace.hasChildNodes() ) {
	      giftSpace.removeChild( giftSpace.lastChild );
	    }
	
	    var giftList = document.getElementById( 'gift-list' );
	    giftList.style.display = "none";
	
	    var thankYou = document.createElement( 'h1' );
	    thankYou.className = "circleTitle";
	    thankYou.innerText = "Thank you very much";
	    giftSpace.style.display = "block";
	
	    giftSpace.appendChild( thankYou );
	  },
	
	  displayHotelPick: function() {
	
	    var giftSpaced = document.getElementById( 'gift-space' );
	    giftSpaced.style.display = "none";
	
	    var giftSpace = document.getElementById( 'gift-list' );
	    giftSpace.style.display = "block";
	
	    while( giftSpace.hasChildNodes() ) {
	      giftSpace.removeChild( giftSpace.lastChild );
	    }
	
	    var hotelTitle = document.createElement( 'h1' );
	    hotelTitle.innerText = "Hotels";
	    hotelTitle.className = "circleTitleRaisedHigher";
	
	  // ###################################
	
	
	    var hotelListOne = document.createElement( 'ul' );
	    hotelListOne.id = "hotelListOne";
	
	    var konaList = document.createElement( 'li' );
	
	    var kona = document.createElement( 'img' );
	    kona.src = "../css/image/hotel.png";
	    kona.id = "konaImg";
	    kona.className = "giftImage";
	
	    var cost = 150;
	
	    var konaUnit = document.createElement( 'h5' );
	    konaUnit.innerText = "Unit Price: £" + cost;
	
	    var konaAvail = document.createElement( 'h5' );
	    konaAvail.innerText = "Available: " + this.kona + "/2";
	
	    var konaSelectValue = document.createElement( 'h5' );
	
	    var konaSelect = document.createElement( 'input' );
	    konaSelect.type = "range";
	    konaSelect.step = 1;
	    konaSelect.min = 0;
	    konaSelect.max = this.kona;
	    konaSelect.value = 0;
	    konaSelect.list = "steplist";
	
	    konaSelect.onchange = function() {
	        konaSelectValue.innerText = "Give " + konaSelect.value + " Units";
	        this.buyKona = konaSelect.value;
	        this.total = cost * konaSelect.value;
	    }.bind( this );
	
	    konaSelectValue.innerText = "Give " + konaSelect.value + " Units";
	
	    var konaText = document.createElement( 'h5' );
	    konaText.innerText = "Hotels in Kona";
	
	    giftSpace.appendChild( hotelListOne );
	
	    konaList.appendChild( kona );
	    konaList.appendChild( konaUnit );
	    konaList.appendChild( konaAvail );
	    konaList.appendChild( konaSelect );
	    konaList.appendChild( konaSelectValue );
	    konaList.appendChild( konaText );
	
	    hotelListOne.appendChild( konaList );
	
	    // ######################################################
	
	    var volcanoList = document.createElement( 'li' );
	
	    var volcano = document.createElement( 'img' );
	    volcano.src = "../css/image/hotel.png";
	    volcano.id = "volcanoImg";
	    volcano.className = "giftImage";
	
	    var cost = 120
	    var volcanoUnit = document.createElement( 'h5' );
	    volcanoUnit.innerText = "Unit Price: £" + cost;
	
	    var volcanoAvail = document.createElement( 'h5' );
	    volcanoAvail.innerText = "Available: " + this.volcano + "/3";
	
	    var volcanoSelectValue = document.createElement( 'h5' );
	
	    var volcanoSelect = document.createElement( 'input' );
	    volcanoSelect.type = "range";
	    volcanoSelect.step = 1;
	    volcanoSelect.min = 0;
	    volcanoSelect.max = this.volcano;
	    volcanoSelect.value = 0;
	    volcanoSelect.list = "steplist";
	
	    volcanoSelect.onchange = function() {
	        volcanoSelectValue.innerText = "Give " + volcanoSelect.value + " Units";
	        this.buyVolcano = volcanoSelect.value;
	        this.total = cost * volcanoSelect.value;
	    }.bind( this );
	
	    volcanoSelectValue.innerText = "Give " + volcanoSelect.value + " Units";
	
	    var returnText = document.createElement( 'h5' );
	    returnText.innerText = "Hotels in Volcano Park";
	
	    giftSpace.appendChild( hotelListOne );
	
	    volcanoList.appendChild( volcano );
	    volcanoList.appendChild( volcanoUnit );
	    volcanoList.appendChild( volcanoAvail );
	    volcanoList.appendChild( volcanoSelect );
	    volcanoList.appendChild( volcanoSelectValue );
	    volcanoList.appendChild( returnText );
	
	    hotelListOne.appendChild( volcanoList );
	
	    // ##################################################
	
	    var mauiFlightList = document.createElement( 'li' );
	
	    var mauiFlight = document.createElement( 'img' );
	    mauiFlight.src = "../css/image/hotel.png";
	    mauiFlight.id = "returnFlightImg";
	    mauiFlight.className = "giftImage";
	
	    var cost = 145;
	
	    var mauiFlightUnit = document.createElement( 'h5' );
	    mauiFlightUnit.innerText = "Unit Price: £" + cost;
	
	    var mauiFlightAvail = document.createElement( 'h5' );
	    mauiFlightAvail.innerText = "Available: " + this.maui + "/4";
	
	    var mauiFlightSelectValue = document.createElement( 'h5' );
	
	    var mauiFlightSelect = document.createElement( 'input' );
	    mauiFlightSelect.type = "range";
	    mauiFlightSelect.step = 1;
	    mauiFlightSelect.min = 0;
	    mauiFlightSelect.max = this.maui;
	    mauiFlightSelect.value = 0;
	    mauiFlightSelect.list = "steplist";
	
	    mauiFlightSelect.onchange = function() {
	        mauiFlightSelectValue.innerText = "Give " + mauiFlightSelect.value + " Units";
	        this.buyMaui = mauiFlightSelect.value;
	        this.total = cost * mauiFlightSelect.value;
	    }.bind( this );
	
	    mauiFlightSelectValue.innerText = "Give " + mauiFlightSelect.value + " Units";
	
	    var mauiText = document.createElement( 'h5' );
	    mauiText.innerText = "Hotels in Maui";
	
	    mauiFlightList.appendChild( mauiFlight );
	    mauiFlightList.appendChild( mauiFlightUnit );
	    mauiFlightList.appendChild( mauiFlightAvail );
	    mauiFlightList.appendChild( mauiFlightSelect );
	    mauiFlightList.appendChild( mauiFlightSelectValue );
	    mauiFlightList.appendChild( mauiText );
	
	    hotelListOne.appendChild( mauiFlightList );
	
	    // ##################################################
	
	    var hotelListTwo = document.createElement( 'ul' );
	    giftSpace.appendChild( hotelListTwo );
	
	    hotelListTwo.id = "hotelListTwo";
	
	    var kauaiFlightList = document.createElement( 'li' );
	
	    var kauaiFlight = document.createElement( 'img' );
	    kauaiFlight.src = "../css/image/plane.png";
	    kauaiFlight.id = "returnFlightImg";
	    kauaiFlight.className = "giftImage";
	
	    var cost = 150;
	
	    var kauaiFlightUnit = document.createElement( 'h5' );
	    kauaiFlightUnit.innerText = "Unit Price: £" + cost;
	
	    var kauaiFlightAvail = document.createElement( 'h5' );
	    kauaiFlightAvail.innerText = "Available: " + this.kauai + "/5";
	
	    var kauaiFlightSelectValue = document.createElement( 'h5' );
	
	    var kauaiFlightSelect = document.createElement( 'input' );
	    kauaiFlightSelect.type = "range";
	    kauaiFlightSelect.step = 1;
	    kauaiFlightSelect.min = 0;
	    kauaiFlightSelect.max = this.kauai;
	    kauaiFlightSelect.value = 0;
	    kauaiFlightSelect.list = "steplist";
	
	    kauaiFlightSelect.onchange = function() {
	        kauaiFlightSelectValue.innerText = "Give " + kauaiFlightSelect.value + " Units";
	        this.buyKauai = kauaiFlightSelect.value;
	        this.total = cost * kauaiFlightSelect.value;
	    }.bind( this );
	
	    kauaiFlightSelectValue.innerText = "Give " + kauaiFlightSelect.value + " Units";
	
	    var kauaiText = document.createElement( 'h5' );
	    kauaiText.innerText = "Hotels in Kauai";
	
	    kauaiFlightList.appendChild( kauaiFlight );
	    kauaiFlightList.appendChild( kauaiFlightUnit );
	    kauaiFlightList.appendChild( kauaiFlightAvail );
	    kauaiFlightList.appendChild( kauaiFlightSelect );
	    kauaiFlightList.appendChild( kauaiFlightSelectValue );
	    kauaiFlightList.appendChild( kauaiText );
	
	    hotelListTwo.appendChild( kauaiFlightList );
	
	
	      // ###################################################
	
	    var honoluluFlightList = document.createElement( 'li' );
	
	    var honoluluFlight = document.createElement( 'img' );
	    honoluluFlight.src = "../css/image/plane.png";
	    honoluluFlight.id = "returnFlightImg";
	    honoluluFlight.className = "giftImage";
	
	    var cost = 70;
	
	    var honoluluFlightUnit = document.createElement( 'h5' );
	    honoluluFlightUnit.innerText = "Unit Price: £" + cost;
	
	    var honoluluFlightAvail = document.createElement( 'h5' );
	    honoluluFlightAvail.innerText = "Available: " + this.honolulu + "/2";
	
	    var honoluluFlightSelectValue = document.createElement( 'h5' );
	
	    var honoluluFlightSelect = document.createElement( 'input' );
	    honoluluFlightSelect.type = "range";
	    honoluluFlightSelect.step = 1;
	    honoluluFlightSelect.min = 0;
	    honoluluFlightSelect.max = this.honolulu;
	    honoluluFlightSelect.value = 0;
	    honoluluFlightSelect.list = "steplist";
	
	    honoluluFlightSelect.onchange = function() {
	        honoluluFlightSelectValue.innerText = "Give " + honoluluFlightSelect.value + " Units";
	        this.buyHonolulu = honoluluFlightSelect.value;
	        this.total = cost * honoluluFlightSelect.value;
	    }.bind( this );
	
	    honoluluFlightSelectValue.innerText = "Give " + honoluluFlightSelect.value + " Units";
	
	    var honoluluText = document.createElement( 'h5' );
	    honoluluText.innerText = "Hotels in Honolulu";
	
	    honoluluFlightList.appendChild( honoluluFlight );
	    honoluluFlightList.appendChild( honoluluFlightUnit );
	    honoluluFlightList.appendChild( honoluluFlightAvail );
	    honoluluFlightList.appendChild( honoluluFlightSelect );
	    honoluluFlightList.appendChild( honoluluFlightSelectValue );
	    honoluluFlightList.appendChild( honoluluText );
	
	    hotelListTwo.appendChild( honoluluFlightList );
	    giftSpace.appendChild( hotelListTwo );
	
	    giftSpace.style.display = "block";
	
	    var giveButton = document.createElement( 'button' );
	    var cancelButton = document.createElement( 'button' );
	
	    giveButton.innerText = "Gift...";
	    giveButton.onclick = function() {
	      this.displayForm();
	    }.bind( this );
	
	    cancelButton.innerText = "Back...";
	    cancelButton.onclick = function() {
	      this.displayGifts();
	    }.bind( this );
	
	    giftSpace.appendChild( giveButton );
	    giftSpace.appendChild( cancelButton );
	  },
	
	  displayGifts: function() {
	    var giftList = document.getElementById( 'gift-list' );
	    giftList.style.display = "none";
	
	    var giftSpace = document.getElementById( 'gift-space' );
	    giftSpace.style.display = "block";
	  }
	}
	
	module.exports = EnglishHotelsView;

/***/ },
/* 9 */
/***/ function(module, exports) {

	var EnglishDrinksView = function() {
	
	  this.drinkUrl = "http://localhost:1235/drinks";
	
	  this.drinkObject = [];
	  this.drink = 0;
	
	  this.buyDrinks = 0;
	
	  this.total = 0;
	
	  this.getDrinks();
	}
	
	EnglishDrinksView.prototype = {
	
	  getDrinks: function() {
	    setInterval( function() {
	      if( this.drinkObject.length === 0 ) {
	        this.displayLoading()
	      }
	    }.bind( this ), 10 );
	
	    var request = new XMLHttpRequest();
	    request.open( 'GET', this.drinkUrl );
	    request.setRequestHeader("Content-Type", "application/json")
	
	    request.onload = () => {
	      if( request.status === 200 ) {
	        var drinkObject = JSON.parse( request.responseText );
	        this.drinkObject = drinkObject;
	        for( var i = 0; i < drinkObject.length; i++ ) {
	            if( this.drinkObject[i].id === 1 ) {
	                this.drink = drinkObject[i].drink;
	            }
	        }
	        this.hideLoading();
	        this.displayDrinks();
	      }
	    }
	    request.send( null );
	  },
	
	  displayLoading: function() {
	    var giftSpace = document.getElementById( 'gift-space' );
	    giftSpace.style.display = "none";
	
	    var giftList = document.getElementById( "gift-list" );
	    giftList.innerText = "";
	    giftList.style.display = "block";
	
	    var img = document.createElement( 'img' );
	    img.src = "./css/image/loading.gif";
	    img.id = "loading";
	    giftList.appendChild( img );
	  },
	
	  hideLoading: function() {
	    var giftList = document.getElementById( 'gift-list' );
	    giftList.innerText = "";
	  },
	
	  updateDrinks: function() {
	    var newDrink = this.drink + this.buyDrinks;
	
	    var url = this.drinkUrl + "/1";
	    var request = new XMLHttpRequest();
	    request.open( 'PUT', url );
	    request.setRequestHeader( "Content-type", "application/json" );
	    request.onload = () => {
	        // console.log( "Loaded" );
	    }
	    var data = {
	      drink : {
	        drink: newDrink
	      }
	    }
	    request.send( JSON.stringify( data ));
	    console.log( data );
	  },
	
	  displayDrinks: function() {
	    var giftSpace = document.getElementById( 'gift-space' );
	    giftSpace.style.display = "none";
	
	    var giftList = document.getElementById( 'gift-list' );
	
	    while( giftList.hasChildNodes() ) {
	      giftList.removeChild( giftList.lastChild );
	    }
	
	    var title = document.createElement( 'h1' );
	    title.innerText = "Drinks";
	    title.className = "circleTitle";
	
	    var dotsFour = document.createElement( 'p' );
	    dotsFour.innerText = "--------------------------------"
	
	    var text = document.createElement( 'h5' );
	    text.innerText = "For those of you who know Laura you'll be aware that relaxing on the beach is pretty important to her so any help to do it in style would be amazing. \n\n If you'd like to help with this then give this a click."
	
	    var goButton = document.createElement( 'button' );
	    goButton.innerText = "Drinks";
	    goButton.onclick = function() {
	      this.displayDrinkPick();
	    }.bind( this );
	
	    var backButton = document.createElement( 'button' );
	    backButton.innerText = "Back";
	    backButton.onclick = function() {
	      this.displayGifts() 
	    }.bind( this );
	
	    giftList.style.display = "block";
	
	    giftList.appendChild( title );
	    giftList.appendChild( dotsFour );
	    giftList.appendChild( text );
	    giftList.appendChild( goButton );
	    giftList.appendChild( backButton );
	  },
	
	  displayForm: function( towardsValue ) {
	    var giftSpace = document.getElementById( 'gift-space' );
	    giftSpace.style.display = "none";
	
	    var giftList = document.getElementById( 'gift-list' );
	    giftList.style.display = "none";
	
	    while( giftList.hasChildNodes() ) {
	      giftList.removeChild( giftList.lastChild );
	    }
	
	    giftList.style.display = "block";
	
	    var title = document.createElement( 'h1' );
	    title.className = "circleTitle";
	    title.innerText = "Thank You";
	
	    var dotsThree = document.createElement( 'p' );
	    dotsThree.innerText = "--------------------------------"
	
	    var name = document.createElement( 'input' );
	    name.placeholder = "Name...";
	
	    var email = document.createElement( 'input' );
	    email.placeholder = "Email...";
	
	    var message = document.createElement( 'input' );
	    message.placeholder = "Message";
	
	    var button = document.createElement( 'button' );
	    button.innerText = "Click";
	
	    button.onclick = function() {
	      this.updateDrinks();
	      var request = new XMLHttpRequest();
	      request.open( 'POST', this.drinkUrl );
	      request.setRequestHeader("Content-Type", "application/json");
	      request.onload = () => {
	        this.displayThankYou();
	      }
	      var data = {
	        drink: {
	          name: name.value,
	          email: email.value,
	          total: this.total,
	          comment: message.value,
	          drink: this.buyDrinks,
	          currency: "£"
	        }
	      }
	      request.send( JSON.stringify( data ));
	    }.bind( this )
	
	    var backButton = document.createElement( 'button' );
	    backButton.innerText = "Back";
	    backButton.onclick = function() {
	      this.displayDrinkPick();
	    }.bind( this );
	
	    var brOne = document.createElement( 'br' );
	    var brTwo = document.createElement( 'br' );
	    var brThree = document.createElement( 'br' );
	
	    giftList.appendChild( title );
	    giftList.appendChild( dotsThree );
	    giftList.appendChild( name );
	    giftList.appendChild( email );
	    giftList.appendChild( brOne );
	    giftList.appendChild( brTwo );
	    giftList.appendChild( message );
	    giftList.appendChild( brThree );
	    giftList.appendChild( button );
	    giftList.appendChild( backButton );
	  },
	
	  displayThankYou: function() {
	    var giftSpace = document.getElementById( 'gift-space' );
	    giftSpace.style.display = "none";
	
	    while( giftSpace.hasChildNodes() ) {
	      giftSpace.removeChild( giftSpace.lastChild );
	    }
	
	    var giftList = document.getElementById( 'gift-list' );
	    giftList.style.display = "none";
	
	    var thankYou = document.createElement( 'h1' );
	    thankYou.className = "circleTitle";
	    thankYou.innerText = "Thank you very much";
	    giftSpace.style.display = "block";
	
	    giftSpace.appendChild( thankYou );
	  },
	
	  displayDrinkPick: function() {
	
	    var giftSpaced = document.getElementById( 'gift-space' );
	    giftSpaced.style.display = "none";
	
	    var giftSpace = document.getElementById( 'gift-list' );
	    giftSpace.style.display = "block";
	
	    while( giftSpace.hasChildNodes() ) {
	      giftSpace.removeChild( giftSpace.lastChild );
	    }
	
	    var drinkTitle = document.createElement( 'h1' );
	    drinkTitle.innerText = "Drinks";
	    drinkTitle.className = "circleTitleRaisedHigher";
	
	    var drinkListOne = document.createElement( 'ul' );
	    drinkListOne.id = "drinkListOne";
	
	    var drinkList = document.createElement( 'li' );
	
	    var drink = document.createElement( 'img' );
	    drink.src = "../css/image/drink.png";
	    drink.id = "drinkImg";
	    drink.className = "giftImage";
	
	    var cost = 20;
	
	    var drinkUnit = document.createElement( 'h5' );
	    drinkUnit.innerText = "Unit Price: £" + cost;
	
	    var drinkAvail = document.createElement( 'h5' );
	    drinkAvail.innerText = "Available: " + String.fromCharCode( 8734 ) + "/" + String.fromCharCode( 8734 );
	
	    var drinkSelectValue = document.createElement( 'h5' );
	
	    var drinkSelect = document.createElement( 'input' );
	    drinkSelect.type = "range";
	    drinkSelect.step = 1;
	    drinkSelect.min = 0;
	    drinkSelect.max = 10;
	    drinkSelect.value = 0;
	    drinkSelect.list = "steplist";
	
	    drinkSelect.onchange = function() {
	        drinkSelectValue.innerText = "Give " + drinkSelect.value + " Units";
	        this.buyDrinks = drinkSelect.value;
	        this.total = cost * drinkSelect.value;
	    }.bind( this );
	
	    drinkSelectValue.innerText = "Give " + drinkSelect.value + " Units";
	
	    var drinkText = document.createElement( 'h5' );
	    drinkText.innerText = "Drinks on the Beach";
	
	    giftSpace.appendChild( drinkListOne );
	
	    drinkList.appendChild( drink );
	    drinkList.appendChild( drinkUnit );
	    drinkList.appendChild( drinkAvail );
	    drinkList.appendChild( drinkSelect );
	    drinkList.appendChild( drinkSelectValue );
	    drinkList.appendChild( drinkText );
	
	    drinkListOne.appendChild( drinkList );
	    giftSpace.appendChild( drinkListOne );
	
	    giftSpace.style.display = "block";
	
	    var giveButton = document.createElement( 'button' );
	    var cancelButton = document.createElement( 'button' );
	
	    giveButton.innerText = "Gift...";
	    giveButton.onclick = function() {
	      this.displayForm();
	    }.bind( this );
	
	    cancelButton.innerText = "Back...";
	    cancelButton.onclick = function() {
	      this.displayGifts();
	    }.bind( this );
	
	    giftSpace.appendChild( giveButton );
	    giftSpace.appendChild( cancelButton ); 
	  },
	
	  displayGifts: function() {
	    var giftList = document.getElementById( 'gift-list' );
	    giftList.style.display = "none";
	
	    var giftSpace = document.getElementById( 'gift-space' );
	    giftSpace.style.display = "block";
	  }  
	}
	
	module.exports = EnglishDrinksView;

/***/ },
/* 10 */
/***/ function(module, exports) {

	var EnglishFoodView = function() {
	
	  this.foodUrl = "http://localhost:1235/foods";
	
	  this.foodObject = [];
	  this.food = 0;
	
	  this.buyFoods = 0;
	
	  this.total = 0;
	
	  this.getFoods();
	}
	
	EnglishFoodView.prototype = {
	
	  getFoods: function() {
	    setInterval( function() {
	      if( this.foodObject.length === 0 ) {
	        this.displayLoading()
	      }
	    }.bind( this ), 10 );
	
	    var request = new XMLHttpRequest();
	    request.open( 'GET', this.foodUrl );
	    request.setRequestHeader("Content-Type", "application/json")
	
	    request.onload = () => {
	      if( request.status === 200 ) {
	        var foodObject = JSON.parse( request.responseText );
	        this.foodObject = foodObject;
	        for( var i = 0; i < foodObject.length; i++ ) {
	            if( this.foodObject[i].id === 1 ) {
	                this.food = foodObject[i].food;
	            }
	        }
	        this.hideLoading();
	        this.displayFoods();
	      }
	    }
	    request.send( null );
	  },
	
	  displayLoading: function() {
	    var giftSpace = document.getElementById( 'gift-space' );
	    giftSpace.style.display = "none";
	
	    var giftList = document.getElementById( "gift-list" );
	    giftList.innerText = "";
	    giftList.style.display = "block";
	
	    var img = document.createElement( 'img' );
	    img.src = "./css/image/loading.gif";
	    img.id = "loading";
	    giftList.appendChild( img );
	  },
	
	  hideLoading: function() {
	    var giftList = document.getElementById( 'gift-list' );
	    giftList.innerText = "";
	  },
	
	  updateFoods: function() {
	    var newFood = this.food + this.buyFoods;
	
	    var url = this.foodUrl + "/1";
	    var request = new XMLHttpRequest();
	    request.open( 'PUT', url );
	    request.setRequestHeader( "Content-type", "application/json" );
	    request.onload = () => {
	        console.log( "Loaded" );
	    }
	    var data = {
	      food : {
	        food: newFood
	      }
	    }
	    request.send( JSON.stringify( data ));
	    console.log( data );
	  },
	
	  displayFoods: function() {
	    var giftSpace = document.getElementById( 'gift-space' );
	    giftSpace.style.display = "none";
	
	    var giftList = document.getElementById( 'gift-list' );
	
	    while( giftList.hasChildNodes() ) {
	      giftList.removeChild( giftList.lastChild );
	    }
	
	    var title = document.createElement( 'h1' );
	    title.innerText = "Foods";
	    title.className = "circleTitle";
	
	    var dotsFour = document.createElement( 'p' );
	    dotsFour.innerText = "--------------------------------"
	
	    var text = document.createElement( 'h5' );
	    text.innerText = "What would be the point in travelling half way around the world without sampling as much delicious food as possible? \n\n If you'd like to help with this then give this a click."
	
	    var goButton = document.createElement( 'button' );
	    goButton.innerText = "Food";
	    goButton.onclick = function() {
	      this.displayFoodPick();
	    }.bind( this );
	
	    var backButton = document.createElement( 'button' );
	    backButton.innerText = "Back";
	    backButton.onclick = function() {
	      this.displayGifts() 
	    }.bind( this );
	
	    giftList.style.display = "block";
	
	    giftList.appendChild( title );
	    giftList.appendChild( dotsFour );
	    giftList.appendChild( text );
	    giftList.appendChild( goButton );
	    giftList.appendChild( backButton );
	  },
	
	  displayForm: function( towardsValue ) {
	    var giftSpace = document.getElementById( 'gift-space' );
	    giftSpace.style.display = "none";
	
	    var giftList = document.getElementById( 'gift-list' );
	    giftList.style.display = "none";
	
	    while( giftList.hasChildNodes() ) {
	      giftList.removeChild( giftList.lastChild );
	    }
	
	    giftList.style.display = "block";
	
	    var title = document.createElement( 'h1' );
	    title.className = "circleTitle";
	    title.innerText = "Thank You";
	
	    var dotsThree = document.createElement( 'p' );
	    dotsThree.innerText = "--------------------------------"
	
	    var name = document.createElement( 'input' );
	    name.placeholder = "Name...";
	
	    var email = document.createElement( 'input' );
	    email.placeholder = "Email...";
	
	    var message = document.createElement( 'input' );
	    message.placeholder = "Message...";
	
	    var button = document.createElement( 'button' );
	    button.innerText = "Click";
	
	    button.onclick = function() {
	      this.updateFoods();
	      var request = new XMLHttpRequest();
	      request.open( 'POST', this.foodUrl );
	      request.setRequestHeader("Content-Type", "application/json");
	      request.onload = () => {
	        this.displayThankYou();
	      }
	      var data = {
	        food: {
	          name: name.value,
	          email: email.value,
	          total: this.total,
	          comment: message.value,
	          food: this.buyFoods,
	          currency: "£"
	        }
	      }
	      request.send( JSON.stringify( data ));
	    }.bind( this )
	
	    var backButton = document.createElement( 'button' );
	    backButton.innerText = "Back";
	    backButton.onclick = function() {
	      this.displayFoodPick();
	    }.bind( this );
	
	    var brOne = document.createElement( 'br' );
	    var brTwo = document.createElement( 'br' );
	    var brThree = document.createElement( 'br' );
	
	    giftList.appendChild( title );
	    giftList.appendChild( dotsThree );
	    giftList.appendChild( name );
	    giftList.appendChild( email );
	    giftList.appendChild( brOne );
	    giftList.appendChild( brTwo );
	    giftList.appendChild( message );
	    giftList.appendChild( brThree );
	    giftList.appendChild( button );
	    giftList.appendChild( backButton );
	  },
	
	  displayThankYou: function() {
	    var giftSpace = document.getElementById( 'gift-space' );
	    giftSpace.style.display = "none";
	
	    while( giftSpace.hasChildNodes() ) {
	      giftSpace.removeChild( giftSpace.lastChild );
	    }
	
	    var giftList = document.getElementById( 'gift-list' );
	    giftList.style.display = "none";
	
	    var thankYou = document.createElement( 'h1' );
	    thankYou.className = "circleTitle";
	    thankYou.innerText = "Thank you very much";
	    giftSpace.style.display = "block";
	
	    giftSpace.appendChild( thankYou );
	  },
	
	  displayFoodPick: function() {
	
	    var giftSpaced = document.getElementById( 'gift-space' );
	    giftSpaced.style.display = "none";
	
	    var giftSpace = document.getElementById( 'gift-list' );
	    giftSpace.style.display = "block";
	
	    while( giftSpace.hasChildNodes() ) {
	      giftSpace.removeChild( giftSpace.lastChild );
	    }
	
	    var foodTitle = document.createElement( 'h1' );
	    foodTitle.innerText = "Foods";
	    foodTitle.className = "circleTitleRaisedHigher";
	
	    var foodListOne = document.createElement( 'ul' );
	    foodListOne.id = "foodListOne";
	
	    var foodList = document.createElement( 'li' );
	
	    var food = document.createElement( 'img' );
	    food.src = "../css/image/pineapple.png";
	    food.id = "foodImg";
	    food.className = "giftImage";
	
	    var cost = 50;
	
	    var foodUnit = document.createElement( 'h5' );
	    foodUnit.innerText = "Unit Price: £" + cost;
	
	    var foodAvail = document.createElement( 'h5' );
	    foodAvail.innerText = "Available: " + String.fromCharCode( 8734 ) + "/" + String.fromCharCode( 8734 );
	
	    var foodSelectValue = document.createElement( 'h5' );
	
	    var foodSelect = document.createElement( 'input' );
	    foodSelect.type = "range";
	    foodSelect.step = 1;
	    foodSelect.min = 0;
	    foodSelect.max = 10;
	    foodSelect.value = 0;
	    foodSelect.list = "steplist";
	
	    foodSelect.onchange = function() {
	        foodSelectValue.innerText = "Give " + foodSelect.value + " Units";
	        this.buyFoods = foodSelect.value;
	        this.total = cost * foodSelect.value;
	    }.bind( this );
	
	    foodSelectValue.innerText = "Give " + foodSelect.value + " Units";
	
	    var foodText = document.createElement( 'h5' );
	    foodText.innerText = "Food on the Beach";
	
	    giftSpace.appendChild( foodListOne );
	
	    foodList.appendChild( food );
	    foodList.appendChild( foodUnit );
	    foodList.appendChild( foodAvail );
	    foodList.appendChild( foodSelect );
	    foodList.appendChild( foodSelectValue );
	    foodList.appendChild( foodText );
	
	    foodListOne.appendChild( foodList );
	    giftSpace.appendChild( foodListOne );
	
	    giftSpace.style.display = "block";
	
	    var giveButton = document.createElement( 'button' );
	    var cancelButton = document.createElement( 'button' );
	
	    giveButton.innerText = "Gift...";
	    giveButton.onclick = function() {
	      this.displayForm();
	    }.bind( this );
	
	    cancelButton.innerText = "Back...";
	    cancelButton.onclick = function() {
	      this.displayGifts();
	    }.bind( this );
	
	    giftSpace.appendChild( giveButton );
	    giftSpace.appendChild( cancelButton ); 
	  },
	
	  displayGifts: function() {
	    var giftList = document.getElementById( 'gift-list' );
	    giftList.style.display = "none";
	
	    var giftSpace = document.getElementById( 'gift-space' );
	    giftSpace.style.display = "block";
	  }  
	}
	
	module.exports = EnglishFoodView;

/***/ },
/* 11 */
/***/ function(module, exports) {

	var EnglishBoatView = function() {
	
	  this.boatUrl = "http://localhost:1235/boats";
	
	  this.boatObject = [];
	  this.boat = 0;
	
	  this.buyBoats = 0;
	
	  this.total = 0;
	
	  this.getBoats();
	}
	
	EnglishBoatView.prototype = {
	
	  getBoats: function() {
	    setInterval( function() {
	      if( this.boatObject.length === 0 ) {
	        this.displayLoading()
	      }
	    }.bind( this ), 10 );
	
	    var request = new XMLHttpRequest();
	    request.open( 'GET', this.boatUrl );
	    request.setRequestHeader("Content-Type", "application/json")
	
	    request.onload = () => {
	      if( request.status === 200 ) {
	        var boatObject = JSON.parse( request.responseText );
	        this.boatObject = boatObject;
	        for( var i = 0; i < boatObject.length; i++ ) {
	            if( this.boatObject[i].id === 1 ) {
	                this.boat = boatObject[i].boat;
	            }
	        }
	        this.hideLoading();
	        this.displayBoats();
	      }
	    }
	    request.send( null );
	  },
	
	  displayLoading: function() {
	    var giftSpace = document.getElementById( 'gift-space' );
	    giftSpace.style.display = "none";
	
	    var giftList = document.getElementById( "gift-list" );
	    giftList.innerText = "";
	    giftList.style.display = "block";
	
	    var img = document.createElement( 'img' );
	    img.src = "./css/image/loading.gif";
	    img.id = "loading";
	    giftList.appendChild( img );
	  },
	
	  hideLoading: function() {
	    var giftList = document.getElementById( 'gift-list' );
	    giftList.innerText = "";
	  },
	
	  updateBoats: function() {
	    // var newBoat = 1;
	    var newBoat = this.boat -= this.buyBoats;
	
	    var url = this.boatUrl + "/1";
	    var request = new XMLHttpRequest();
	    request.open( 'PUT', url );
	    request.setRequestHeader( "Content-type", "application/json" );
	    request.onload = () => {
	        // console.log( "Loaded" );
	    }
	    var data = {
	      boat : {
	        boat: newBoat
	      }
	    }
	    request.send( JSON.stringify( data ));
	    console.log( data );
	  },
	
	  displayBoats: function() {
	    var giftSpace = document.getElementById( 'gift-space' );
	    giftSpace.style.display = "none";
	
	    var giftList = document.getElementById( 'gift-list' );
	
	    while( giftList.hasChildNodes() ) {
	      giftList.removeChild( giftList.lastChild );
	    }
	
	    var title = document.createElement( 'h1' );
	    title.innerText = "Boat Tour";
	    title.className = "circleTitle";
	
	    var dotsFour = document.createElement( 'p' );
	    dotsFour.innerText = "--------------------------------"
	
	    var text = document.createElement( 'h5' );
	    text.innerText = "Another of the main attractions we would love to get to is a boat tour of the Napali Coast. \n\n If you'd like to help with this then give this a click."
	
	    var goButton = document.createElement( 'button' );
	    goButton.innerText = "Boat Tour";
	    goButton.onclick = function() {
	      this.displayBoatPick();
	    }.bind( this );
	
	    var backButton = document.createElement( 'button' );
	    backButton.innerText = "Back";
	    backButton.onclick = function() {
	      this.displayGifts() 
	    }.bind( this );
	
	    giftList.style.display = "block";
	
	    giftList.appendChild( title );
	    giftList.appendChild( dotsFour );
	    giftList.appendChild( text );
	    giftList.appendChild( goButton );
	    giftList.appendChild( backButton );
	  },
	
	  displayForm: function( towardsValue ) {
	    var giftSpace = document.getElementById( 'gift-space' );
	    giftSpace.style.display = "none";
	
	    var giftList = document.getElementById( 'gift-list' );
	    giftList.style.display = "none";
	
	    while( giftList.hasChildNodes() ) {
	      giftList.removeChild( giftList.lastChild );
	    }
	
	    giftList.style.display = "block";
	
	    var title = document.createElement( 'h1' );
	    title.className = "circleTitle";
	    title.innerText = "Thank You";
	
	    var dotsThree = document.createElement( 'p' );
	    dotsThree.innerText = "--------------------------------"
	
	    var name = document.createElement( 'input' );
	    name.placeholder = "Name...";
	
	    var email = document.createElement( 'input' );
	    email.placeholder = "Email...";
	
	    var message = document.createElement( 'input' );
	    message.placeholder = "Message";
	
	    var button = document.createElement( 'button' );
	    button.innerText = "Click";
	
	    button.onclick = function() {
	      this.updateBoats();
	      var request = new XMLHttpRequest();
	      request.open( 'POST', this.boatUrl );
	      request.setRequestHeader("Content-Type", "application/json");
	      request.onload = () => {
	        this.displayThankYou();
	      }
	      var data = {
	        boat: {
	          name: name.value,
	          email: email.value,
	          total: this.total,
	          comment: message.value,
	          boat: this.buyBoats,
	          currency: "£"
	        }
	      }
	      request.send( JSON.stringify( data ));
	    }.bind( this )
	
	    var backButton = document.createElement( 'button' );
	    backButton.innerText = "Back";
	    backButton.onclick = function() {
	      this.displayBoatPick();
	    }.bind( this );
	
	    var brOne = document.createElement( 'br' );
	    var brTwo = document.createElement( 'br' );
	    var brThree = document.createElement( 'br' );
	
	    giftList.appendChild( title );
	    giftList.appendChild( dotsThree );
	    giftList.appendChild( name );
	    giftList.appendChild( email );
	    giftList.appendChild( brOne );
	    giftList.appendChild( brTwo );
	    giftList.appendChild( message );
	    giftList.appendChild( brThree );
	    giftList.appendChild( button );
	    giftList.appendChild( backButton );
	  },
	
	  displayThankYou: function() {
	    var giftSpace = document.getElementById( 'gift-space' );
	    giftSpace.style.display = "none";
	
	    while( giftSpace.hasChildNodes() ) {
	      giftSpace.removeChild( giftSpace.lastChild );
	    }
	
	    var giftList = document.getElementById( 'gift-list' );
	    giftList.style.display = "none";
	
	    var thankYou = document.createElement( 'h1' );
	    thankYou.className = "circleTitle";
	    thankYou.innerText = "Thank you very much";
	    giftSpace.style.display = "block";
	
	    giftSpace.appendChild( thankYou );
	  },
	
	  displayBoatPick: function() {
	
	    var giftSpaced = document.getElementById( 'gift-space' );
	    giftSpaced.style.display = "none";
	
	    var giftSpace = document.getElementById( 'gift-list' );
	    giftSpace.style.display = "block";
	
	    while( giftSpace.hasChildNodes() ) {
	      giftSpace.removeChild( giftSpace.lastChild );
	    }
	
	    var boatTitle = document.createElement( 'h1' );
	    boatTitle.innerText = "Boats";
	    boatTitle.className = "circleTitleRaisedHigher";
	
	    var boatListOne = document.createElement( 'ul' );
	    boatListOne.id = "boatListOne";
	
	    var boatList = document.createElement( 'li' );
	
	    var boat = document.createElement( 'img' );
	    boat.src = "../css/image/boat.png";
	    boat.id = "boatImg";
	    boat.className = "giftImage";
	
	    var cost = 100;
	
	    var boatUnit = document.createElement( 'h5' );
	    boatUnit.innerText = "Unit Price: £" + cost;
	
	    var boatAvail = document.createElement( 'h5' );
	    boatAvail.innerText = "Available: " + this.boat + "/1";
	
	    var boatSelectValue = document.createElement( 'h5' );
	
	    var boatSelect = document.createElement( 'input' );
	    boatSelect.type = "range";
	    boatSelect.step = 1;
	    boatSelect.min = 0;
	    boatSelect.max = this.boat;
	    boatSelect.value = 0;
	    boatSelect.list = "steplist";
	
	    boatSelect.onchange = function() {
	        boatSelectValue.innerText = "Give " + boatSelect.value + " Units";
	        this.buyBoats = boatSelect.value;
	        this.total = cost * boatSelect.value;
	    }.bind( this );
	
	    boatSelectValue.innerText = "Give " + boatSelect.value + " Units";
	
	    var boatText = document.createElement( 'h5' );
	    boatText.innerText = "Boat tour of Napali Bay";
	
	    giftSpace.appendChild( boatListOne );
	
	    boatList.appendChild( boat );
	    boatList.appendChild( boatUnit );
	    boatList.appendChild( boatAvail );
	    boatList.appendChild( boatSelect );
	    boatList.appendChild( boatSelectValue );
	    boatList.appendChild( boatText );
	
	    boatListOne.appendChild( boatList );
	    giftSpace.appendChild( boatListOne );
	
	    giftSpace.style.display = "block";
	
	    var giveButton = document.createElement( 'button' );
	    var cancelButton = document.createElement( 'button' );
	
	    giveButton.innerText = "Give...";
	    giveButton.onclick = function() {
	      this.displayForm();
	    }.bind( this );
	
	    cancelButton.innerText = "Back...";
	    cancelButton.onclick = function() {
	      this.displayGifts();
	    }.bind( this );
	
	    giftSpace.appendChild( giveButton );
	    giftSpace.appendChild( cancelButton ); 
	  },
	
	  displayGifts: function() {
	    var giftList = document.getElementById( 'gift-list' );
	    giftList.style.display = "none";
	
	    var giftSpace = document.getElementById( 'gift-space' );
	    giftSpace.style.display = "block";
	  }  
	}
	
	module.exports = EnglishBoatView;

/***/ },
/* 12 */
/***/ function(module, exports) {

	var EnglishLavaView = function() {
	
	  this.lavaUrl = "http://localhost:1235/lavas";
	
	  this.lavaObject = [];
	  this.lava = 0;
	
	  this.buyLavas = 0;
	
	  this.total = 0;
	
	  this.getLavas();
	}
	
	EnglishLavaView.prototype = {
	
	  getLavas: function() {
	    setInterval( function() {
	      if( this.lavaObject.length === 0 ) {
	        this.displayLoading()
	      }
	    }.bind( this ), 10 );
	
	    var request = new XMLHttpRequest();
	    request.open( 'GET', this.lavaUrl );
	    request.setRequestHeader("Content-Type", "application/json")
	
	    request.onload = () => {
	      if( request.status === 200 ) {
	        var lavaObject = JSON.parse( request.responseText );
	        this.lavaObject = lavaObject;
	        for( var i = 0; i < lavaObject.length; i++ ) {
	            if( this.lavaObject[i].id === 1 ) {
	                this.lava = lavaObject[i].lava;
	            }
	        }
	        this.hideLoading();
	        this.displayLavas();
	      }
	    }
	    request.send( null );
	  },
	
	  displayLoading: function() {
	    var giftSpace = document.getElementById( 'gift-space' );
	    giftSpace.style.display = "none";
	
	    var giftList = document.getElementById( "gift-list" );
	    giftList.innerText = "";
	    giftList.style.display = "block";
	
	    var img = document.createElement( 'img' );
	    img.src = "./css/image/loading.gif";
	    img.id = "loading";
	    giftList.appendChild( img );
	  },
	
	  hideLoading: function() {
	    var giftList = document.getElementById( 'gift-list' );
	    giftList.innerText = "";
	  },
	
	  updateLavas: function() {
	    // var newLava = 1;
	    var newLava = this.lava -= this.buyLavas;
	
	    var url = this.lavaUrl + "/1";
	    var request = new XMLHttpRequest();
	    request.open( 'PUT', url );
	    request.setRequestHeader( "Content-type", "application/json" );
	    request.onload = () => {
	        // console.log( "Loaded" );
	        // console.log( newLava );
	    }
	    var data = {
	      lava : {
	        lava: newLava
	      }
	    }
	    request.send( JSON.stringify( data ));
	    console.log( data );
	  },
	
	  displayLavas: function() {
	    var giftSpace = document.getElementById( 'gift-space' );
	    giftSpace.style.display = "none";
	
	    var giftList = document.getElementById( 'gift-list' );
	
	    while( giftList.hasChildNodes() ) {
	      giftList.removeChild( giftList.lastChild );
	    }
	
	    var title = document.createElement( 'h1' );
	    title.innerText = "Lava Tour";
	    title.className = "circleTitle";
	
	    var dotsFour = document.createElement( 'p' );
	    dotsFour.innerText = "--------------------------------"
	
	    var text = document.createElement( 'h5' );
	    text.innerText = "One of the sights we are hoping to get to is a tour of the volcanos. \n\n If you'd like to help with this then give this a click."
	
	    var goButton = document.createElement( 'button' );
	    goButton.innerText = "Lava Tour";
	    goButton.onclick = function() {
	      this.displayLavaPick();
	    }.bind( this );
	
	    var backButton = document.createElement( 'button' );
	    backButton.innerText = "Back";
	    backButton.onclick = function() {
	      this.displayGifts() 
	    }.bind( this );
	
	    giftList.style.display = "block";
	
	    giftList.appendChild( title );
	    giftList.appendChild( dotsFour );
	    giftList.appendChild( text );
	    giftList.appendChild( goButton );
	    giftList.appendChild( backButton );
	  },
	
	  displayForm: function( towardsValue ) {
	    var giftSpace = document.getElementById( 'gift-space' );
	    giftSpace.style.display = "none";
	
	    var giftList = document.getElementById( 'gift-list' );
	    giftList.style.display = "none";
	
	    while( giftList.hasChildNodes() ) {
	      giftList.removeChild( giftList.lastChild );
	    }
	
	    giftList.style.display = "block";
	
	    var title = document.createElement( 'h1' );
	    title.className = "circleTitle";
	    title.innerText = "Thank You";
	
	    var dotsThree = document.createElement( 'p' );
	    dotsThree.innerText = "--------------------------------"
	
	    var name = document.createElement( 'input' );
	    name.placeholder = "Name...";
	
	    var email = document.createElement( 'input' );
	    email.placeholder = "Email...";
	
	    var message = document.createElement( 'input' );
	    message.placeholder = "Message";
	
	    var button = document.createElement( 'button' );
	    button.innerText = "Click";
	
	    button.onclick = function() {
	      this.updateLavas();
	      var request = new XMLHttpRequest();
	      request.open( 'POST', this.lavaUrl );
	      request.setRequestHeader("Content-Type", "application/json");
	      request.onload = () => {
	        this.displayThankYou();
	      }
	      var data = {
	        lava: {
	          name: name.value,
	          email: email.value,
	          total: this.total,
	          comment: message.value,
	          lava: this.buyLavas,
	          currency: "£"
	        }
	      }
	      request.send( JSON.stringify( data ));
	    }.bind( this )
	
	    var backButton = document.createElement( 'button' );
	    backButton.innerText = "Back";
	    backButton.onclick = function() {
	      this.displayLavaPick();
	    }.bind( this );
	
	    var brOne = document.createElement( 'br' );
	    var brTwo = document.createElement( 'br' );
	    var brThree = document.createElement( 'br' );
	
	    giftList.appendChild( title );
	    giftList.appendChild( dotsThree );
	    giftList.appendChild( name );
	    giftList.appendChild( email );
	    giftList.appendChild( brOne );
	    giftList.appendChild( brTwo );
	    giftList.appendChild( message );
	    giftList.appendChild( brThree );
	    giftList.appendChild( button );
	    giftList.appendChild( backButton );
	  },
	
	  displayThankYou: function() {
	    var giftSpace = document.getElementById( 'gift-space' );
	    giftSpace.style.display = "none";
	
	    while( giftSpace.hasChildNodes() ) {
	      giftSpace.removeChild( giftSpace.lastChild );
	    }
	
	    var giftList = document.getElementById( 'gift-list' );
	    giftList.style.display = "none";
	
	    var thankYou = document.createElement( 'h1' );
	    thankYou.className = "circleTitle";
	    thankYou.innerText = "Thank you very much";
	    giftSpace.style.display = "block";
	
	    giftSpace.appendChild( thankYou );
	  },
	
	  displayLavaPick: function() {
	
	    var giftSpaced = document.getElementById( 'gift-space' );
	    giftSpaced.style.display = "none";
	
	    var giftSpace = document.getElementById( 'gift-list' );
	    giftSpace.style.display = "block";
	
	    while( giftSpace.hasChildNodes() ) {
	      giftSpace.removeChild( giftSpace.lastChild );
	    }
	
	    var lavaTitle = document.createElement( 'h1' );
	    lavaTitle.innerText = "Lavas";
	    lavaTitle.className = "circleTitleRaisedHigher";
	
	    var lavaListOne = document.createElement( 'ul' );
	    lavaListOne.id = "lavaListOne";
	
	    var lavaList = document.createElement( 'li' );
	
	    var lava = document.createElement( 'img' );
	    lava.src = "../css/image/volcano.png";
	    lava.id = "lavaImg";
	    lava.className = "giftImage";
	
	    var cost = 250;
	
	    var lavaUnit = document.createElement( 'h5' );
	    lavaUnit.innerText = "Unit Price: £" + cost;
	
	    var lavaAvail = document.createElement( 'h5' );
	    lavaAvail.innerText = "Available: " + this.lava + "/1";
	
	    var lavaSelectValue = document.createElement( 'h5' );
	
	    var lavaSelect = document.createElement( 'input' );
	    lavaSelect.type = "range";
	    lavaSelect.step = 1;
	    lavaSelect.min = 0;
	    lavaSelect.max = this.lava;
	    lavaSelect.value = 0;
	    lavaSelect.list = "steplist";
	
	    lavaSelect.onchange = function() {
	        lavaSelectValue.innerText = "Give " + lavaSelect.value + " Units";
	        this.buyLavas = lavaSelect.value;
	        this.total = cost * lavaSelect.value;
	    }.bind( this );
	
	    lavaSelectValue.innerText = "Give " + lavaSelect.value + " Units";
	
	    var lavaText = document.createElement( 'h5' );
	    lavaText.innerText = "Lava tour in Volcano Park";
	
	    giftSpace.appendChild( lavaListOne );
	
	    lavaList.appendChild( lava );
	    lavaList.appendChild( lavaUnit );
	    lavaList.appendChild( lavaAvail );
	    lavaList.appendChild( lavaSelect );
	    lavaList.appendChild( lavaSelectValue );
	    lavaList.appendChild( lavaText );
	
	    lavaListOne.appendChild( lavaList );
	    giftSpace.appendChild( lavaListOne );
	
	    giftSpace.style.display = "block";
	
	    var giveButton = document.createElement( 'button' );
	    var cancelButton = document.createElement( 'button' );
	
	    giveButton.innerText = "Gift...";
	    giveButton.onclick = function() {
	      this.displayForm();
	    }.bind( this );
	
	    cancelButton.innerText = "Back...";
	    cancelButton.onclick = function() {
	      this.displayGifts();
	    }.bind( this );
	
	    giftSpace.appendChild( giveButton );
	    giftSpace.appendChild( cancelButton ); 
	  },
	
	  displayGifts: function() {
	    var giftList = document.getElementById( 'gift-list' );
	    giftList.style.display = "none";
	
	    var giftSpace = document.getElementById( 'gift-space' );
	    giftSpace.style.display = "block";
	  }  
	}
	
	module.exports = EnglishLavaView;

/***/ },
/* 13 */
/***/ function(module, exports) {

	var EnglishCommentsView = function() {
	  this.comments = [];
	  this.url = "https://wedding-comments.herokuapp.com/comments";
	  // this.url = "https://pacific-fortress-75674.herokuapp.com/comments";
	  // this.url = "http://localhost:5000/comments.json";
	  this.getComments()
	}
	
	EnglishCommentsView.prototype = {
	
	  display: function() {
	    this.createForm();
	    var commentSpace = document.getElementById( 'comment-space' );
	    var list = document.createElement( 'ul' );
	    commentSpace.appendChild( list );
	    for( var i = 0; i < this.comments.length; i++ ) {
	      var comment = document.createElement( 'li' );
	      var text = this.comments[i].name + " - " + this.comments[i].comment_text;
	      comment.innerText = text;
	      var br = document.createElement( 'br' );
	      list.appendChild( comment );
	      list.appendChild( br );
	    }
	  },
	
	  getComments: function() {
	
	    setInterval( function() {
	      if( this.comments.length === 0 ) {
	        this.displayLoading()
	      }
	    }.bind( this ), 10 );
	
	    var commentSpace = document.getElementById( 'comment-space' );
	    commentSpace.innerText = "";
	    var request = new XMLHttpRequest();
	    request.open( 'GET', this.url );
	    request.setRequestHeader("Content-Type", "application/json")
	
	    request.onload = () => {
	      if( request.status === 200 ) {
	        var comments = JSON.parse( request.responseText );
	        this.comments = comments;
	        this.hideLoading();
	        this.display();
	      }
	    }
	    request.send( null );
	  },
	
	  createForm: function() {
	    var commentSpace = document.getElementById( 'comment-space' );
	
	    var title = document.createElement( 'h1' );
	    title.className = "circleTitle";
	    title.innerText = "Come and say hi";
	
	    var dotsOne = document.createElement( 'p' );
	    dotsOne.innerText = "--------------------------------"
	
	    var name = document.createElement( 'input' );
	    name.type = 'text';
	    name.placeholder = 'Name...';
	    name.id = 'name';
	
	    var comment = document.createElement( 'input' );
	    comment.type = 'input';
	    comment.placeholder = 'Please add your message...';
	    comment.setAttribute('size',comment.getAttribute('placeholder').length);
	    comment.id = 'comment';
	
	    var button = document.createElement( 'button' );
	    button.innerText = 'Say Hello';
	
	    var br = document.createElement( 'br' );
	
	    commentSpace.appendChild( title );
	    commentSpace.appendChild( dotsOne );
	    commentSpace.appendChild( name );
	    commentSpace.appendChild( comment );
	    commentSpace.appendChild( button );
	    commentSpace.appendChild( br );
	
	    button.onclick = function() {
	      var request = new XMLHttpRequest()
	      request.open( 'POST', this.url )
	      request.setRequestHeader("Content-Type", "application/json")
	      request.onload = () => {
	        this.getComments();
	      }
	      var data = {
	        comment: {
	          name: name.value,
	          comment_text: comment.value
	        }
	      }
	      request.send( JSON.stringify( data ));
	    }.bind( this )
	  },
	
	  displayLoading: function() {
	    var commentSpace = document.getElementById( 'comment-space' );
	    commentSpace.innerText = "";
	
	    var img = document.createElement( 'img' );
	    img.src = "./css/image/loading.gif";
	    img.id = "loading";
	    commentSpace.appendChild( img );
	  },
	
	  hideLoading: function() {
	    var commentSpace = document.getElementById( 'comment-space' );
	    commentSpace.innerText = "";
	  }
	}
	
	module.exports = EnglishCommentsView;

/***/ },
/* 14 */
/***/ function(module, exports) {

	var EnglishContactView = function() {
	  this.display();
	}
	
	EnglishContactView.prototype = {
	
	  display: function() {
	    var contactSpace = document.getElementById( 'contact-space' );
	    contactSpace.innerText = "";
	
	    var primary = document.createElement( 'div' );
	    primary.id = "primary";
	    var secondary = document.createElement( 'div' );
	    secondary.id = "secondary";
	
	    var dotsOne = document.createElement( 'p' );
	    dotsOne.innerText = "--------------------------------"
	
	    var dotsTwo = document.createElement( 'p' );
	    dotsTwo.innerText = "--------------------------------"
	
	    var welcome = document.createElement( 'h1' );
	    welcome.className = "circleTitle";
	    welcome.innerText = "General Information";
	
	    primary.appendChild( welcome );
	    primary.appendChild( dotsOne );
	
	    var info = document.createElement( 'h5' );
	    info.innerText = "We really hope you can join us on the 1st of April 2017 for a day of good weather, good food and of course helping us celebrate our love. \n\n If you have any questions please drop us a shout."
	    primary.appendChild( info );
	
	    var contact = document.createElement( 'ul' );
	    secondary.appendChild( contact );
	
	    var getInTouch = document.createElement( 'h1' );
	    getInTouch.innerText = "Contact Information";
	
	    var email = document.createElement( 'li' );
	    email.innerHTML = "<img src='./css/image/email.png' >";
	
	    var address = document.createElement( 'a' );
	    address.href = "mailto:euanandlaura@gmail.com";
	    address.innerText = "euanandlaura@gmail.com";
	
	    contact.appendChild( getInTouch );
	    contact.appendChild( dotsTwo );
	    contact.appendChild( email );
	    contact.appendChild( address );
	
	    contactSpace.appendChild( primary );
	
	    contactSpace.appendChild( secondary );
	  },
	
	}
	
	module.exports = EnglishContactView;

/***/ },
/* 15 */
/***/ function(module, exports) {

	var EnglishRSVP = function() {
	  this.url = "https://guest-database.herokuapp.com/guests";
	  // this.url = "http://localhost:5000/guests";
	  this.busUrl = "https://bus-database.herokuapp.com/buses";
	  // this.busUrl = "http://localhost:9090/buses";
	  this.display();
	}
	
	EnglishRSVP.prototype = {
	
	  display: function() {
	    var rsvpSpace = document.getElementById( 'rsvp-space' );
	    rsvpSpace.innerText = "";
	
	    var rsvp = document.createElement( 'h1' );
	    rsvp.className = "circleTitle";
	    rsvp.innerText = "R.S.V.P";
	
	    var dotsOne = document.createElement( 'p' );
	    dotsOne.innerText = "--------------------------------"
	
	    var name = document.createElement( 'input' );
	    name.placeholder = "Name...";
	
	    var email = document.createElement( 'input' );
	    email.placeholder = "Email...";
	
	    var comingText = document.createElement( 'h5' );
	    comingText.innerText = "Are you coming?";
	
	    var comingBox = document.createElement( 'input' );
	    comingBox.type = "checkbox";
	
	    var plusOneText = document.createElement( 'h5' );
	    plusOneText.innerText = "Plus One?";
	
	    var plusOneBox = document.createElement( 'input' );
	    plusOneBox.type = "checkbox";
	
	    var kidsText = document.createElement( 'h5' );
	    kidsText.innerText = "Are you taking any kids?";
	
	    var kidsNumber = document.createElement( 'h5' );
	    kidsNumber.innerText = 0;
	
	    var kidsSlider = document.createElement( 'input' );
	    kidsSlider.id = "kidsSlider";
	    kidsSlider.type = "range";
	    kidsSlider.step = 1;
	    kidsSlider.min = 0;
	    kidsSlider.max = 3;
	    kidsSlider.value = 0;
	    kidsSlider.list = "steplist";
	
	    kidsSlider.onchange = function() {
	      kidsNumber.innerText = kidsSlider.value;
	    }
	
	    var busText = document.createElement( 'h5' );
	    busText.innerText = "Will you need the bus?";
	
	    var busBox = document.createElement( 'input' );
	    busBox.type = "checkbox";
	
	    var button = document.createElement( 'button' );
	    button.innerText = "R.S.V.P";
	    button.onclick = function() {
	
	      this.showGratitude();
	
	      var adultTotal = 0;
	      if( comingBox.checked && !plusOneBox.checked ) {
	        adultTotal = 1;
	      }
	      if( comingBox.checked && plusOneBox.checked ) {
	        adultTotal = 2;
	      }
	      if( !comingBox.checked && plusOneBox.checked ) {
	        adultTotal = 1;
	      }
	
	      var comingBoolean = false;
	      if( adultTotal >= 1 ) {
	        comingBoolean = true;
	      }
	
	      var familyTotal = adultTotal += parseInt( kidsSlider.value );
	
	      var request = new XMLHttpRequest();
	      request.open( 'POST', this.url );
	      request.setRequestHeader("Content-Type", "application/json");
	      request.onload = () => {
	        this.showGratitude();
	      }
	      var data = {
	        guest: {
	          name: name.value,
	          email: email.value,
	          adults: adultTotal,
	          kids: kidsSlider.value,
	          total: familyTotal,
	          coming: comingBoolean
	        }
	      }
	      request.send( JSON.stringify( data ));
	
	      if( busBox.checked ) {
	        var busRequest = new XMLHttpRequest();
	        busRequest.open( 'POST', this.busUrl );
	        busRequest.setRequestHeader("Content-Type", "application/json");
	        busRequest.onload = () => {
	        }
	        var data = {
	          bus: {
	            name: name.value,
	            email: email.value,
	            party: familyTotal
	          }
	        }
	        busRequest.send( JSON.stringify( data ));
	      }
	    }.bind( this )
	
	    var brOne = document.createElement( 'br' );
	    var brTwo = document.createElement( 'br' );
	    var brThree = document.createElement( 'br' );
	    var brFour = document.createElement( 'br' );
	    var brFive = document.createElement( 'br' );
	
	    rsvpSpace.appendChild( rsvp );
	    rsvpSpace.appendChild( dotsOne );
	    rsvpSpace.appendChild( name );
	    rsvpSpace.appendChild( email );
	    rsvpSpace.appendChild( brOne );
	    rsvpSpace.appendChild( comingText );
	    rsvpSpace.appendChild( comingBox );
	    rsvpSpace.appendChild( plusOneText );
	    rsvpSpace.appendChild( plusOneBox );
	    rsvpSpace.appendChild( brTwo );
	    rsvpSpace.appendChild( kidsText );
	    rsvpSpace.appendChild( kidsSlider );
	    rsvpSpace.appendChild( kidsNumber );
	    rsvpSpace.appendChild( brThree );
	    rsvpSpace.appendChild( busText );
	    rsvpSpace.appendChild( busBox );
	    rsvpSpace.appendChild( brFour );
	    rsvpSpace.appendChild( button );
	  },
	
	  showGratitude: function() {
	    var rsvpSpace = document.getElementById( 'rsvp-space' );
	    rsvpSpace.style.display = "none";
	
	    while( rsvpSpace.hasChildNodes() ) {
	      rsvpSpace.removeChild( rsvpSpace.lastChild );
	    }
	
	    var thankYou = document.createElement( 'h1' );
	    thankYou.className = "thankYou";
	    thankYou.innerText = "Thank you very much";
	    rsvpSpace.style.display = "block";
	
	    rsvpSpace.appendChild( thankYou );
	  }
	}
	
	module.exports = EnglishRSVP;

/***/ },
/* 16 */
/***/ function(module, exports) {

	var EnglishHomeView = function() {
	  this.display();
	}
	
	EnglishHomeView.prototype = {
	
	  display: function() {
	    var homeSpace = document.getElementById( 'home-space' );
	    homeSpace.innerText = "";
	
	    var welcome = document.createElement( 'h1' );
	    welcome.className = "circleTitleRaised";
	    welcome.innerText = "Bienvenidos";
	
	    var dotsOne = document.createElement( 'p' );
	    dotsOne.innerText = "--------------------------------"
	
	    var dotsTwo = document.createElement( 'p' );
	    dotsTwo.innerText = "--------------------------------"
	
	    var text = document.createElement( 'h5' );
	    text.innerText = "Aquí encontrareis toda la información de nuestra boda. \n\n Entra en nuestro libro de invitados y déjanos unas líneas, o ve a la página del salón y para ver su ubicación y la forma de poder compartir las fotos que toméis durante el día. \n\n Los que venís de fuera podéis encontrar algunos hoteles e información acerca del autobús que ira desde Orihuela hasta el salón. \n\n Algunos de vosotros nos habéis preguntado que nos gustaría como regalo, para todos aquellos a los que les gustaría saberlo hemos puesto el apartado de la lista de bodas. \n\n Por favor confirmad la asistencia a través de la página web. También podéis indicar si vais a usar el autobús."
	
	    var message = document.createElement( 'h5' );
	    message.innerText = "Esperamos veros a todos el 1 de Abril a las 12:30 porque compartir este día con vosotros lo hará aún más especial.";
	    message.id = "message";
	
	    var us = document.createElement( 'h1' );
	    us.innerText = "Laura & Euan";
	
	    var language = document.createElement( 'h1' );
	    language.innerText = "Change Language";
	
	    var languageText = document.createElement( 'h5' );
	    languageText.innerText = "Click the flag at any point to change the language."
	
	    homeSpace.appendChild( welcome );
	    homeSpace.appendChild( dotsOne );
	    homeSpace.appendChild( text );
	    homeSpace.appendChild( message );
	    homeSpace.appendChild( us );
	    homeSpace.appendChild( languageText );
	  },
	
	}
	
	module.exports = EnglishHomeView;

/***/ },
/* 17 */
/***/ function(module, exports) {

	var EnglishVenueView = function() {
	  this.display();
	}
	
	EnglishVenueView.prototype = {
	
	  display: function() {
	    var venueSpace = document.getElementById( 'venue-space' );
	    venueSpace.innerText = "";
	
	    var title = document.createElement( 'h1' );
	    title.className = "circleTitleRaised";
	    title.innerText = "Salones Canario";
	
	    var dotsOne = document.createElement( 'p' );
	    dotsOne.innerText = "--------------------------------"
	
	    var dotsTwo = document.createElement( 'p' );
	    dotsTwo.innerText = "--------------------------------"
	
	    var text = document.createElement( 'h5' );
	    text.id = "venueText";
	    text.innerText = "Esperamos veros a todos en la ceremonia que tendrá lugar a las 12:30 en los jardines del salón. Cuando la ceremonia acabe empezara un coctel y después entraremos a la sala para la comida. Al acabar el banquete habrá barra libre y DJ para continuar con la fiesta."
	
	    var address = document.createElement( 'a' );
	    address.innerText = "Salones Canarios, Calle Constitución, 03170 Rojales, Alicante, Spain \n (pulsame)";
	    address.href = "https://www.google.co.uk/maps/place/Salones+Canario/@38.085104,-0.7316289,17z/data=!3m1!4b1!4m5!3m4!1s0xd63af14268fcecf:0xe8048d44d8dd442f!8m2!3d38.085104!4d-0.7294402";
	    address.target = "_blank";
	    address.id = "address";
	
	    var slackTitle = document.createElement( 'h1' );
	    slackTitle.innerText = "Cómo compartir tus fotos"
	
	    var slackText = document.createElement( 'h5' );
	    slackText.innerText = "Nos encantaría que compartierais las fotos que toméis durante el día con todos. Por favor mandadnos vuestro email y os invitaremos a uniros a un grupo en una app que se llama Slack. Es gratis y privada y lo único que tenéis que hacer durante el día es subir las fotos a el grupo e irán apareciendo en la pantalla del salón."
	
	    var contact = document.createElement( 'ul' );
	
	    var email = document.createElement( 'li' );
	    email.innerHTML = "<img src='./css/image/email.png' >";
	
	    var emailAddress = document.createElement( 'a' );
	    emailAddress.href = "mailto:euanandlaura@gmail.com";
	    emailAddress.innerText = "euanandlaura@gmail.com";
	
	    contact.appendChild( email );
	    contact.appendChild( emailAddress );
	
	    venueSpace.appendChild( title );
	    venueSpace.appendChild( dotsOne );
	    venueSpace.appendChild( text );
	    venueSpace.appendChild( address );
	    venueSpace.appendChild( slackTitle );
	    venueSpace.appendChild( dotsTwo );
	    venueSpace.appendChild( slackText );
	    venueSpace.appendChild( contact );
	  },
	}
	
	module.exports = EnglishVenueView;

/***/ },
/* 18 */
/***/ function(module, exports) {

	var EnglishBusView = function() {
	
	  this.center = { lat: 38.0864422, lng: -0.8313381 };
	  this.map = new google.maps.Map( document.getElementById( 'map' ), {
	    center: this.center,
	    zoom: 11
	  })
	
	  this.display();
	  this.displayMap();
	}
	
	EnglishBusView.prototype = {
	
	  display: function() {
	    var busSpace = document.getElementById( 'bus-space' );
	    busSpace.innerText = "";
	
	    var title = document.createElement( 'h1' );
	    title.className = "circleTitle";
	    title.innerText = "Autobús";
	
	    var dotsOne = document.createElement( 'p' );
	    dotsOne.innerText = "--------------------------------"
	
	    var text = document.createElement( 'h5' );
	    text.innerText = "Para los que estéis en Orihuela y lo necesites hemos organizado un autobús para ir y volver del salón y nadie se tenga que preocupar si quiere tomarse una copa o dos..docenas. Actualizaremos la página en Marzo con la información del horario y el punto de salida. \n\n Por favor decidnos en la página “Confirmación de asistencia” si vais a usar el autobús."
	
	    var contactDiv = document.createElement( 'div' );
	    contactDiv.id = "contactDiv";
	
	    var contact = document.createElement( 'ul' );
	    contactDiv.appendChild( contact );
	
	    var email = document.createElement( 'li' );
	    email.innerHTML = "<img src='./css/image/email.png' >";
	
	    var address = document.createElement( 'a' );
	    address.href = "mailto:euanandlaura@gmail.com";
	    address.innerText = "euanandlaura@gmail.com";
	
	    contact.appendChild( email );
	    contact.appendChild( address );
	
	    busSpace.appendChild( title );
	    busSpace.appendChild( dotsOne );
	    busSpace.appendChild( text );
	    busSpace.appendChild( contactDiv );
	  },
	
	  displayMap: function() {
	    var salone = new google.maps.Marker({
	      position: { lat: 38.085552, lng: -0.729775 },
	      map: this.map,
	      animation: google.maps.Animation.DROP,
	      title: 'Salone Canario'
	    });
	
	    var saloneInfo = new google.maps.InfoWindow({
	      content: "Salone Canario"
	    });
	
	    salone.addListener( 'click', function() {
	      saloneInfo.open( this.map, salone )
	    })
	  }
	}
	
	module.exports = EnglishBusView;

/***/ },
/* 19 */
/***/ function(module, exports) {

	var EnglishMapView = function() {
	  this.display();
	}
	
	EnglishMapView.prototype = {
	
	  display: function() {
	    var hotelSpace = document.getElementById( 'hotel-space' );
	    hotelSpace.innerText = "";
	
	    var title = document.createElement( 'h1' );
	    title.className = "circleTitleRaised";
	    title.innerText = "Hoteles";
	
	    var dotsOne = document.createElement( 'p' );
	    dotsOne.innerText = "--------------------------------"
	
	    var text = document.createElement( 'h5' );
	    text.innerText = "Para los que venís de fuera hemos seleccionado un par de hoteles que os podrían interesar en Orihuela y en Rojales o cerca. \n\n Para ver donde esta cada uno selecciona el link del mapa o de la página web del hotel.";
	
	    var palacioDeTudemir = document.createElement( 'h5' );
	    palacioDeTudemir.innerText = "Palacio de Tudemir: ";
	    palacioDeTudemir.className = "hotels";
	
	    var palacioDeTudemirMap = document.createElement( 'a' );
	    palacioDeTudemirMap.innerText = "Mapa"
	    palacioDeTudemirMap.href = "https://www.google.co.uk/maps/dir/Hotel+Boutique+Palacio+de+Tudemir,+Calle+Alfonso+XIII,+1,+03300+Orihuela,+Alicante,+Spain/Salones+Canario,+Calle+Constituci%C3%B3n,+Rojales,+Spain/@38.0596435,-0.9071404,12z/data=!3m1!4b1!4m13!4m12!1m5!1m1!1s0xd63991de05ee827:0x7aefcd1fad58759!2m2!1d-0.9447066!2d38.0859664!1m5!1m1!1s0xd63af14268fcecf:0xe8048d44d8dd442f!2m2!1d-0.7294402!2d38.085104";
	    palacioDeTudemirMap.target = "_blank";
	
	    var palacioDeTudemirSite = document.createElement( 'a' );
	    palacioDeTudemirSite.innerText = "Pagina web"
	    palacioDeTudemirSite.href = "http://www.hotelpalaciotudemir.com/en";
	    palacioDeTudemirSite.target = "_blank";
	
	
	    var hostalReyTeodomiro = document.createElement( 'h5' );
	    hostalReyTeodomiro.innerText = "Hostal Rey Teodomiro: ";
	    hostalReyTeodomiro.className = "hotels";
	
	    var hostalReyTeodomiroMap = document.createElement( 'a' );
	    hostalReyTeodomiroMap.innerText = "Mapa"
	    hostalReyTeodomiroMap.href = "https://www.google.co.uk/maps/dir/Hostal+Rey+Teodomiro,+Avenida+Teodomiro,+Orihuela,+Spain/Salones+Canario,+Calle+Constituci%C3%B3n,+Rojales,+Spain/@38.1662726,-0.9575739,11z/data=!3m1!4b1!4m13!4m12!1m5!1m1!1s0xd63991fbca946ff:0xef0498debb46c0e4!2m2!1d-0.9456179!2d38.0818869!1m5!1m1!1s0xd63af14268fcecf:0xe8048d44d8dd442f!2m2!1d-0.7294402!2d38.085104"
	    hostalReyTeodomiroMap.target = "_blank";
	
	    var hostalReyTeodomiroSite = document.createElement( 'a' );
	    hostalReyTeodomiroSite.innerText = "Pagina web";
	    hostalReyTeodomiroSite.href = "http://www.hostalreyteodomiro.eu/";
	    hostalReyTeodomiroSite.target = "_blank";
	
	    var losPalacios = document.createElement( 'h5' );
	    losPalacios.innerText = "Los Palacios: ";
	    losPalacios.className = "hotels";
	
	    var losPalaciosMap = document.createElement( 'a' );
	    losPalaciosMap.innerText = "Mapa";
	    losPalaciosMap.href = "https://www.google.co.uk/maps/dir/Los+Palacios,+Avenida+Vega+Baja,+Formentera+del+Segura,+Spain/Salones+Canario,+Calle+Constituci%C3%B3n,+Rojales,+Spain/@38.0864439,-0.7298043,17z/data=!3m1!4b1!4m13!4m12!1m5!1m1!1s0xd63af138e9be99f:0x28ebfd508ffa70e4!2m2!1d-0.7269625!2d38.0880189!1m5!1m1!1s0xd63af14268fcecf:0xe8048d44d8dd442f!2m2!1d-0.7294402!2d38.085104";
	    losPalaciosMap.target = "_blank";
	
	    var losPalaciosSite = document.createElement( 'a' );
	    losPalaciosSite.innerText = "Pagina web";
	    losPalaciosSite.href = "https://www.tripadvisor.co.uk/Hotel_Review-g1078806-d1106612-Reviews-Los_Palacios-Formentera_Del_Segura_Costa_Blanca_Province_of_Alicante_Valencian_Countr.html";
	    losPalaciosSite.target = "_blank";
	
	
	    var laLaguna = document.createElement( 'h5' );
	    laLaguna.innerText = "La Laguna:";
	    laLaguna.className = "hotels";
	
	    var laLagunaMap = document.createElement( 'a' );
	    laLagunaMap.innerText = "Mapa";
	    laLagunaMap.href = "https://www.google.co.uk/maps/dir/Hotel+La+Laguna+Spa+%26+Golf,+Avenida+Antonio+Quesada,+Quesada,+Spain/Salones+Canario,+Calle+Constituci%C3%B3n,+Rojales,+Spain/@38.0629029,-0.7429271,14z/data=!3m1!4b1!4m13!4m12!1m5!1m1!1s0xd63a92611432135:0x69d8fece45c999fa!2m2!1d-0.7111099!2d38.0494862!1m5!1m1!1s0xd63af14268fcecf:0xe8048d44d8dd442f!2m2!1d-0.7294402!2d38.085104";
	    laLagunaMap.target = "_blank";
	
	    var laLagunaSite = document.createElement( 'a' );
	    laLagunaSite.innerText = "Pagina web";
	    laLagunaSite.href = "http://www.hotellalaguna.com/en/";
	    laLagunaSite.target = "_blank";
	
	    var brOne = document.createElement( 'br' );
	    var brTwo = document.createElement( 'br' );
	    var brThree = document.createElement( 'br' );
	
	    var orihuela = document.createElement( 'h1' );
	    orihuela.innerText = "Hoteles en Orihuela";
	
	    var rojales = document.createElement( 'h1' );
	    rojales.innerText = "Hoteles en Rojales";
	
	    hotelSpace.appendChild( title );
	    hotelSpace.appendChild( dotsOne );
	    hotelSpace.appendChild( text );
	
	    hotelSpace.appendChild( orihuela );
	    hotelSpace.appendChild( palacioDeTudemir );
	    hotelSpace.appendChild( palacioDeTudemirMap );
	    hotelSpace.appendChild( palacioDeTudemirSite );
	
	    hotelSpace.appendChild( brOne );
	    hotelSpace.appendChild( hostalReyTeodomiro );
	    hotelSpace.appendChild( hostalReyTeodomiroMap );
	    hotelSpace.appendChild( hostalReyTeodomiroSite );
	
	    hotelSpace.appendChild( rojales );
	    hotelSpace.appendChild( losPalacios );
	    hotelSpace.appendChild( losPalaciosMap );
	    hotelSpace.appendChild( losPalaciosSite );
	
	
	    hotelSpace.appendChild( brTwo );
	    hotelSpace.appendChild( laLaguna );
	    hotelSpace.appendChild( laLagunaMap );
	    hotelSpace.appendChild( laLagunaSite );
	  },
	}
	
	module.exports = EnglishMapView;

/***/ },
/* 20 */
/***/ function(module, exports, __webpack_require__) {

	var SpanishFlightsView = __webpack_require__( 24 );
	var EnglishHotelsView = __webpack_require__( 8 );
	var EnglishDrinksView = __webpack_require__( 9 );
	var EnglishFoodView = __webpack_require__( 10 );
	var EnglishBoatView = __webpack_require__( 11 );
	var EnglishLavaView = __webpack_require__( 12 );
	
	var EnglishGiftView = function() {
	  this.display();
	}
	
	EnglishGiftView.prototype = {
	
	  display: function() {
	    var giftSpace = document.getElementById( 'gift-space' );
	    giftSpace.innerText = "";
	
	    var title = document.createElement( 'h1' );
	    title.className = "circleTitle";
	    title.innerText = "Lista de bodas";
	
	    var dotsOne = document.createElement( 'p' );
	    dotsOne.innerText = "--------------------------------"
	
	    var text = document.createElement( 'h5' );
	    text.innerText = "Como ya sabéis vivimos en un piso alquilado que ya está equipado, y no sabemos cuánto tiempo más estaremos aquí hasta que nos mudemos. Por ello, si deseáis hacernos algún regalo lo más práctico para nosotros sería una contribución para la luna de miel, sin embargo, como nos parece un poco frio regalar dinero sin poder asociarlo a algo en concreto, hemos ideado este apartado para que vosotros sepáis que nos estáis regalando y nosotros podamos ponerle cara a cada parte de nuestro viaje y agradecéroslo desde allí. \n\n Si os gusta la idea pulsad debajo.";
	
	    var button = document.createElement( 'button' );
	    button.innerText = "Pulsame";
	    button.onclick = function() {
	      this.displayGifts();
	    }.bind( this );
	
	    giftSpace.appendChild( title );
	    giftSpace.appendChild( dotsOne );
	    giftSpace.appendChild( text );
	    giftSpace.appendChild( button );
	  },
	
	  displayGifts: function() {
	    var circleSpace = document.getElementById( 'circle-space' );
	
	    var giftSpace = document.getElementById( 'gift-space' );
	    giftSpace.innerText = "";
	    giftSpace.style.display = "block";
	
	    var title = document.createElement( 'h1' );
	    title.className = "circleTitle";
	    title.innerText = "Lista de bodas";
	
	    var dotsTwo = document.createElement( 'p' );
	    dotsTwo.innerText = "--------------------------------"
	
	    var text = document.createElement( 'h5' );
	    text.innerText = "Click on one of the items below to see a bit more about it and to contribute should you wish."
	
	    var listOne = document.createElement( 'ul' );
	    var listTwo = document.createElement( 'ul' );
	
	    var flights = document.createElement( 'img' );
	    flights.className = "giftImage";
	    flights.src = "../css/image/plane.png";
	    flights.onclick = function() {
	      this.displayFlights();
	    }.bind( this );
	
	    var lavaTour = document.createElement( 'img' );
	    lavaTour.className = "giftImage";
	    lavaTour.src = "../css/image/volcano.png";
	    lavaTour.onclick = function() {
	      this.displayLavaTour();
	    }.bind( this );
	
	    var boatTour = document.createElement( 'img' );
	    boatTour.className = "giftImage";
	    boatTour.src = "../css/image/boat.png";
	    boatTour.onclick = function() {
	      this.displayBoatTour();
	    }.bind( this );
	
	    var hotels = document.createElement( 'img' );
	    hotels.className = "giftImage";
	    hotels.src = "../css/image/hotel.png";
	    hotels.onclick = function() {
	      this.displayHotels();
	    }.bind( this );
	
	    var drinks = document.createElement( 'img' );
	    drinks.className = "giftImage";
	    drinks.src = "../css/image/drink.png";
	    drinks.onclick = function() {
	      this.displayDrinks();
	    }.bind( this );
	
	    var food = document.createElement( 'img' );
	    food.className = "giftImage";
	    food.src = "../css/image/pineapple.png";
	    food.onclick = function() {
	      this.displayFood();
	    }.bind( this );
	
	    var br = document.createElement( 'br' );
	
	    listOne.appendChild( flights );
	    listOne.appendChild( lavaTour );
	    listOne.appendChild( boatTour );
	    listTwo.appendChild( hotels );
	    listTwo.appendChild( drinks );
	    listTwo.appendChild( food );
	
	    giftSpace.appendChild( title );
	    giftSpace.appendChild( dotsTwo );
	    giftSpace.appendChild( text );
	    giftSpace.appendChild( listOne );
	    giftSpace.appendChild( br );
	    giftSpace.appendChild( listTwo );
	  },
	
	  displayFlights: function() {
	    var view = new SpanishFlightsView();
	  },
	
	  displayHotels: function() {
	    var view = new EnglishHotelsView();
	  },
	
	  displayDrinks: function() {
	    var view = new EnglishDrinksView();
	  },
	
	  displayFood: function() {
	    var view = new EnglishFoodView();
	  },
	
	  displayBoatTour: function() {
	    var view = new EnglishBoatView();
	  },
	
	  displayLavaTour: function() {
	    var view = new EnglishLavaView();
	  }
	
	}
	
	module.exports = EnglishGiftView;

/***/ },
/* 21 */
/***/ function(module, exports) {

	var EnglishCommentsView = function() {
	  this.comments = [];
	  this.url = "https://wedding-comments.herokuapp.com/comments";
	  // this.url = "https://pacific-fortress-75674.herokuapp.com/comments";
	  // this.url = "http://localhost:5000/comments.json";
	  this.getComments()
	}
	
	EnglishCommentsView.prototype = {
	
	  display: function() {
	    this.createForm();
	    var commentSpace = document.getElementById( 'comment-space' );
	    var list = document.createElement( 'ul' );
	    commentSpace.appendChild( list );
	    for( var i = 0; i < this.comments.length; i++ ) {
	      var comment = document.createElement( 'li' );
	      var text = this.comments[i].name + " - " + this.comments[i].comment_text;
	      comment.innerText = text;
	      var br = document.createElement( 'br' );
	      list.appendChild( comment );
	      list.appendChild( br );
	    }
	  },
	
	  getComments: function() {
	
	    setInterval( function() {
	      if( this.comments.length === 0 ) {
	        this.displayLoading()
	      }
	    }.bind( this ), 10 );
	
	    var commentSpace = document.getElementById( 'comment-space' );
	    commentSpace.innerText = "";
	    var request = new XMLHttpRequest();
	    request.open( 'GET', this.url );
	    request.setRequestHeader("Content-Type", "application/json")
	
	    request.onload = () => {
	      if( request.status === 200 ) {
	        var comments = JSON.parse( request.responseText );
	        this.comments = comments;
	        this.hideLoading();
	        this.display();
	      }
	    }
	    request.send( null );
	  },
	
	  createForm: function() {
	    var commentSpace = document.getElementById( 'comment-space' );
	
	    var title = document.createElement( 'h1' );
	    title.className = "circleTitle";
	    title.innerText = "Ven y saluda";
	
	    var dotsOne = document.createElement( 'p' );
	    dotsOne.innerText = "--------------------------------"
	
	    var name = document.createElement( 'input' );
	    name.type = 'text';
	    name.placeholder = 'Nombre...';
	    name.id = 'name';
	
	    var comment = document.createElement( 'input' );
	    comment.type = 'input';
	    comment.placeholder = 'Escribe aquí tu mensaje...';
	    comment.setAttribute('size',comment.getAttribute('placeholder').length);
	    comment.id = 'comment';
	
	    var button = document.createElement( 'button' );
	    button.innerText = 'Saluda';
	
	    var br = document.createElement( 'br' );
	
	    commentSpace.appendChild( title );
	    commentSpace.appendChild( dotsOne );
	    commentSpace.appendChild( name );
	    commentSpace.appendChild( comment );
	    commentSpace.appendChild( button );
	    commentSpace.appendChild( br );
	
	    button.onclick = function() {
	      var request = new XMLHttpRequest()
	      request.open( 'POST', this.url )
	      request.setRequestHeader("Content-Type", "application/json")
	      request.onload = () => {
	        this.getComments();
	      }
	      var data = {
	        comment: {
	          name: name.value,
	          comment_text: comment.value
	        }
	      }
	      request.send( JSON.stringify( data ));
	    }.bind( this )
	  },
	
	  displayLoading: function() {
	    var commentSpace = document.getElementById( 'comment-space' );
	    commentSpace.innerText = "";
	
	    var img = document.createElement( 'img' );
	    img.src = "./css/image/loading.gif";
	    img.id = "loading";
	    commentSpace.appendChild( img );
	  },
	
	  hideLoading: function() {
	    var commentSpace = document.getElementById( 'comment-space' );
	    commentSpace.innerText = "";
	  }
	}
	
	module.exports = EnglishCommentsView;

/***/ },
/* 22 */
/***/ function(module, exports) {

	var EnglishContactView = function() {
	  this.display();
	}
	
	EnglishContactView.prototype = {
	
	  display: function() {
	    var contactSpace = document.getElementById( 'contact-space' );
	    contactSpace.innerText = "";
	
	    var primary = document.createElement( 'div' );
	    primary.id = "primary";
	    var secondary = document.createElement( 'div' );
	    secondary.id = "secondary";
	
	    var dotsOne = document.createElement( 'p' );
	    dotsOne.innerText = "--------------------------------"
	
	    var dotsTwo = document.createElement( 'p' );
	    dotsTwo.innerText = "--------------------------------"
	
	    var welcome = document.createElement( 'h1' );
	    welcome.className = "circleTitle";
	    welcome.innerText = "Información general";
	
	    primary.appendChild( welcome );
	    primary.appendChild( dotsOne );
	
	    var info = document.createElement( 'h5' );
	    info.innerText = "Los momentos importes en la vida se hacen más especiales si se comparten con la gente que se quiere, por ello esperamos que nos podáis acompañar en nuestra boda el Sabado 1 de Abril. \n\n No dudéis en escribidnos si tenéis alguna pregunta."
	    primary.appendChild( info );
	
	    var contact = document.createElement( 'ul' );
	    secondary.appendChild( contact );
	
	    var getInTouch = document.createElement( 'h1' );
	    getInTouch.innerText = "Información de contacto";
	
	    var email = document.createElement( 'li' );
	    email.innerHTML = "<img src='./css/image/email.png' >";
	
	    var address = document.createElement( 'a' );
	    address.href = "mailto:euanandlaura@gmail.com";
	    address.innerText = "euanandlaura@gmail.com";
	
	    contact.appendChild( getInTouch );
	    contact.appendChild( dotsTwo );
	    contact.appendChild( email );
	    contact.appendChild( address );
	
	    contactSpace.appendChild( primary );
	
	    contactSpace.appendChild( secondary );
	  },
	
	}
	
	module.exports = EnglishContactView;

/***/ },
/* 23 */
/***/ function(module, exports) {

	var EnglishRSVP = function() {
	  this.url = "https://guest-database.herokuapp.com/guests";
	  // this.url = "http://localhost:5000/guests";
	  this.busUrl = "https://bus-database.herokuapp.com/buses";
	  // this.busUrl = "http://localhost:9090/buses";
	  this.display();
	}
	
	EnglishRSVP.prototype = {
	
	  display: function() {
	    var rsvpSpace = document.getElementById( 'rsvp-space' );
	    rsvpSpace.innerText = "";
	
	    var rsvp = document.createElement( 'h1' );
	    rsvp.className = "circleTitle";
	    rsvp.innerText = "Confirmación de asistencia";
	
	    var dotsOne = document.createElement( 'p' );
	    dotsOne.innerText = "--------------------------------"
	
	    var name = document.createElement( 'input' );
	    name.placeholder = "Nombre...";
	
	    var email = document.createElement( 'input' );
	    email.placeholder = "Email...";
	
	    var comingText = document.createElement( 'h5' );
	    comingText.innerText = "¿Vienes?";
	
	    var comingBox = document.createElement( 'input' );
	    comingBox.type = "checkbox";
	
	    var plusOneText = document.createElement( 'h5' );
	    plusOneText.innerText = "¿Vienes con pareja?";
	
	    var plusOneBox = document.createElement( 'input' );
	    plusOneBox.type = "checkbox";
	
	    var kidsText = document.createElement( 'h5' );
	    kidsText.innerText = "¿Vienes con niños?";
	
	    var kidsNumber = document.createElement( 'h5' );
	    kidsNumber.innerText = 0;
	
	    var kidsSlider = document.createElement( 'input' );
	    kidsSlider.id = "kidsSlider";
	    kidsSlider.type = "range";
	    kidsSlider.step = 1;
	    kidsSlider.min = 0;
	    kidsSlider.max = 3;
	    kidsSlider.value = 0;
	    kidsSlider.list = "steplist";
	
	    kidsSlider.onchange = function() {
	      kidsNumber.innerText = kidsSlider.value;
	    }
	
	    var busText = document.createElement( 'h5' );
	    busText.innerText = "¿Usaras el autobús?";
	
	    var busBox = document.createElement( 'input' );
	    busBox.type = "checkbox";
	
	    var button = document.createElement( 'button' );
	    button.innerText = "Confirmación de asistencia";
	    button.onclick = function() {
	
	      this.showGratitude();
	
	      var adultTotal = 0;
	      if( comingBox.checked && !plusOneBox.checked ) {
	        adultTotal = 1;
	      }
	      if( comingBox.checked && plusOneBox.checked ) {
	        adultTotal = 2;
	      }
	      if( !comingBox.checked && plusOneBox.checked ) {
	        adultTotal = 1;
	      }
	
	      var comingBoolean = false;
	      if( adultTotal >= 1 ) {
	        comingBoolean = true;
	      }
	
	      var familyTotal = adultTotal += parseInt( kidsSlider.value );
	
	      var request = new XMLHttpRequest();
	      request.open( 'POST', this.url );
	      request.setRequestHeader("Content-Type", "application/json");
	      request.onload = () => {
	        this.showGratitude();
	      }
	      var data = {
	        guest: {
	          name: name.value,
	          email: email.value,
	          adults: adultTotal,
	          kids: kidsSlider.value,
	          total: familyTotal,
	          coming: comingBoolean
	        }
	      }
	      request.send( JSON.stringify( data ));
	
	      if( busBox.checked ) {
	        var busRequest = new XMLHttpRequest();
	        busRequest.open( 'POST', this.busUrl );
	        busRequest.setRequestHeader("Content-Type", "application/json");
	        busRequest.onload = () => {
	        }
	        var data = {
	          bus: {
	            name: name.value,
	            email: email.value,
	            party: familyTotal
	          }
	        }
	        busRequest.send( JSON.stringify( data ));
	      }
	    }.bind( this )
	
	    var brOne = document.createElement( 'br' );
	    var brTwo = document.createElement( 'br' );
	    var brThree = document.createElement( 'br' );
	    var brFour = document.createElement( 'br' );
	    var brFive = document.createElement( 'br' );
	
	    rsvpSpace.appendChild( rsvp );
	    rsvpSpace.appendChild( dotsOne );
	    rsvpSpace.appendChild( name );
	    rsvpSpace.appendChild( email );
	    rsvpSpace.appendChild( brOne );
	    rsvpSpace.appendChild( comingText );
	    rsvpSpace.appendChild( comingBox );
	    rsvpSpace.appendChild( plusOneText );
	    rsvpSpace.appendChild( plusOneBox );
	    rsvpSpace.appendChild( brTwo );
	    rsvpSpace.appendChild( kidsText );
	    rsvpSpace.appendChild( kidsSlider );
	    rsvpSpace.appendChild( kidsNumber );
	    rsvpSpace.appendChild( brThree );
	    rsvpSpace.appendChild( busText );
	    rsvpSpace.appendChild( busBox );
	    rsvpSpace.appendChild( brFour );
	    rsvpSpace.appendChild( button );
	  },
	
	  showGratitude: function() {
	    var rsvpSpace = document.getElementById( 'rsvp-space' );
	    rsvpSpace.style.display = "none";
	
	    while( rsvpSpace.hasChildNodes() ) {
	      rsvpSpace.removeChild( rsvpSpace.lastChild );
	    }
	
	    var thankYou = document.createElement( 'h1' );
	    thankYou.className = "thankYou";
	    thankYou.innerText = "Muchísimas gracias";
	    rsvpSpace.style.display = "block";
	
	    rsvpSpace.appendChild( thankYou );
	  }
	}
	
	module.exports = EnglishRSVP;

/***/ },
/* 24 */
/***/ function(module, exports) {

	var EnglishFlightsView = function() {
	  // this.url = "https://gift-database.herokuapp.com/gifts";
	  // this.url = "http://localhost:8080/gifts";
	  this.flightUrl = "http://localhost:1235/flights";
	
	  this.flightObject = [];
	  this.leave = 0;
	  this.returnFlight = 0;
	  this.bigIsland = 0;
	  this.maui = 0;
	  this.kauai = 0;
	
	  this.buyLeave = 0;
	  this.buyReturnFlight = 0;
	  this.buyBigIsland = 0;
	  this.buyMaui = 0;
	  this.buyKauai = 0;
	
	  this.total = 0;
	
	  this.getFlights();
	}
	
	EnglishFlightsView.prototype = {
	
	  getFlights: function() {
	
	    setInterval( function() {
	      if( this.flightObject.length === 0 ) {
	        this.displayLoading()
	      }
	    }.bind( this ), 10 );
	
	    var request = new XMLHttpRequest();
	    request.open( 'GET', this.flightUrl );
	    request.setRequestHeader("Content-Type", "application/json")
	
	    request.onload = () => {
	      if( request.status === 200 ) {
	        var flightObject = JSON.parse( request.responseText );
	        this.flightObject = flightObject;
	        for( var i = 0; i < flightObject.length; i++ ) {
	            if( this.flightObject[i].id === 1 ) {
	                this.leave = flightObject[i].leave;
	                this.returnFlight = flightObject[i].return;
	                this.bigIsland = flightObject[i].bigisland;
	                this.maui = flightObject[i].maui;
	                this.kauai = flightObject[i].kauai;
	            }
	        }
	        this.hideLoading();
	        this.displayFlights();
	      }
	    }
	    request.send( null );
	  },
	
	  updateFlights: function() {
	    var newLeave = this.leave - this.buyLeave;
	    var newReturn = this.returnFlight - this.buyReturnFlight;
	    var newBigIsland = this.bigIsland - this.buyBigIsland;
	    var newMaui = this.maui - this.buyMaui;
	    var newKauai = this.kauai - this.buyKauai;
	
	    var url = this.flightUrl + "/1";
	    var request = new XMLHttpRequest();
	    request.open( 'PUT', url );
	    request.setRequestHeader( "Content-type", "application/json" );
	    request.onload = () => {
	        console.log( "Loaded" );
	    }
	    var data = {
	      flight : {
	        leave: newLeave,
	        return: newReturn,
	        bigisland: newBigIsland,
	        maui: newMaui,
	        kauai: newKauai
	      }
	    }
	    request.send( JSON.stringify( data ));
	    console.log( data );
	  },
	
	
	  displayLoading: function() {
	    var giftSpace = document.getElementById( 'gift-space' );
	    giftSpace.style.display = "none";
	
	    var giftList = document.getElementById( "gift-list" );
	    giftList.innerText = "";
	    giftList.style.display = "block";
	
	    var img = document.createElement( 'img' );
	    img.src = "./css/image/loading.gif";
	    img.id = "loading";
	    giftList.appendChild( img );
	  },
	
	  hideLoading: function() {
	    var giftList = document.getElementById( 'gift-list' );
	    giftList.innerText = "";
	  },
	
	  displayFlights: function() {
	    var giftSpace = document.getElementById( 'gift-space' );
	    giftSpace.style.display = "none";
	
	    var giftList = document.getElementById( 'gift-list' );
	
	    while( giftList.hasChildNodes() ) {
	      giftList.removeChild( giftList.lastChild );
	    }
	
	    var title = document.createElement( 'h1' );
	    title.innerText = "Vuelos";
	    title.className = "circleTitle";
	
	    var dotsFour = document.createElement( 'p' );
	    dotsFour.innerText = "--------------------------------"
	
	    var text = document.createElement( 'h5' );
	    text.innerText = "Estos los más importantes, cogeremos varios aviones para ir y volver de Hawaii y para movernos entre las islas. \n\n Si os preocupa que tengamos que ir nadando pulsad debajo."
	
	    var goButton = document.createElement( 'button' );
	    goButton.innerText = "Vuelos";
	    goButton.onclick = function() {
	      this.displayFlightPick();
	    }.bind( this );
	
	    var backButton = document.createElement( 'button' );
	    backButton.innerText = "Volver";
	    backButton.onclick = function() {
	      this.displayGifts(); 
	    }.bind( this );
	
	    giftList.style.display = "block";
	
	    giftList.appendChild( title );
	    giftList.appendChild( dotsFour );
	    giftList.appendChild( text );
	    giftList.appendChild( goButton );
	    giftList.appendChild( backButton );
	  },
	
	  displayForm: function( towardsValue ) {
	    var giftSpace = document.getElementById( 'gift-space' );
	    giftSpace.style.display = "none";
	
	    var giftList = document.getElementById( 'gift-list' );
	    giftList.style.display = "none";
	
	    while( giftList.hasChildNodes() ) {
	      giftList.removeChild( giftList.lastChild );
	    }
	
	    giftList.style.display = "block";
	
	    var title = document.createElement( 'h1' );
	    title.className = "circleTitle";
	    title.innerText = "Gracias";
	
	    var dotsThree = document.createElement( 'p' );
	    dotsThree.innerText = "--------------------------------"
	
	    var name = document.createElement( 'input' );
	    name.placeholder = "Nombre...";
	
	    var email = document.createElement( 'input' );
	    email.placeholder = "Email...";
	
	    var message = document.createElement( 'input' );
	    message.placeholder = "Mensaje";
	
	    var button = document.createElement( 'button' );
	    button.innerText = "Regalo";
	
	    button.onclick = function() {
	      this.updateFlights();
	      var request = new XMLHttpRequest();
	      request.open( 'POST', this.flightUrl );
	      request.setRequestHeader("Content-Type", "application/json");
	      request.onload = () => {
	        this.displayThankYou();
	      }
	      var data = {
	        flight: {
	          name: name.value,
	          email: email.value,
	          total: this.total,
	          comment: message.value,
	          leave: this.buyLeave,
	          return: this.buyReturnFlight,
	          bigisland: this.buyBigIsland,
	          maui: this.buyMaui,
	          kauai: this.buyKauai,
	          currency: "£"
	        }
	      }
	      request.send( JSON.stringify( data ));
	    }.bind( this )
	
	    var backButton = document.createElement( 'button' );
	    backButton.innerText = "Volver";
	    backButton.onclick = function() {
	      this.displayFlightPick();
	    }.bind( this );
	
	    var brOne = document.createElement( 'br' );
	    var brTwo = document.createElement( 'br' );
	    var brThree = document.createElement( 'br' );
	
	    giftList.appendChild( title );
	    giftList.appendChild( dotsThree );
	    giftList.appendChild( name );
	    giftList.appendChild( email );
	    giftList.appendChild( brOne );
	    giftList.appendChild( brTwo );
	    giftList.appendChild( message );
	    giftList.appendChild( brThree );
	    giftList.appendChild( button );
	    giftList.appendChild( backButton );
	  },
	
	  displayThankYou: function() {
	    var giftSpace = document.getElementById( 'gift-space' );
	    giftSpace.style.display = "none";
	
	    while( giftSpace.hasChildNodes() ) {
	      giftSpace.removeChild( giftSpace.lastChild );
	    }
	
	    var giftList = document.getElementById( 'gift-list' );
	    giftList.style.display = "none";
	
	    var thankYou = document.createElement( 'h1' );
	    thankYou.className = "circleTitle";
	    thankYou.innerText = "Muchas gracias!";
	    giftSpace.style.display = "block";
	
	    giftSpace.appendChild( thankYou );
	  },
	
	  displayFlightPick: function() {
	
	    var giftSpaced = document.getElementById( 'gift-space' );
	    giftSpaced.style.display = "none";
	
	    var giftSpace = document.getElementById( 'gift-list' );
	    giftSpace.style.display = "block";
	
	    while( giftSpace.hasChildNodes() ) {
	      giftSpace.removeChild( giftSpace.lastChild );
	    }
	
	    var flightTitle = document.createElement( 'h1' );
	    flightTitle.innerText = "Vuelos";
	    flightTitle.className = "circleTitleRaisedHigher";
	
	    // ##################################################
	
	    var flightListOne = document.createElement( 'ul' );
	    flightListOne.id = "flightListOne";
	
	    var leaveList = document.createElement( 'li' );
	
	    var leave = document.createElement( 'img' );
	    leave.src = "../css/image/plane.png";
	    leave.id = "leaveImg";
	    leave.className = "giftImage";
	
	    var cost = 100;
	
	    var leaveUnit = document.createElement( 'h5' );
	    leaveUnit.innerText = "€" + cost + "\nCada Unidad";
	
	    var leaveAvail = document.createElement( 'h5' );
	    leaveAvail.innerText = "Disponible: " + this.leave + "/8";
	
	    var leaveSelectValue = document.createElement( 'h5' );
	
	    var leaveSelect = document.createElement( 'input' );
	    leaveSelect.type = "range";
	    leaveSelect.step = 1;
	    leaveSelect.min = 0;
	    leaveSelect.max = this.leave;
	    leaveSelect.value = 0;
	    leaveSelect.list = "steplist";
	
	    leaveSelect.onchange = function() {
	        leaveSelectValue.innerText = "Regalar " + leaveSelect.value + " Units";
	        this.buyLeave = leaveSelect.value;
	        this.total = cost * leaveSelect.value;
	    }.bind( this );
	
	    leaveSelectValue.innerText = "Regalar " + leaveSelect.value + " Units";
	
	    var leaveText = document.createElement( 'h5' );
	    leaveText.innerText = "Vuelo de ida a Hawaii\n";
	
	    giftSpace.appendChild( flightListOne );
	
	    leaveList.appendChild( leave );
	    leaveList.appendChild( leaveText );
	    leaveList.appendChild( leaveUnit );
	    leaveList.appendChild( leaveAvail );
	    leaveList.appendChild( leaveSelect );
	    leaveList.appendChild( leaveSelectValue );
	
	    flightListOne.appendChild( leaveList );
	
	// ######################################################
	
	    var returnFlightList = document.createElement( 'li' );
	
	    var returnFlight = document.createElement( 'img' );
	    returnFlight.src = "../css/image/plane.png";
	    returnFlight.id = "returnFlightImg";
	    returnFlight.className = "giftImage";
	
	    var cost = 100
	    var returnFlightUnit = document.createElement( 'h5' );
	    returnFlightUnit.innerText = "£" + cost + "\n Per Unit";
	
	    var returnFlightAvail = document.createElement( 'h5' );
	    returnFlightAvail.innerText = "Available: " + this.returnFlight + "/8";
	
	    var returnFlightSelectValue = document.createElement( 'h5' );
	
	    var returnFlightSelect = document.createElement( 'input' );
	    returnFlightSelect.type = "range";
	    returnFlightSelect.step = 1;
	    returnFlightSelect.min = 0;
	    returnFlightSelect.max = this.returnFlight;
	    returnFlightSelect.value = 0;
	    returnFlightSelect.list = "steplist";
	
	    returnFlightSelect.onchange = function() {
	        returnFlightSelectValue.innerText = "Give " + returnFlightSelect.value + " Units";
	        this.buyReturnFlight = returnFlightSelect.value;
	        this.total = cost * returnFlightSelect.value;
	    }.bind( this );
	
	    returnFlightSelectValue.innerText = "Give " + returnFlightSelect.value + " Units";
	
	    var returnText = document.createElement( 'h5' );
	    returnText.innerText = "Vuelo de vuela\n\n";
	
	    giftSpace.appendChild( flightListOne );
	
	    returnFlightList.appendChild( returnFlight );
	    returnFlightList.appendChild( returnText );
	    returnFlightList.appendChild( returnFlightUnit );
	    returnFlightList.appendChild( returnFlightAvail );
	    returnFlightList.appendChild( returnFlightSelect );
	    returnFlightList.appendChild( returnFlightSelectValue );
	
	    // ##################################################
	
	    var bigIslandFlightList = document.createElement( 'li' );
	
	    var bigIslandFlight = document.createElement( 'img' );
	    bigIslandFlight.src = "../css/image/plane.png";
	    bigIslandFlight.id = "returnFlightImg";
	    bigIslandFlight.className = "giftImage";
	
	    var cost = 100;
	
	    var bigIslandFlightUnit = document.createElement( 'h5' );
	    bigIslandFlightUnit.innerText = "£" + cost + "\n Per Unit";
	
	    var bigIslandFlightAvail = document.createElement( 'h5' );
	    bigIslandFlightAvail.innerText = "Available: " + this.bigIsland + "/2";
	
	    var bigIslandFlightSelectValue = document.createElement( 'h5' );
	
	    var bigIslandFlightSelect = document.createElement( 'input' );
	    bigIslandFlightSelect.type = "range";
	    bigIslandFlightSelect.step = 1;
	    bigIslandFlightSelect.min = 0;
	    bigIslandFlightSelect.max = this.bigIsland;
	    bigIslandFlightSelect.value = 0;
	    bigIslandFlightSelect.list = "steplist";
	
	    bigIslandFlightSelect.onchange = function() {
	        bigIslandFlightSelectValue.innerText = "Give " + bigIslandFlightSelect.value + " Units";
	        this.buyBigIsland = bigIslandFlightSelect.value;
	        this.total = cost * bigIslandFlightSelect.value;
	    }.bind( this );
	
	    bigIslandFlightSelectValue.innerText = "Give " + bigIslandFlightSelect.value + " Units";
	
	    var bigIslandText = document.createElement( 'h5' );
	    bigIslandText.innerText = "Big Island to Maui";
	
	    bigIslandFlightList.appendChild( bigIslandFlight );
	    bigIslandFlightList.appendChild( bigIslandText );
	    bigIslandFlightList.appendChild( bigIslandFlightUnit );
	    bigIslandFlightList.appendChild( bigIslandFlightAvail );
	    bigIslandFlightList.appendChild( bigIslandFlightSelect );
	    bigIslandFlightList.appendChild( bigIslandFlightSelectValue );
	
	    flightListOne.appendChild( bigIslandFlightList );
	
	    // ##################################################
	
	    var flightListTwo = document.createElement( 'ul' );
	    flightListTwo.id = "flightListTwo";
	
	    var mauiFlightList = document.createElement( 'li' );
	
	    var mauiFlight = document.createElement( 'img' );
	    mauiFlight.src = "../css/image/plane.png";
	    mauiFlight.id = "returnFlightImg";
	    mauiFlight.className = "giftImage";
	
	    var cost = 100;
	
	    var mauiFlightUnit = document.createElement( 'h5' );
	    mauiFlightUnit.innerText = "£" + cost + "\nPer Unit";
	
	    var mauiFlightAvail = document.createElement( 'h5' );
	    mauiFlightAvail.innerText = "Available: " + this.maui + "/2";
	
	    var mauiFlightSelectValue = document.createElement( 'h5' );
	
	    var mauiFlightSelect = document.createElement( 'input' );
	    mauiFlightSelect.type = "range";
	    mauiFlightSelect.step = 1;
	    mauiFlightSelect.min = 0;
	    mauiFlightSelect.max = this.maui;
	    mauiFlightSelect.value = 0;
	    mauiFlightSelect.list = "steplist";
	
	    mauiFlightSelect.onchange = function() {
	        mauiFlightSelectValue.innerText = "Give " + mauiFlightSelect.value + " Units";
	        this.buyMaui = mauiFlightSelect.value;
	        this.total = cost * mauiFlightSelect.value;
	    }.bind( this );
	
	    mauiFlightSelectValue.innerText = "Give " + mauiFlightSelect.value + " Units";
	
	    var mauiText = document.createElement( 'h5' );
	    mauiText.innerText = "Maui to Kauai\n\n";
	
	    mauiFlightList.appendChild( mauiFlight );
	    mauiFlightList.appendChild( mauiText );
	    mauiFlightList.appendChild( mauiFlightUnit );
	    mauiFlightList.appendChild( mauiFlightAvail );
	    mauiFlightList.appendChild( mauiFlightSelect );
	    mauiFlightList.appendChild( mauiFlightSelectValue );
	
	    // ###################################################
	
	    var kauaiFlightList = document.createElement( 'li' );
	
	    var kauaiFlight = document.createElement( 'img' );
	    kauaiFlight.src = "../css/image/plane.png";
	    kauaiFlight.id = "returnFlightImg";
	    kauaiFlight.className = "giftImage";
	
	    var cost = 100;
	
	    var kauaiFlightUnit = document.createElement( 'h5' );
	    kauaiFlightUnit.innerText = "£" + cost + "\n Per Unit";
	
	    var kauaiFlightAvail = document.createElement( 'h5' );
	    kauaiFlightAvail.innerText = "Available: " + this.kauai + "/1";
	
	    var kauaiFlightSelectValue = document.createElement( 'h5' );
	
	    var kauaiFlightSelect = document.createElement( 'input' );
	    kauaiFlightSelect.type = "range";
	    kauaiFlightSelect.step = 1;
	    kauaiFlightSelect.min = 0;
	    kauaiFlightSelect.max = this.kauai;
	    kauaiFlightSelect.value = 0;
	    kauaiFlightSelect.list = "steplist";
	
	    kauaiFlightSelect.onchange = function() {
	        kauaiFlightSelectValue.innerText = "Give " + kauaiFlightSelect.value + " Units";
	        this.buyKauai = kauaiFlightSelect.value;
	        this.total = cost * kauaiFlightSelect.value;
	    }.bind( this );
	
	    kauaiFlightSelectValue.innerText = "Give " + kauaiFlightSelect.value + " Units";
	
	    var kauaiText = document.createElement( 'h5' );
	    kauaiText.innerText = "Kauai to Honolulu";
	
	    kauaiFlightList.appendChild( kauaiFlight );
	    kauaiFlightList.appendChild( kauaiText );
	    kauaiFlightList.appendChild( kauaiFlightUnit );
	    kauaiFlightList.appendChild( kauaiFlightAvail );
	    kauaiFlightList.appendChild( kauaiFlightSelect );
	    kauaiFlightList.appendChild( kauaiFlightSelectValue );
	
	    flightListOne.appendChild( kauaiFlightList );
	    flightListTwo.appendChild( mauiFlightList );
	    flightListTwo.appendChild( returnFlightList );
	
	    giftSpace.appendChild( flightListTwo );
	
	    giftSpace.style.display = "block";
	
	    // #############################################
	
	    var giveButton = document.createElement( 'button' );
	    var cancelButton = document.createElement( 'button' );
	
	    giveButton.innerText = "Gift...";
	    giveButton.onclick = function() {
	      this.displayForm();
	    }.bind( this );
	
	    cancelButton.innerText = "Back...";
	    cancelButton.onclick = function() {
	      this.displayGifts();
	    }.bind( this );
	
	    giftSpace.appendChild( giveButton );
	    giftSpace.appendChild( cancelButton );
	  },
	
	  displayGifts: function() {
	    var giftList = document.getElementById( 'gift-list' );
	    giftList.style.display = "none";
	
	    var giftSpace = document.getElementById( 'gift-space' );
	    giftSpace.style.display = "block";
	  }
	}
	
	module.exports = EnglishFlightsView;

/***/ }
/******/ ]);
//# sourceMappingURL=bundle.js.map