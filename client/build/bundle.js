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
	var EnglishCommentsView = __webpack_require__( 2 );
	
	window.onload = function() {
	  main();
	}
	
	var main = function() {
	  displayNav();
	  displayComments();
	}
	
	var displayNav = function() {
	  var view = new EnglishNavView();
	}
	
	var displayComments = function() {
	  var view = new EnglishCommentsView();
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
	    name.placeHolder = 'Name...';
	    name.id = 'name';
	
	    var comment = document.createElement( 'input' );
	    comment.type = 'input';
	    comment.placeHolder = 'Please add your comment';
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

	var EnglishMapView = __webpack_require__( 3 );
	
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
	    home.onclick = function() {
	      this.displayHome();
	    }.bind( this );
	
	    var map = document.createElement( 'li' );
	    map.innerText = "Map"
	    map.onclick = function() {
	      this.displayMap();
	    }.bind( this );
	
	    navSpace.appendChild( home );
	    navSpace.appendChild( map );
	  },
	
	  displayHome: function() {
	    this.clear();
	  },
	
	  displayMap: function() {
	    this.clear();
	    var mapSpace = document.getElementById( 'map' );
	    mapSpace.style.display = "block";
	    var view = new EnglishMapView();
	  },
	
	  clear: function() {
	    var mapSpace = document.getElementById( 'map' );
	    mapSpace.style.display = "none";
	    var commentSpace = document.getElementById( 'comment-space' );
	    commentSpace.style.display = "none";
	  },
	
	}
	
	module.exports = EnglishNavView;

/***/ }
/******/ ]);
//# sourceMappingURL=bundle.js.map