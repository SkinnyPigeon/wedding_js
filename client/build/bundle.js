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

	var EnglishHomeView = __webpack_require__( 5 );
	var NavView = __webpack_require__( 10 )
	
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
/* 1 */,
/* 2 */
/***/ function(module, exports) {

	var EnglishCommentsView = function() {
	  this.comments = [];
	  this.url = "http://localhost:5000/comments.json";
	  this.getComments();
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
	
	module.exports = EnglishCommentsView;
	
	
	
	
	
	
	
	
	
	
	
	
	


/***/ },
/* 3 */
/***/ function(module, exports) {

	var EnglishMapView = function() {
	  this.center = { lat: 38.1976052, lng: -0.6143937 };
	  this.map = new google.maps.Map( document.getElementById( 'map' ), {
	    center: this.center,
	    zoom: 10
	  })
	
	  this.displayPalacioAlicante();
	  this.displayLosPalacios();
	  this.displayLaLaguna();
	
	}
	
	EnglishMapView.prototype = {
	
	  displayPalacioAlicante: function() {
	    var palacioAlicante = new google.maps.Marker({
	      position: { lat: 38.3960059, lng: -0.5277508 },
	      map: this.map,
	      animation: google.maps.Animation.DROP,
	      title: 'Palacio de Tudemir'
	    });
	
	    var palacioAlicanteInfo = new google.maps.InfoWindow({
	      content: "<a href='http://www.hotelpalaciotudemir.com/en' target='_blank'>Hotel Palacio</a>"
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
	      content: "<a href='https://goo.gl/0OhSGS' target='_blank'>Los Palacios</a>"
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
	      content: "<a href='http://www.hotellalaguna.com/en' target='_blank'>La Laguna</a>"
	    });
	
	    laLaguna.addListener( 'click', function() {
	      laLagunaInfo.open( this.map, laLaguna )
	    })
	  },
	}
	
	module.exports = EnglishMapView;
	


/***/ },
/* 4 */,
/* 5 */
/***/ function(module, exports) {

	var EnglishHomeView = function() {
	  this.display();
	}
	
	EnglishHomeView.prototype = {
	
	  display: function() {
	    var homeSpace = document.getElementById( 'home-space' );
	    homeSpace.innerText = "";
	    var welcome = document.createElement( 'h1' );
	    welcome.innerText = "Hello";
	    homeSpace.appendChild( welcome );
	  },
	
	}
	
	module.exports = EnglishHomeView;

/***/ },
/* 6 */
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
/* 7 */,
/* 8 */
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
/* 9 */
/***/ function(module, exports) {

	var SpanishCommentsView = function() {
	  this.comments = [];
	  this.url = "http://localhost:5000/comments.json";
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
/* 10 */
/***/ function(module, exports, __webpack_require__) {

	var EnglishHomeView = __webpack_require__( 5 );
	var EnglishMapView = __webpack_require__( 3 );
	var EnglishCommentsView = __webpack_require__( 2 );
	
	var SpanishHomeView = __webpack_require__( 6 );
	var SpanishMapView = __webpack_require__( 8 );
	var SpanishCommentsView = __webpack_require__( 9 );
	
	function EnglishNavView() {
	  this.displayEnglish();
	}
	
	EnglishNavView.prototype = {
	
	  displayEnglish: function() {
	    var navSpace = document.getElementById( 'nav-space' );
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
	
	    navSpace.appendChild( map );
	    navSpace.appendChild( comments );
	    navSpace.appendChild( home );
	    navSpace.appendChild( flag );
	
	  },
	
	  displaySpanish: function() {
	    var navSpace = document.getElementById( 'nav-space' );
	    var navList = document.createElement( 'ul' );
	    navList.id = 'nav';
	
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

/***/ }
/******/ ]);
//# sourceMappingURL=bundle.js.map