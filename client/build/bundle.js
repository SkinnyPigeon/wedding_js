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

	var EnglishNavView = __webpack_require__( 4 );
	var EnglishHomeView = __webpack_require__( 5 );
	var SpanishHomeView = __webpack_require__( 6 );
	var SpanishNavView = __webpack_require__( 7 );
	
	window.onload = function() {
	  main();
	}
	
	var main = function() {
	  displayNav();
	  displayHome();
	}
	
	var displayNav = function() {
	  var view = new EnglishNavView();
	  // var view = new SpanishNavView();
	}
	
	var displayHome = function() {
	  var view = new EnglishHomeView();
	  // var view = new SpanishHomeView();
	
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
	        console.log( this.comments );
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
	    comment.placeholder = 'Please add your comment';
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
	      console.log( this.url );
	      request.onload = () => {
	        this.getComments();
	        console.log( "Added" );
	      }
	      var data = {
	        comment: {
	          name: name.value,
	          comment_text: comment.value
	        }
	      }
	      console.log( data );
	      request.send( JSON.stringify( data ));
	    }.bind( this )
	  },
	}
	
	module.exports = EnglishCommentsView;
	
	
	
	
	
	
	
	
	
	
	
	
	


/***/ },
/* 3 */
/***/ function(module, exports) {

	var EnglishMapView = function() {
	  this.center = { lat: 38.0881009, lng: -0.7291746 };
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
	      title: 'Palacio de Tudemir'
	    });
	
	    var palacioAlicanteInfo = new google.maps.InfoWindow({
	      content: "http://www.hotelpalaciotudemir.com/en"
	    });
	
	    palacioAlicante.addListener( 'click', function() {
	      palacioAlicanteInfo.open( this.map, palacioAlicante )
	    })
	  },
	
	  displayLosPalacios: function() {
	    var losPalacios = new google.maps.Marker({
	      position: { lat: 38.0881009, lng: -0.7291746 },
	      map: this.map,
	      title: 'Los Palacios'
	    });
	
	    var losPalaciosInfo = new google.maps.InfoWindow({
	      content: "https://goo.gl/0OhSGS"
	    });
	
	    losPalacios.addListener( 'click', function() {
	      losPalaciosInfo.open( this.map, losPalacios )
	    })
	  },
	
	  displayLaLaguna: function() {
	    var laLaguna = new google.maps.Marker({
	      position: { lat: 38.0494904, lng: -0.7132986 },
	      map: this.map,
	      title: 'Hotel La Laguna'
	    });
	
	    var laLagunaInfo = new google.maps.InfoWindow({
	      content: "http://www.hotellalaguna.com/en/"
	    });
	
	    laLaguna.addListener( 'click', function() {
	      laLagunaInfo.open( this.map, laLaguna )
	    })
	  },
	}
	
	module.exports = EnglishMapView;
	


/***/ },
/* 4 */
/***/ function(module, exports, __webpack_require__) {

	var EnglishHomeView = __webpack_require__( 5 );
	var EnglishMapView = __webpack_require__( 3 );
	var EnglishCommentsView = __webpack_require__( 2 );
	
	var SpanishNavView = __webpack_require__( 7 );
	var SpanishHomeView = __webpack_require__( 6 );
	
	function EnglishNavView() {
	  this.display();
	}
	
	EnglishNavView.prototype = {
	
	  display: function() {
	    var navSpace = document.getElementById( 'nav-space' );
	    var navList = document.createElement( 'ul' );
	    navList.id = 'nav';
	
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
	
	    var flag = document.createElement( 'li' );
	    flag.innerHTML = "<img src='./css/image/spain.png' >";
	    flag.onclick = function() {
	      this.changeToSpanish();
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
	
	  changeToSpanish: function() {
	    this.changeLanguage();
	    var navView = new SpanishNavView();
	    var homeView = new SpanishHomeView();
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
	
	module.exports = EnglishNavView;

/***/ },
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
/* 7 */
/***/ function(module, exports, __webpack_require__) {

	var SpanishHomeView = __webpack_require__( 6 );
	var SpanishMapView = __webpack_require__( 8 );
	var SpanishCommentsView = __webpack_require__( 9 );
	
	var EnglishNavView = __webpack_require__( 4 );
	var EnglishHomeView = __webpack_require__( 5 );
	
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

/***/ },
/* 8 */
/***/ function(module, exports) {

	var SpanishMapView = function() {
	  this.center = { lat: 38.0881009, lng: -0.7291746 };
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
	      title: 'Palacio de Tudemir'
	    });
	
	    var palacioAlicanteInfo = new google.maps.InfoWindow({
	      content: "http://www.hotelpalaciotudemir.com/en"
	    });
	
	    palacioAlicante.addListener( 'click', function() {
	      palacioAlicanteInfo.open( this.map, palacioAlicante )
	    })
	  },
	
	  displayLosPalacios: function() {
	    var losPalacios = new google.maps.Marker({
	      position: { lat: 38.0881009, lng: -0.7291746 },
	      map: this.map,
	      title: 'Los Palacios'
	    });
	
	    var losPalaciosInfo = new google.maps.InfoWindow({
	      content: "https://goo.gl/0OhSGS"
	    });
	
	    losPalacios.addListener( 'click', function() {
	      losPalaciosInfo.open( this.map, losPalacios )
	    })
	  },
	
	  displayLaLaguna: function() {
	    var laLaguna = new google.maps.Marker({
	      position: { lat: 38.0494904, lng: -0.7132986 },
	      map: this.map,
	      title: 'Hotel La Laguna'
	    });
	
	    var laLagunaInfo = new google.maps.InfoWindow({
	      content: "http://www.hotellalaguna.com/en/"
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
	        console.log( this.comments );
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
	    comment.placeholder = 'Agregue su comentario por favor';
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
	      console.log( this.url );
	      request.onload = () => {
	        this.getComments();
	        console.log( "Added" );
	      }
	      var data = {
	        comment: {
	          name: name.value,
	          comment_text: comment.value
	        }
	      }
	      console.log( data );
	      request.send( JSON.stringify( data ));
	    }.bind( this )
	  },
	}
	
	module.exports = SpanishCommentsView;
	
	
	
	
	
	
	
	
	
	
	
	
	


/***/ }
/******/ ]);
//# sourceMappingURL=bundle.js.map