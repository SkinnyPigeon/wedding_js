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
	    welcome.className = "circleTitle";
	    welcome.innerText = "We are getting married";
	
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
/* 2 */
/***/ function(module, exports, __webpack_require__) {

	var EnglishHomeView = __webpack_require__( 1 );
	var EnglishVenueView = __webpack_require__( 3 );
	var EnglishBusView = __webpack_require__( 4 );
	var EnglishMapView = __webpack_require__( 5 );
	var EnglishCommentsView = __webpack_require__( 6 );
	var EnglishContactView = __webpack_require__( 7 );
	
	var SpanishHomeView = __webpack_require__( 8 );
	var SpanishMapView = __webpack_require__( 9 );
	var SpanishCommentsView = __webpack_require__( 10 );
	var SpanishContactView = __webpack_require__( 11 );
	
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
	    hotels.innerText = "Hotels"
	    hotels.onclick = function() {
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
	    navSpace.appendChild( comments );
	    navSpace.appendChild( hotels );
	    navSpace.appendChild( bus );
	    navSpace.appendChild( venue );
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
	    navSpace.appendChild( comments );
	    navSpace.appendChild( map );
	    navSpace.appendChild( home );
	    navSpace.appendChild( flag );
	
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
	
	    var venueSpace = document.getElementById( 'venue-space' );
	    venueSpace.style.display = "none";
	
	    var hotelSpace = document.getElementById( 'hotel-space' );
	    hotelSpace.style.display = "none";
	
	    var busSpace = document.getElementById( 'bus-space')
	    busSpace.style.display = "none";
	
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
	
	    var slackTitle = document.createElement( 'h1' );
	    slackTitle.innerText = "How To Share Your Photos"
	
	    var slackText = document.createElement( 'h5' );
	    slackText.innerText = "We would love for you to share your pictures of the ceremony and party with all of us. \n\n If you'd like to join in then send us your email address and we'll invite you to join a group in an app called Slack. It's free and private. All you have to do is post the photos you take to the channel in Slack and we'll all get to see them on the big screen in the venue."
	
	    venueSpace.appendChild( title );
	    venueSpace.appendChild( dotsOne );
	    venueSpace.appendChild( text );
	    venueSpace.appendChild( address );
	    venueSpace.appendChild( slackTitle );
	    venueSpace.appendChild( dotsTwo );
	    venueSpace.appendChild( slackText );
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
/* 5 */
/***/ function(module, exports) {

	var EnglishMapView = function() {
	  this.center = { lat: 38.0823114, lng: -0.8337589 };
	  this.map = new google.maps.Map( document.getElementById( 'map' ), {
	    center: this.center,
	    zoom: 11,
	    scrollwheel: false,
	    navigationControl: false,
	    mapTypeControl: false,
	    scaleControl: false,
	    streetViewControl: false
	  })
	
	  this.display();
	  this.displayPalacioDeTudemir();
	  this.displayHostalReyTeodomiro();
	  this.displayLosPalacios();
	  this.displayLaLaguna();
	  this.displayVenue();
	
	}
	
	EnglishMapView.prototype = {
	
	  display: function() {
	    var hotelSpace = document.getElementById( 'hotel-space' );
	    hotelSpace.innerText = "";
	
	    var title = document.createElement( 'h1' );
	    title.className = "circleTitle";
	    title.innerText = "Hotels";
	
	    var dotsOne = document.createElement( 'p' );
	    dotsOne.innerText = "--------------------------------"
	
	    var text = document.createElement( 'h5' );
	    text.innerText = "For those of you who are travelling in from out of town or just looking for somewhere a bit closer to the venue we have picked a couple places that you might be interested in. \n\n Orihuela is a large and lovely town that's home to Laura's family and has got a great selection of places to eat, drink and enjoy. It's also got the Hotel Palacio de Tudemir that's happy to give us a discount if we block book 10 rooms so let us know if you fancy booking there and we'll get it all set up. \n\n For those looking for an even easier life on the day of the wedding there are a couple that are very close to the venue. The venue is marked as green on the map below";
	
	    hotelSpace.appendChild( title );
	    hotelSpace.appendChild( dotsOne );
	    hotelSpace.appendChild( text );
	  },
	
	  displayPalacioDeTudemir: function() {
	    var palacioDeTudemir = new google.maps.Marker({
	      position: { lat: 38.0859664, lng: -0.9447066 },
	      map: this.map,
	      animation: google.maps.Animation.DROP,
	      title: 'Palacio de Tudemir',
	      icon: 'http://maps.google.com/mapfiles/ms/icons/blue-dot.png'
	    });
	
	    var palacioDeTumedirInfo = new google.maps.InfoWindow({
	      content: "<a href='http://www.hotelpalaciotudemir.com/en' target='_blank'>Hotel de Tumedir</a>"
	    });
	
	    palacioDeTudemir.addListener( 'click', function() {
	      palacioDeTumedirInfo.open( this.map, palacioDeTudemir )
	    })
	  },
	
	  displayHostalReyTeodomiro: function() {
	    var hostalReyTeodomiro = new google.maps.Marker({
	      position: { lat: 38.0818911, lng: -0.9478066 },
	      map: this.map,
	      animation: google.maps.Animation.DROP,
	      title: 'Hostal Rey Teodomiro',
	      icon: 'http://maps.google.com/mapfiles/ms/icons/blue-dot.png'
	    });
	
	    var hostalReyTeodomiroInfo = new google.maps.InfoWindow({
	      content: "<a href='http://www.hostalreyteodomiro.eu/' target='_blank'>Hostal Rey Teodomiro</a>"
	    });
	
	    hostalReyTeodomiro.addListener( 'click', function() {
	      hostalReyTeodomiroInfo.open( this.map, hostalReyTeodomiro )
	    })
	  },
	
	  displayLosPalacios: function() {
	    var losPalacios = new google.maps.Marker({
	      position: { lat: 38.0881009, lng: -0.7291746 },
	      map: this.map,
	      animation: google.maps.Animation.DROP,
	      title: 'Los Palacios',
	      icon: 'http://maps.google.com/mapfiles/ms/icons/blue-dot.png'
	    });
	
	    var losPalaciosInfo = new google.maps.InfoWindow({
	      content: "<a href='https://goo.gl/0OhSGS' target='_blank'>Los Palacios - This is a 10 minute walk from the venue</a>"
	    });
	
	    losPalacios.addListener( 'click', function() {
	      losPalaciosInfo.open( this.map, losPalacios )
	    })
	  },
	
	  displayLaLaguna: function() {
	    var laLaguna = new google.maps.Marker({
	      position: { lat: 38.0494904, lng: -0.7132986 },
	      map: this.map,
	      animation: google.maps.Animation.DROP,
	      title: 'Hotel La Laguna',
	      icon: 'http://maps.google.com/mapfiles/ms/icons/blue-dot.png'
	    });
	
	    var laLagunaInfo = new google.maps.InfoWindow({
	      content: "<a href='http://www.hotellalaguna.com/en' target='_blank'>La Laguna - This is a 10 minute taxi or drive from the venue</a>"
	    });
	
	    laLaguna.addListener( 'click', function() {
	      laLagunaInfo.open( this.map, laLaguna )
	    })
	  },
	
	  displayVenue: function() {
	    var salone = new google.maps.Marker({
	      position: { lat: 38.085552, lng: -0.729775 },
	      map: this.map,
	      animation: google.maps.Animation.DROP,
	      title: 'Salone Canario',
	      icon: 'http://maps.google.com/mapfiles/ms/icons/green-dot.png'
	    });
	
	    var saloneInfo = new google.maps.InfoWindow({
	      content: "<a href='http://www.salonescanario.com/' target='_blank'>Salones Canario - The Venue</a>"
	    });
	
	    salone.addListener( 'click', function() {
	      saloneInfo.open( this.map, salone )
	    })
	  }
	}
	
	module.exports = EnglishMapView;

/***/ },
/* 6 */
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
	      list.appendChild( comment );
	    }
	  },
	
	  getComments: function() {
	
	    setInterval( function() {
	      if( this.comments.length === 0 ) {
	        this.displayLoading()
	        console.log( "Hello" );
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
	
	    commentSpace.appendChild( title );
	    commentSpace.appendChild( dotsOne );
	    commentSpace.appendChild( name );
	    commentSpace.appendChild( comment );
	    commentSpace.appendChild( button );
	
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
/* 7 */
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
	    info.innerText = "Hey guys. We really hope you can join us on the 1st of April 2017 for a day of good weather, good food and of course helping us celebrate our love. If you have any questions please drop us a shout."
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
/* 8 */
/***/ function(module, exports) {

	var SpanishHomeView = function() {
	  this.display();
	}
	
	SpanishHomeView.prototype = {
	
	  display: function() {
	    var homeSpace = document.getElementById( 'home-space' );
	    homeSpace.innerText = "";
	    var welcome = document.createElement( 'h1' );
	    welcome.innerText = "Hola";
	    homeSpace.appendChild( welcome );
	  },
	
	}
	
	module.exports = SpanishHomeView;

/***/ },
/* 9 */
/***/ function(module, exports) {

	var SpanishMapView = function() {
	  this.center = { lat: 38.1976052, lng: -0.6143937 };
	  this.map = new google.maps.Map( document.getElementById( 'map' ), {
	    center: this.center,
	    zoom: 10
	  })
	
	  this.displayPalacioAlicante();
	  this.displayLosPalacios();
	  this.displayLaLaguna();
	}
	
	SpanishMapView.prototype = {
	
	  displayPalacioAlicante: function() {
	    var palacioAlicante = new google.maps.Marker({
	      position: { lat: 38.3960059, lng: -0.5277508 },
	      map: this.map,
	      animation: google.maps.Animation.DROP,
	      title: 'Palacio de Tudemir'
	    });
	
	    var palacioAlicanteInfo = new google.maps.InfoWindow({
	      content: "<a href='http://www.hotelpalaciotudemir.com/es' target='_blank'>Palacio De Tumemir</a>"
	    });
	
	    palacioAlicante.addListener( 'click', function() {
	      palacioAlicanteInfo.open( this.map, palacioAlicante )
	    })
	  },
	
	  displayLosPalacios: function() {
	    var losPalacios = new google.maps.Marker({
	      position: { lat: 38.0881009, lng: -0.7291746 },
	      map: this.map,
	      animation: google.maps.Animation.DROP,
	      title: 'Los Palacios'
	    });
	
	    var losPalaciosInfo = new google.maps.InfoWindow({
	      content: "<a href='https://goo.gl/y9SDUI' target='_blank'>Los Palacios</a>"
	    });
	
	    losPalacios.addListener( 'click', function() {
	      losPalaciosInfo.open( this.map, losPalacios )
	    })
	  },
	
	  displayLaLaguna: function() {
	    var laLaguna = new google.maps.Marker({
	      position: { lat: 38.0494904, lng: -0.7132986 },
	      map: this.map,
	      animation: google.maps.Animation.DROP,
	      title: 'Hotel La Laguna'
	    });
	
	    var laLagunaInfo = new google.maps.InfoWindow({
	      content: "<a href='http://www.hotellalaguna.com/' target='_blank'>La Laguna</a>"
	    });
	
	    laLaguna.addListener( 'click', function() {
	      laLagunaInfo.open( this.map, laLaguna )
	    })
	  },
	}
	
	module.exports = SpanishMapView;

/***/ },
/* 10 */
/***/ function(module, exports) {

	var SpanishCommentsView = function() {
	  this.comments = [];
	  // this.url = "http://localhost:5000/comments.json";
	  // this.url = "https://pacific-fortress-75674.herokuapp.com/";
	  this.url = "https://wedding-comments.herokuapp.com/";
	  this.getComments();
	}
	
	SpanishCommentsView.prototype = {
	
	  display: function() {
	    this.createForm();
	    var commentSpace = document.getElementById( 'comment-space' );
	    var list = document.createElement( 'ul' );
	    commentSpace.appendChild( list );
	    for( var i = 0; i < this.comments.length; i++ ) {
	      var comment = document.createElement( 'li' );
	      var text = this.comments[i].name + " - " + this.comments[i].comment_text;
	      comment.innerText = text;
	      list.appendChild( comment );
	    }
	  },
	
	  getComments: function() {
	    var commentSpace = document.getElementById( 'comment-space' );
	    commentSpace.innerText = "";
	    var request = new XMLHttpRequest();
	    request.open( 'GET', this.url );
	    request.setRequestHeader("Content-Type", "application/json")
	    request.onload = () => {
	      if( request.status === 200 ) {
	        var comments = JSON.parse( request.responseText );
	        this.comments = comments;
	        this.display();
	      }
	    }
	    request.send( null );
	  },
	
	  createForm: function() {
	    var commentSpace = document.getElementById( 'comment-space' );
	
	    var title = document.createElement( 'h2' );
	    title.innerText = "Come and say hola";
	
	    var name = document.createElement( 'input' );
	    name.type = 'text';
	    name.placeholder = 'Nombre...';
	    name.id = 'name';
	
	    var comment = document.createElement( 'input' );
	    comment.type = 'input';
	    comment.placeholder = 'Agregue su comentario por favor...';
	    comment.setAttribute('size',comment.getAttribute('placeholder').length);
	    comment.id = 'comment';
	
	    var button = document.createElement( 'button' );
	    button.innerText = 'Agregar Comentario';
	
	    commentSpace.appendChild( title );
	    commentSpace.appendChild( name );
	    commentSpace.appendChild( comment );
	    commentSpace.appendChild( button );
	
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
	}
	
	module.exports = SpanishCommentsView;

/***/ },
/* 11 */
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
	
	    var welcome = document.createElement( 'h1' );
	    welcome.innerText = "General Information";
	    primary.appendChild( welcome );
	
	    var info = document.createElement( 'p' );
	    info.innerText = "Hola guys. We really hope you can join us on the 1st of April 2017 for a day of good weather, good food and of course helping us celebrate our love. If you have any questions please drop us a shout."
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
	    contact.appendChild( email );
	    contact.appendChild( address );
	
	    contactSpace.appendChild( primary );
	    contactSpace.appendChild( secondary );
	  },
	
	}
	
	module.exports = EnglishContactView;

/***/ }
/******/ ]);
//# sourceMappingURL=bundle.js.map