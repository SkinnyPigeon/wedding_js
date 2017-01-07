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
	    language.innerText = "Change Language";
	
	    var languageText = document.createElement( 'h5' );
	    languageText.innerText = "Click the flag at any point to change the language."
	
	    homeSpace.appendChild( welcome );
	    homeSpace.appendChild( dotsOne );
	    homeSpace.appendChild( text );
	    // homeSpace.appendChild( date );
	    // homeSpace.appendChild( time );
	    // homeSpace.appendChild( venue );
	    // homeSpace.appendChild( dotsTwo );
	    homeSpace.appendChild( message );
	    homeSpace.appendChild( us );
	    // homeSpace.appendChild( language );
	    // homeSpace.appendChild( languageText );
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
	var EnglishCommentsView = __webpack_require__( 7 );
	var EnglishContactView = __webpack_require__( 8 );
	var EnglishRSPV = __webpack_require__( 9 );
	
	var SpanishHomeView = __webpack_require__( 10 );
	var SpanishVenueView = __webpack_require__( 14 );
	var SpanishBusView = __webpack_require__( 15 );
	var SpanishMapView = __webpack_require__( 11 );
	var SpanishGiftView = __webpack_require__( 16 );
	var SpanishCommentsView = __webpack_require__( 12 );
	var SpanishContactView = __webpack_require__( 13 );
	var SpanishRSPV = __webpack_require__( 17 );
	
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
	    title.innerText = "Our Wedding";
	
	    var navList = document.createElement( 'ul' );
	    navList.id = 'nav';
	
	    var home = document.createElement( 'li' );
	    home.innerText = "Casa";
	    home.onclick = function() {
	      this.displaySpanishHome();
	    }.bind( this );
	
	    var venue = document.createElement( 'li' );
	    venue.innerText = "Venue";
	    venue.onclick = function() {
	      this.displaySpanishVenue();
	    }.bind( this );
	
	    var bus = document.createElement( 'li' );
	    bus.innerText = "Buses";
	    bus.onclick = function() {
	      this.displaySpanishBus();
	    }.bind( this );
	
	    var hotels = document.createElement( 'li' );
	    hotels.innerText = "Hotels";
	    hotels.onclick = function() {
	      this.displaySpanishMap();
	    }.bind( this );
	
	    var rsvp = document.createElement( 'li' );
	    rsvp.innerText = "RSVP";
	    rsvp.onclick = function() {
	      this.displaySpanishRSVP();
	    }.bind( this );
	
	    var gifts = document.createElement( 'li' );
	    gifts.innerText = "Gifts"
	    gifts.onclick = function() {
	      this.displaySpanishGift();
	    }.bind( this );
	
	    var comments = document.createElement( 'li' );
	    comments.innerText = "Guest Book";
	    comments.onclick = function() {
	      this.displaySpanishComments();
	    }.bind( this );
	
	    var flag = document.createElement( 'li' );
	    flag.innerHTML = "<img src='./css/image/spain.png' >";
	    flag.onclick = function() {
	      this.changeToEnglish();
	    }.bind( this );
	
	    var contact = document.createElement( 'li' );
	    contact.innerText = "Contact";
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
	  // this.center = { lat: 38.0864422, lng: -0.8313381 };
	  // this.map = new google.maps.Map( document.getElementById( 'map' ), {
	  //   center: this.center,
	  //   zoom: 11
	  // })
	
	  this.display();
	  // this.displayMap();
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
	    slackText.innerText = "We would love for you to share your pictures of the ceremony and party with all of us. \n If you'd like to join in then send us your email address and we'll invite you to join a group in an app called Slack. It's free and private. All you have to do is post \n the photos you take to the channel in Slack and we'll all get to see \n them on the big screen in the venue."
	
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
	
	  // displayMap: function() {
	  //   var salone = new google.maps.Marker({
	  //     position: { lat: 38.085552, lng: -0.729775 },
	  //     map: this.map,
	  //     animation: google.maps.Animation.DROP,
	  //     title: 'Salone Canario'
	  //   });
	
	  //   var saloneInfo = new google.maps.InfoWindow({
	  //     content: "Salone Canario"
	  //   });
	
	  //   salone.addListener( 'click', function() {
	  //     saloneInfo.open( this.map, salone )
	  //   })
	  // }
	
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
	    // text.innerText = "For those of you who are travelling in from out of town or just looking for somewhere a bit closer to the venue we have picked a couple places that you might be interested in. \n\n Orihuela is a large and lovely town that's home to Laura's family and has got a great selection of places to eat, drink and enjoy. It's also got the Hotel Palacio de Tudemir that's happy to give us a discount if we block book 10 rooms so let us know if you fancy booking there and we'll get it all set up. \n\n For those looking for an even easier life on the day of the wedding there are a couple that are very close to the venue. The venue is marked as green on the map below";
	
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

	var EnglishFlightsView = __webpack_require__( 18 );
	
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
	    text.innerText = "Obviously we will be delighted just to see you all there but for those of you who wish to give us a gift then we certainly wouldn't turn down you generousity. Currently we are renting a flat that is fully kitted out so we are not in desperate need of household goods. We are however going on our honeymoon a few days after the wedding and if you'd like to contribute towards some of it then we would be eternally greatful to you. \n\n Click below to see some of the ways you could help out.";
	
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
	
	}
	
	module.exports = EnglishGiftView;

/***/ },
/* 7 */
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
	    comment.placeholder = 'Please add your comment...';
	    comment.setAttribute('size',comment.getAttribute('placeholder').length);
	    comment.id = 'comment';
	
	    var button = document.createElement( 'button' );
	    button.innerText = 'Add Comment';
	
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
/* 8 */
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
	    info.innerText = "We really hope you can join us on the 1st of April 2017 for a day of good weather, good food and of course helping us celebrate our love. If you have any questions please drop us a shout."
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
/* 9 */
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
	    button.innerText = "Click";
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
/* 10 */
/***/ function(module, exports) {

	var EnglishHomeView = function() {
	  this.display();
	}
	
	EnglishHomeView.prototype = {
	
	  display: function() {
	    var homeSpace = document.getElementById( 'home-space' );
	    homeSpace.innerText = "";
	
	    var welcome = document.createElement( 'h1' );
	    welcome.className = "circleTitle";
	    welcome.innerText = "Hola. We are getting married";
	
	    var dotsOne = document.createElement( 'p' );
	    dotsOne.innerText = "--------------------------------"
	
	    var dotsTwo = document.createElement( 'p' );
	    dotsTwo.innerText = "--------------------------------"
	
	    var text = document.createElement( 'h5' );
	    text.innerText = "and we wish to share with you \n our happiness on this special day. \n We would love for you to join us for the civil ceremony \n and the celebration which will take place on"
	
	    var date = document.createElement( 'h1' );
	    date.innerText = "Saturday 1st of April 2017";
	
	    var time = document.createElement( 'h5' );
	    time.innerText = "at half past twelve at";
	
	    var venue = document.createElement( 'h5' );
	    venue.id = "venue";
	    venue.innerText = "Salones Canario en Rojales, Alicante."
	
	    var us = document.createElement( 'h1' );
	    us.innerText = "Laura & Euan";
	
	    var language = document.createElement( 'h1' );
	    language.innerText = "Change Language";
	
	    var languageText = document.createElement( 'h5' );
	    languageText.innerText = "Click the flag at any point to change the language."
	
	    homeSpace.appendChild( welcome );
	    homeSpace.appendChild( dotsOne );
	    homeSpace.appendChild( text );
	    homeSpace.appendChild( date );
	    homeSpace.appendChild( time );
	    homeSpace.appendChild( venue );
	    homeSpace.appendChild( dotsTwo );
	    homeSpace.appendChild( us );
	    // homeSpace.appendChild( language );
	    // homeSpace.appendChild( languageText );
	  },
	
	}
	
	module.exports = EnglishHomeView;

/***/ },
/* 11 */
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
	    // text.innerText = "For those of you who are travelling in from out of town or just looking for somewhere a bit closer to the venue we have picked a couple places that you might be interested in. \n\n Orihuela is a large and lovely town that's home to Laura's family and has got a great selection of places to eat, drink and enjoy. It's also got the Hotel Palacio de Tudemir that's happy to give us a discount if we block book 10 rooms so let us know if you fancy booking there and we'll get it all set up. \n\n For those looking for an even easier life on the day of the wedding there are a couple that are very close to the venue. The venue is marked as green on the map below";
	
	    text.innerText = "For those of you who are travelling in from out of town or just looking for somewhere a bit closer to the venue we have picked a couple places that you might be interested in. \n\n To see where these are just give the names below a click.";
	
	    var palacioDeTudemir = document.createElement( 'a' );
	    palacioDeTudemir.innerText = "Palacio de Tudemir";
	    palacioDeTudemir.href = "https://www.google.co.uk/maps/dir/Hotel+Boutique+Palacio+de+Tudemir,+Calle+Alfonso+XIII,+1,+03300+Orihuela,+Alicante,+Spain/Salones+Canario,+Calle+Constituci%C3%B3n,+Rojales,+Spain/@38.0596435,-0.9071404,12z/data=!3m1!4b1!4m13!4m12!1m5!1m1!1s0xd63991de05ee827:0x7aefcd1fad58759!2m2!1d-0.9447066!2d38.0859664!1m5!1m1!1s0xd63af14268fcecf:0xe8048d44d8dd442f!2m2!1d-0.7294402!2d38.085104";
	    palacioDeTudemir.target = "_blank";
	
	    var hostalReyTeodomiro = document.createElement( 'a' );
	    hostalReyTeodomiro.innerText = "Hostal Rey Teodomiro";
	    hostalReyTeodomiro.href = "https://www.google.co.uk/maps/dir/Hostal+Rey+Teodomiro,+Avenida+Teodomiro,+Orihuela,+Spain/Salones+Canario,+Calle+Constituci%C3%B3n,+Rojales,+Spain/@38.1662726,-0.9575739,11z/data=!3m1!4b1!4m13!4m12!1m5!1m1!1s0xd63991fbca946ff:0xef0498debb46c0e4!2m2!1d-0.9456179!2d38.0818869!1m5!1m1!1s0xd63af14268fcecf:0xe8048d44d8dd442f!2m2!1d-0.7294402!2d38.085104"
	    hostalReyTeodomiro.target = "_blank";
	
	    var losPalacios = document.createElement( 'a' );
	    losPalacios.innerText = "Los Palacios";
	    losPalacios.href = "https://www.google.co.uk/maps/dir/Los+Palacios,+Avenida+Vega+Baja,+Formentera+del+Segura,+Spain/Salones+Canario,+Calle+Constituci%C3%B3n,+Rojales,+Spain/@38.0864439,-0.7298043,17z/data=!3m1!4b1!4m13!4m12!1m5!1m1!1s0xd63af138e9be99f:0x28ebfd508ffa70e4!2m2!1d-0.7269625!2d38.0880189!1m5!1m1!1s0xd63af14268fcecf:0xe8048d44d8dd442f!2m2!1d-0.7294402!2d38.085104";
	    losPalacios.target = "_blank";
	
	    var laLaguna = document.createElement( 'a' );
	    laLaguna.innerText = "La Laguna";
	    laLaguna.href = "https://www.google.co.uk/maps/dir/Hotel+La+Laguna+Spa+%26+Golf,+Avenida+Antonio+Quesada,+Quesada,+Spain/Salones+Canario,+Calle+Constituci%C3%B3n,+Rojales,+Spain/@38.0629029,-0.7429271,14z/data=!3m1!4b1!4m13!4m12!1m5!1m1!1s0xd63a92611432135:0x69d8fece45c999fa!2m2!1d-0.7111099!2d38.0494862!1m5!1m1!1s0xd63af14268fcecf:0xe8048d44d8dd442f!2m2!1d-0.7294402!2d38.085104";
	    laLaguna.target = "_blank";
	
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
	    hotelSpace.appendChild( brOne );
	    hotelSpace.appendChild( hostalReyTeodomiro );
	
	    hotelSpace.appendChild( rojales );
	    hotelSpace.appendChild( losPalacios );
	    hotelSpace.appendChild( brTwo );
	    hotelSpace.appendChild( laLaguna );
	  },
	}
	
	module.exports = EnglishMapView;

/***/ },
/* 12 */
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
	    comment.placeholder = 'Please add your comment...';
	    comment.setAttribute('size',comment.getAttribute('placeholder').length);
	    comment.id = 'comment';
	
	    var button = document.createElement( 'button' );
	    button.innerText = 'Add Comment';
	
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
/* 13 */
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
	    info.innerText = "We really hope you can join us on the 1st of April 2017 for a day of good weather, good food and of course helping us celebrate our love. If you have any questions please drop us a shout."
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
/* 14 */
/***/ function(module, exports) {

	var EnglishVenueView = function() {
	  // this.center = { lat: 38.0864422, lng: -0.8313381 };
	  // this.map = new google.maps.Map( document.getElementById( 'map' ), {
	  //   center: this.center,
	  //   zoom: 11
	  // })
	
	  this.display();
	  // this.displayMap();
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
	
	    var slackTitle = document.createElement( 'h1' );
	    slackTitle.innerText = "How To Share Your Photos"
	
	    var slackText = document.createElement( 'h5' );
	    slackText.innerText = "We would love for you to share your pictures of the ceremony and party with all of us. \n If you'd like to join in then send us your email address and we'll invite you to join a group in an app called Slack. It's free and private. All you have to do is post \n the photos you take to the channel in Slack and we'll all get to see \n them on the big screen in the venue."
	
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
	
	  // displayMap: function() {
	  //   var salone = new google.maps.Marker({
	  //     position: { lat: 38.085552, lng: -0.729775 },
	  //     map: this.map,
	  //     animation: google.maps.Animation.DROP,
	  //     title: 'Salone Canario'
	  //   });
	
	  //   var saloneInfo = new google.maps.InfoWindow({
	  //     content: "Salone Canario"
	  //   });
	
	  //   salone.addListener( 'click', function() {
	  //     saloneInfo.open( this.map, salone )
	  //   })
	  // }
	
	}
	
	module.exports = EnglishVenueView;

/***/ },
/* 15 */
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
	    text.innerText = "For those of you staying in Orihuela we will be providing a bus to and from the wedding so no need to worry about taxis or sorting out a lift. We don't have the exact time or location that it'll run from but we will update this as soon as we have those details. \n\n It would be great if you could let us know if you are likely to want to use the bus so we can get an idea of numbers."
	
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
/* 16 */
/***/ function(module, exports) {

	var EnglishGiftView = function() {
	  this.display();
	  // this.url = "https://gift-database.herokuapp.com/gifts";
	  this.url = "http://localhost:8080/gifts";
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
	    text.innerText = "Obviously we will be delighted just to see you all there but for those of you who wish to give us a gift then we certainly wouldn't turn down you generousity. Currently we are renting a flat that is fully kitted out so we are not in desperate need of household goods. We are however going on our honeymoon a few days after the wedding and if you'd like to contribute towards some of it then we would be eternally greatful to you. \n\n Click below to see some of the ways you could help out.";
	
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
	
	    // var flights = document.createElement( 'h3' );
	    // flights.innerText = "Flights";
	    var flights = document.createElement( 'img' );
	    flights.className = "giftImage";
	    flights.src = "../css/image/plane.png";
	    flights.onclick = function() {
	      this.displayFlights();
	    }.bind( this );
	
	    // var lavaTour = document.createElement( 'h3' );
	    // lavaTour.innerText = "Lava Tour";
	    var lavaTour = document.createElement( 'img' );
	    lavaTour.className = "giftImage";
	    lavaTour.src = "../css/image/volcano.png";
	    lavaTour.onclick = function() {
	      this.displayLavaTour();
	    }.bind( this );
	
	    // var boatTour = document.createElement( 'h3' );
	    // boatTour.innerText = "Boat Tour";
	    var boatTour = document.createElement( 'img' );
	    boatTour.className = "giftImage";
	    boatTour.src = "../css/image/boat.png";
	    boatTour.onclick = function() {
	      this.displayBoatTour();
	    }.bind( this );
	
	    // var hotels = document.createElement( 'h3' );
	    // hotels.innerText = "Hotels";
	    var hotels = document.createElement( 'img' );
	    hotels.className = "giftImage";
	    hotels.src = "../css/image/hotel.png";
	    hotels.onclick = function() {
	      this.displayHotels();
	    }.bind( this );
	
	    // var drinks = document.createElement( 'h3' );
	    // drinks.innerText = "Drinks on the Beach";
	    var drinks = document.createElement( 'img' );
	    drinks.className = "giftImage";
	    drinks.src = "../css/image/drink.png";
	    drinks.onclick = function() {
	      this.displayDrinks();
	    }.bind( this );
	
	    // var food = document.createElement( 'h3' );
	    // food.innerText = "Delicious Food";
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
	    var giftSpace = document.getElementById( 'gift-space' );
	    giftSpace.style.display = "none";
	
	    while( giftSpace.hasChildNodes() ) {
	      giftSpace.removeChild( giftSpace.lastChild );
	    }
	
	    var title = document.createElement( 'h1' );
	    title.innerText = "Flights";
	    title.className = "circleTitle";
	
	    var dotsFour = document.createElement( 'p' );
	    dotsFour.innerText = "--------------------------------"
	
	    var text = document.createElement( 'h5' );
	    text.innerText = "These are the big ones. We've got a couple flights to get to Hawaii then another few internal flights. \n\n If you'd like to help with these the give this a click."
	
	    var goButton = document.createElement( 'button' );
	    goButton.innerText = "Click";
	    goButton.onclick = function() {
	      this.displayForm( "Flights" );
	    }.bind( this );
	
	    var backButton = document.createElement( 'button' );
	    backButton.innerText = "Back";
	    backButton.onclick = function() {
	      this.displayGifts() 
	    }.bind( this );
	
	    giftSpace.style.display = "block";
	
	    giftSpace.appendChild( title );
	    giftSpace.appendChild( dotsFour );
	    giftSpace.appendChild( text );
	    giftSpace.appendChild( goButton );
	    giftSpace.appendChild( backButton );
	  },
	
	  displayLavaTour: function() {
	    var giftSpace = document.getElementById( 'gift-space' );
	    giftSpace.style.display = "none";
	
	    while( giftSpace.hasChildNodes() ) {
	      giftSpace.removeChild( giftSpace.lastChild );
	    }
	
	    var title = document.createElement( 'h1' );
	    title.innerText = "Lava Tour";
	    title.className = "circleTitle";
	
	    var dotsFive = document.createElement( 'p' );
	    dotsFive.innerText = "--------------------------------"
	
	    var text = document.createElement( 'h5' );
	    text.innerText = "One of the sights we are really hoping to get to is a tour of the volcanos. \n\n If you'd like to help with this then give this a click."
	
	    var goButton = document.createElement( 'button' );
	    goButton.innerText = "Click";
	    goButton.onclick = function() {
	      this.displayForm( "Lava Tour" );
	    }.bind( this );
	
	    var backButton = document.createElement( 'button' );
	    backButton.innerText = "Back";
	    backButton.onclick = function() {
	      this.displayGifts() 
	    }.bind( this );
	
	    giftSpace.style.display = "block";
	
	    giftSpace.appendChild( title );
	    giftSpace.appendChild( dotsFive );
	    giftSpace.appendChild( text );
	    giftSpace.appendChild( goButton );
	    giftSpace.appendChild( backButton );
	  },
	
	  displayBoatTour: function() {
	    var giftSpace = document.getElementById( 'gift-space' );
	    giftSpace.style.display = "none";
	
	    while( giftSpace.hasChildNodes() ) {
	      giftSpace.removeChild( giftSpace.lastChild );
	    }
	
	    var title = document.createElement( 'h1' );
	    title.innerText = "Boat Tour";
	    title.className = "circleTitle";
	
	    var dotsSix = document.createElement( 'p' );
	    dotsSix.innerText = "--------------------------------"
	
	    var text = document.createElement( 'h5' );
	    text.innerText = "Another of the main attractions we would love to get to is a boat tour of the Napali Coast. \n\n If you'd like to help with this then give this a click."
	
	    var goButton = document.createElement( 'button' );
	    goButton.innerText = "Click";
	    goButton.onclick = function() {
	      this.displayForm( "Boat Tour" );
	    }.bind( this );
	
	    var backButton = document.createElement( 'button' );
	    backButton.innerText = "Back";
	    backButton.onclick = function() {
	      this.displayGifts() 
	    }.bind( this );
	
	    giftSpace.style.display = "block";
	
	    giftSpace.appendChild( title );
	    giftSpace.appendChild( dotsSix );
	    giftSpace.appendChild( text );
	    giftSpace.appendChild( goButton );
	    giftSpace.appendChild( backButton );
	  },
	
	  displayHotels: function() {
	    var giftSpace = document.getElementById( 'gift-space' );
	    giftSpace.style.display = "none";
	
	    while( giftSpace.hasChildNodes() ) {
	      giftSpace.removeChild( giftSpace.lastChild );
	    }
	
	    var title = document.createElement( 'h1' );
	    title.innerText = "Hotels";
	    title.className = "circleTitle";
	
	    var dotsSeven = document.createElement( 'p' );
	    dotsSeven.innerText = "--------------------------------"
	
	    var text = document.createElement( 'h5' );
	    text.innerText = "Like the flights these are pretty essential. We are doing a fair amount of travelling throughout the islands so any help will be very much appreciated. \n\n If you'd like to help with these then give this a click."
	
	    var goButton = document.createElement( 'button' );
	    goButton.innerText = "Click";
	    goButton.onclick = function() {
	      this.displayForm( "Hotels" );
	    }.bind( this );
	
	    var backButton = document.createElement( 'button' );
	    backButton.innerText = "Back";
	    backButton.onclick = function() {
	      this.displayGifts() 
	    }.bind( this );
	
	    giftSpace.style.display = "block";
	
	    giftSpace.appendChild( title );
	    giftSpace.appendChild( dotsSeven );
	    giftSpace.appendChild( text );
	    giftSpace.appendChild( goButton );
	    giftSpace.appendChild( backButton );
	  },
	
	  displayDrinks: function() {
	    var giftSpace = document.getElementById( 'gift-space' );
	    giftSpace.style.display = "none";
	
	    while( giftSpace.hasChildNodes() ) {
	      giftSpace.removeChild( giftSpace.lastChild );
	    }
	
	    var title = document.createElement( 'h1' );
	    title.innerText = "Drinks on the Beach";
	    title.className = "circleTitle";
	
	    var dotsEight = document.createElement( 'p' );
	    dotsEight.innerText = "--------------------------------"
	
	    var text = document.createElement( 'h5' );
	    text.innerText = "For those of you who know Laura you'll be aware that relaxing on the beach is pretty important to her so any help to do it in style would be amazing. \n\n If you'd like to help with this then give this a click."
	
	    var goButton = document.createElement( 'button' );
	    goButton.innerText = "Click";
	    goButton.onclick = function() {
	      this.displayForm( "Drinks" );
	    }.bind( this );
	
	    var backButton = document.createElement( 'button' );
	    backButton.innerText = "Back";
	    backButton.onclick = function() {
	      this.displayGifts() 
	    }.bind( this );
	
	    giftSpace.style.display = "block";
	
	    giftSpace.appendChild( title );
	    giftSpace.appendChild( dotsEight );
	    giftSpace.appendChild( text );
	    giftSpace.appendChild( goButton );
	    giftSpace.appendChild( backButton );
	  },
	
	  displayFood: function() {
	    var giftSpace = document.getElementById( 'gift-space' );
	    giftSpace.style.display = "none";
	
	    while( giftSpace.hasChildNodes() ) {
	      giftSpace.removeChild( giftSpace.lastChild );
	    }
	
	    var title = document.createElement( 'h1' );
	    title.innerText = "Delicious Food";
	    title.className = "circleTitle";
	
	    var dotsNine = document.createElement( 'p' );
	    dotsNine.innerText = "--------------------------------"
	
	    var text = document.createElement( 'h5' );
	    text.innerText = "What would be the point in travelling half way round the world without sampling as much delicious food as possible? \n\n If you'd like to help with this then give this a click."
	
	    var goButton = document.createElement( 'button' );
	    goButton.innerText = "Click";
	    goButton.onclick = function() {
	      this.displayForm( "Food" );
	    }.bind( this );
	
	    var backButton = document.createElement( 'button' );
	    backButton.innerText = "Back";
	    backButton.onclick = function() {
	      this.displayGifts() 
	    }.bind( this );
	
	    giftSpace.style.display = "block";
	
	    giftSpace.appendChild( title );
	    giftSpace.appendChild( dotsNine );
	    giftSpace.appendChild( text );
	    giftSpace.appendChild( goButton );
	    giftSpace.appendChild( backButton );
	  },
	
	  displayForm: function( towardsValue ) {
	    var giftSpace = document.getElementById( 'gift-space' );
	    giftSpace.style.display = "none";
	
	    while( giftSpace.hasChildNodes() ) {
	      giftSpace.removeChild( giftSpace.lastChild );
	    }
	
	    giftSpace.style.display = "block";
	
	    var title = document.createElement( 'h1' );
	    title.className = "circleTitle";
	    title.innerText = "Thank You";
	
	    var dotsThree = document.createElement( 'p' );
	    dotsThree.innerText = "--------------------------------"
	
	    var name = document.createElement( 'input' );
	    name.placeholder = "Name...";
	
	    var email = document.createElement( 'input' );
	    email.placeholder = "Email...";
	
	    var contribution = document.createElement( 'input' );
	    contribution.placeholder = "Contribution...";
	
	    var message = document.createElement( 'input' );
	    message.placeholder = "Message";
	
	    var change = document.createElement( 'h5' );
	    change.innerText = "Click to change currency";
	    change.id = "change";
	
	    var changeBox = document.createElement( 'input' );
	    changeBox.type = "checkbox";
	
	    var currency = document.createElement( 'h5' );
	    currency.innerText = "€";
	    currency.id = "currency";
	
	    changeBox.onchange = function() {
	      if( changeBox.checked ) {
	        currency.innerText = "£"
	      } else {
	        currency.innerText = "€"
	      }
	    }
	
	    var button = document.createElement( 'button' );
	    button.innerText = "Click";
	
	    button.onclick = function() {
	      var request = new XMLHttpRequest()
	      request.open( 'POST', this.url )
	      request.setRequestHeader("Content-Type", "application/json")
	      request.onload = () => {
	        this.displayThankYou();
	      }
	      var data = {
	        gift: {
	          name: name.value,
	          email: email.value,
	          contribution: contribution.value,
	          towards: towardsValue,
	          message: message.value,
	          currency: currency.innerText
	        }
	      }
	      request.send( JSON.stringify( data ));
	    }.bind( this )
	
	    var backButton = document.createElement( 'button' );
	    backButton.innerText = "Back";
	    backButton.onclick = function() {
	      this.displayGifts();
	    }.bind( this );
	
	    var brOne = document.createElement( 'br' );
	    var brTwo = document.createElement( 'br' );
	    var brThree = document.createElement( 'br' );
	    var brFour = document.createElement( 'br' );
	
	    giftSpace.appendChild( title );
	    giftSpace.appendChild( dotsThree );
	    giftSpace.appendChild( name );
	    giftSpace.appendChild( email );
	    giftSpace.appendChild( brOne );
	    giftSpace.appendChild( currency );
	    giftSpace.appendChild( contribution );
	    giftSpace.appendChild( brTwo );
	    giftSpace.appendChild( change );
	    giftSpace.appendChild( changeBox );
	    giftSpace.appendChild( brThree );
	    giftSpace.appendChild( message );
	    giftSpace.appendChild( brFour );
	    giftSpace.appendChild( button );
	    giftSpace.appendChild( backButton );
	  },
	
	  displayThankYou: function() {
	    var giftSpace = document.getElementById( 'gift-space' );
	    giftSpace.style.display = "none";
	
	    while( giftSpace.hasChildNodes() ) {
	      giftSpace.removeChild( giftSpace.lastChild );
	    }
	
	    var thankYou = document.createElement( 'h1' );
	    thankYou.className = "circleTitle";
	    thankYou.innerText = "Thank you very much";
	    giftSpace.style.display = "block";
	
	    giftSpace.appendChild( thankYou );
	  }
	}
	
	module.exports = EnglishGiftView;


/***/ },
/* 17 */
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
	    kidsSlider.max = 5;
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
	    button.innerText = "Click";
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
/* 18 */
/***/ function(module, exports) {

	var EnglishFlightsView = function() {
	  // this.url = "https://gift-database.herokuapp.com/gifts";
	  this.url = "http://localhost:8080/gifts";
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
	  },
	
	  displayFlights: function() {
	    var giftSpace = document.getElementById( 'gift-space' );
	    giftSpace.style.display = "none";
	
	    while( giftSpace.hasChildNodes() ) {
	      giftSpace.removeChild( giftSpace.lastChild );
	    }
	
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
	    text.innerText = "These are the big ones. We've got a couple flights to get to Hawaii then another few internal flights. \n\n If you'd like to help with these the give this a click."
	
	    var goButton = document.createElement( 'button' );
	    goButton.innerText = "Click";
	    goButton.onclick = function() {
	      this.displayFlightPick();
	    }.bind( this );
	
	    var backButton = document.createElement( 'button' );
	    backButton.innerText = "Back";
	    backButton.onclick = function() {
	      this.displayGifts() 
	    }.bind( this );
	
	    giftSpace.style.display = "block";
	
	    giftSpace.appendChild( title );
	    giftSpace.appendChild( dotsFour );
	    giftSpace.appendChild( text );
	    giftSpace.appendChild( goButton );
	    giftSpace.appendChild( backButton );
	  },
	
	
	  displayLavaTour: function() {
	    var giftSpace = document.getElementById( 'gift-space' );
	    giftSpace.style.display = "none";
	
	    while( giftSpace.hasChildNodes() ) {
	      giftSpace.removeChild( giftSpace.lastChild );
	    }
	
	    var title = document.createElement( 'h1' );
	    title.innerText = "Lava Tour";
	    title.className = "circleTitle";
	
	    var dotsFive = document.createElement( 'p' );
	    dotsFive.innerText = "--------------------------------"
	
	    var text = document.createElement( 'h5' );
	    text.innerText = "One of the sights we are really hoping to get to is a tour of the volcanos. \n\n If you'd like to help with this then give this a click."
	
	    var goButton = document.createElement( 'button' );
	    goButton.innerText = "Click";
	    goButton.onclick = function() {
	      this.displayForm( "Lava Tour" );
	    }.bind( this );
	
	    var backButton = document.createElement( 'button' );
	    backButton.innerText = "Back";
	    backButton.onclick = function() {
	      this.displayGifts() 
	    }.bind( this );
	
	    giftSpace.style.display = "block";
	
	    giftSpace.appendChild( title );
	    giftSpace.appendChild( dotsFive );
	    giftSpace.appendChild( text );
	    giftSpace.appendChild( goButton );
	    giftSpace.appendChild( backButton );
	  },
	
	  displayBoatTour: function() {
	    var giftSpace = document.getElementById( 'gift-space' );
	    giftSpace.style.display = "none";
	
	    while( giftSpace.hasChildNodes() ) {
	      giftSpace.removeChild( giftSpace.lastChild );
	    }
	
	    var title = document.createElement( 'h1' );
	    title.innerText = "Boat Tour";
	    title.className = "circleTitle";
	
	    var dotsSix = document.createElement( 'p' );
	    dotsSix.innerText = "--------------------------------"
	
	    var text = document.createElement( 'h5' );
	    text.innerText = "Another of the main attractions we would love to get to is a boat tour of the Napali Coast. \n\n If you'd like to help with this then give this a click."
	
	    var goButton = document.createElement( 'button' );
	    goButton.innerText = "Click";
	    goButton.onclick = function() {
	      this.displayForm( "Boat Tour" );
	    }.bind( this );
	
	    var backButton = document.createElement( 'button' );
	    backButton.innerText = "Back";
	    backButton.onclick = function() {
	      this.displayGifts() 
	    }.bind( this );
	
	    giftSpace.style.display = "block";
	
	    giftSpace.appendChild( title );
	    giftSpace.appendChild( dotsSix );
	    giftSpace.appendChild( text );
	    giftSpace.appendChild( goButton );
	    giftSpace.appendChild( backButton );
	  },
	
	  displayHotels: function() {
	    var giftSpace = document.getElementById( 'gift-space' );
	    giftSpace.style.display = "none";
	
	    while( giftSpace.hasChildNodes() ) {
	      giftSpace.removeChild( giftSpace.lastChild );
	    }
	
	    var title = document.createElement( 'h1' );
	    title.innerText = "Hotels";
	    title.className = "circleTitle";
	
	    var dotsSeven = document.createElement( 'p' );
	    dotsSeven.innerText = "--------------------------------"
	
	    var text = document.createElement( 'h5' );
	    text.innerText = "Like the flights these are pretty essential. We are doing a fair amount of travelling throughout the islands so any help will be very much appreciated. \n\n If you'd like to help with these then give this a click."
	
	    var goButton = document.createElement( 'button' );
	    goButton.innerText = "Click";
	    goButton.onclick = function() {
	      this.displayForm( "Hotels" );
	    }.bind( this );
	
	    var backButton = document.createElement( 'button' );
	    backButton.innerText = "Back";
	    backButton.onclick = function() {
	      this.displayGifts() 
	    }.bind( this );
	
	    giftSpace.style.display = "block";
	
	    giftSpace.appendChild( title );
	    giftSpace.appendChild( dotsSeven );
	    giftSpace.appendChild( text );
	    giftSpace.appendChild( goButton );
	    giftSpace.appendChild( backButton );
	  },
	
	  displayDrinks: function() {
	    var giftSpace = document.getElementById( 'gift-space' );
	    giftSpace.style.display = "none";
	
	    while( giftSpace.hasChildNodes() ) {
	      giftSpace.removeChild( giftSpace.lastChild );
	    }
	
	    var title = document.createElement( 'h1' );
	    title.innerText = "Drinks on the Beach";
	    title.className = "circleTitle";
	
	    var dotsEight = document.createElement( 'p' );
	    dotsEight.innerText = "--------------------------------"
	
	    var text = document.createElement( 'h5' );
	    text.innerText = "For those of you who know Laura you'll be aware that relaxing on the beach is pretty important to her so any help to do it in style would be amazing. \n\n If you'd like to help with this then give this a click."
	
	    var goButton = document.createElement( 'button' );
	    goButton.innerText = "Click";
	    goButton.onclick = function() {
	      this.displayForm( "Drinks" );
	    }.bind( this );
	
	    var backButton = document.createElement( 'button' );
	    backButton.innerText = "Back";
	    backButton.onclick = function() {
	      this.displayGifts() 
	    }.bind( this );
	
	    giftSpace.style.display = "block";
	
	    giftSpace.appendChild( title );
	    giftSpace.appendChild( dotsEight );
	    giftSpace.appendChild( text );
	    giftSpace.appendChild( goButton );
	    giftSpace.appendChild( backButton );
	  },
	
	  displayFood: function() {
	    var giftSpace = document.getElementById( 'gift-space' );
	    giftSpace.style.display = "none";
	
	    while( giftSpace.hasChildNodes() ) {
	      giftSpace.removeChild( giftSpace.lastChild );
	    }
	
	    var title = document.createElement( 'h1' );
	    title.innerText = "Delicious Food";
	    title.className = "circleTitle";
	
	    var dotsNine = document.createElement( 'p' );
	    dotsNine.innerText = "--------------------------------"
	
	    var text = document.createElement( 'h5' );
	    text.innerText = "What would be the point in travelling half way round the world without sampling as much delicious food as possible? \n\n If you'd like to help with this then give this a click."
	
	    var goButton = document.createElement( 'button' );
	    goButton.innerText = "Click";
	    goButton.onclick = function() {
	      this.displayForm( "Food" );
	    }.bind( this );
	
	    var backButton = document.createElement( 'button' );
	    backButton.innerText = "Back";
	    backButton.onclick = function() {
	      this.displayGifts() 
	    }.bind( this );
	
	    giftSpace.style.display = "block";
	
	    giftSpace.appendChild( title );
	    giftSpace.appendChild( dotsNine );
	    giftSpace.appendChild( text );
	    giftSpace.appendChild( goButton );
	    giftSpace.appendChild( backButton );
	  },
	
	  displayForm: function( towardsValue ) {
	    var giftSpace = document.getElementById( 'gift-space' );
	    giftSpace.style.display = "none";
	
	    while( giftSpace.hasChildNodes() ) {
	      giftSpace.removeChild( giftSpace.lastChild );
	    }
	
	    giftSpace.style.display = "block";
	
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
	      this.displayGifts();
	    }.bind( this );
	
	    var brOne = document.createElement( 'br' );
	    var brTwo = document.createElement( 'br' );
	    var brThree = document.createElement( 'br' );
	
	    giftSpace.appendChild( title );
	    giftSpace.appendChild( dotsThree );
	    giftSpace.appendChild( name );
	    giftSpace.appendChild( email );
	    giftSpace.appendChild( brOne );
	    giftSpace.appendChild( brTwo );
	    giftSpace.appendChild( message );
	    giftSpace.appendChild( brThree );
	    giftSpace.appendChild( button );
	    giftSpace.appendChild( backButton );
	  },
	
	  displayThankYou: function() {
	    var giftSpace = document.getElementById( 'gift-space' );
	    giftSpace.style.display = "none";
	
	    while( giftSpace.hasChildNodes() ) {
	      giftSpace.removeChild( giftSpace.lastChild );
	    }
	
	    var thankYou = document.createElement( 'h1' );
	    thankYou.className = "circleTitle";
	    thankYou.innerText = "Thank you very much";
	    giftSpace.style.display = "block";
	
	    giftSpace.appendChild( thankYou );
	  },
	
	  displayFlightPick: function() {
	
	    var giftSpaced = document.getElementById( 'gift-space' );
	    giftSpaced.style.display = "none";
	
	    while( giftSpaced.hasChildNodes() ) {
	      giftSpaced.removeChild( giftSpaced.lastChild );
	    }
	
	    var giftSpace = document.getElementById( 'gift-list' );
	    giftSpace.style.display = "block";
	
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
	    leaveUnit.innerText = "Unit Price: £" + cost;
	
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
	
	    var leaveButton = document.createElement( 'button' );
	    leaveButton.innerText = "Give...";
	    leaveButton.onclick = function() {
	        this.displayForm( "Flights" );
	        }.bind( this ); 
	
	    var leaveText = document.createElement( 'h5' );
	    leaveText.innerText = "Flights to Hawaii";
	
	    giftSpace.appendChild( flightListOne );
	
	    leaveList.appendChild( leave );
	    leaveList.appendChild( leaveUnit );
	    leaveList.appendChild( leaveAvail );
	    leaveList.appendChild( leaveSelect );
	    leaveList.appendChild( leaveSelectValue );
	    leaveList.appendChild( leaveButton );
	    leaveList.appendChild( leaveText );
	
	    flightListOne.appendChild( leaveList );
	
	// ######################################################
	
	    var returnFlightList = document.createElement( 'li' );
	
	    var returnFlight = document.createElement( 'img' );
	    returnFlight.src = "../css/image/plane.png";
	    returnFlight.id = "returnFlightImg";
	    returnFlight.className = "giftImage";
	
	    var cost = 100
	    var returnFlightUnit = document.createElement( 'h5' );
	    returnFlightUnit.innerText = "Unit Price: £" + cost;
	
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
	
	    var returnButton = document.createElement( 'button' );
	    returnButton.innerText = "Give...";
	    returnButton.onclick = function() {
	        this.displayForm( "Flights" );
	    }.bind( this );
	
	    var returnText = document.createElement( 'h5' );
	    returnText.innerText = "Flights back home";
	
	    giftSpace.appendChild( flightListOne );
	
	    returnFlightList.appendChild( returnFlight );
	    returnFlightList.appendChild( returnFlightUnit );
	    returnFlightList.appendChild( returnFlightAvail );
	    returnFlightList.appendChild( returnFlightSelect );
	    returnFlightList.appendChild( returnFlightSelectValue );
	    returnFlightList.appendChild( returnButton );
	    returnFlightList.appendChild( returnText );
	
	    // flightListOne.appendChild( returnFlightList );
	
	    // ##################################################
	
	    var bigIslandFlightList = document.createElement( 'li' );
	
	    var bigIslandFlight = document.createElement( 'img' );
	    bigIslandFlight.src = "../css/image/plane.png";
	    bigIslandFlight.id = "returnFlightImg";
	    bigIslandFlight.className = "giftImage";
	
	    var cost = 100;
	
	    var bigIslandFlightUnit = document.createElement( 'h5' );
	    bigIslandFlightUnit.innerText = "Unit Price: £" + cost;
	
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
	
	    var bigIslandButton = document.createElement( 'button' );
	    bigIslandButton.innerText = "Give...";
	    bigIslandButton.onclick = function() {
	        this.displayForm( "Flights" );
	    }.bind( this );
	
	    var bigIslandText = document.createElement( 'h5' );
	    bigIslandText.innerText = "Big Island to Maui";
	
	    bigIslandFlightList.appendChild( bigIslandFlight );
	    bigIslandFlightList.appendChild( bigIslandFlightUnit );
	    bigIslandFlightList.appendChild( bigIslandFlightAvail );
	    bigIslandFlightList.appendChild( bigIslandFlightSelect );
	    bigIslandFlightList.appendChild( bigIslandFlightSelectValue );
	    bigIslandFlightList.appendChild( bigIslandButton );
	    bigIslandFlightList.appendChild( bigIslandText );
	
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
	    mauiFlightUnit.innerText = "Unit Price: £" + cost;
	
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
	
	    var mauiButton = document.createElement( 'button' );
	    mauiButton.innerText = "Give...";
	    mauiButton.onclick = function() {
	        this.displayForm( "Flights" );
	    }.bind( this );
	
	    var mauiText = document.createElement( 'h5' );
	    mauiText.innerText = "Maui to Kauai";
	
	    mauiFlightList.appendChild( mauiFlight );
	    mauiFlightList.appendChild( mauiFlightUnit );
	    mauiFlightList.appendChild( mauiFlightAvail );
	    mauiFlightList.appendChild( mauiFlightSelect );
	    mauiFlightList.appendChild( mauiFlightSelectValue );
	    mauiFlightList.appendChild( mauiButton );
	    mauiFlightList.appendChild( mauiText );
	
	    // ###################################################
	
	    var kauaiFlightList = document.createElement( 'li' );
	
	    var kauaiFlight = document.createElement( 'img' );
	    kauaiFlight.src = "../css/image/plane.png";
	    kauaiFlight.id = "returnFlightImg";
	    kauaiFlight.className = "giftImage";
	
	    var cost = 100;
	
	    var kauaiFlightUnit = document.createElement( 'h5' );
	    kauaiFlightUnit.innerText = "Unit Price: £" + cost;
	
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
	
	    var kauaiButton = document.createElement( 'button' );
	    kauaiButton.innerText = "Give...";
	    kauaiButton.onclick = function() {
	        this.displayForm( "Flights" );
	    }.bind( this );
	
	    var kauaiText = document.createElement( 'h5' );
	    kauaiText.innerText = "Kauai to Honolulu";
	
	    kauaiFlightList.appendChild( kauaiFlight );
	    kauaiFlightList.appendChild( kauaiFlightUnit );
	    kauaiFlightList.appendChild( kauaiFlightAvail );
	    kauaiFlightList.appendChild( kauaiFlightSelect );
	    kauaiFlightList.appendChild( kauaiFlightSelectValue );
	    kauaiFlightList.appendChild( kauaiButton );
	    kauaiFlightList.appendChild( kauaiText );
	
	    flightListOne.appendChild( kauaiFlightList );
	    flightListTwo.appendChild( mauiFlightList );
	    flightListTwo.appendChild( returnFlightList );
	
	    giftSpace.appendChild( flightListTwo );
	
	    giftSpace.style.display = "block";
	  }
	}
	
	module.exports = EnglishFlightsView;

/***/ }
/******/ ]);
//# sourceMappingURL=bundle.js.map