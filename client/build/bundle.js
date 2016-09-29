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

	var CommentsView = __webpack_require__( 1 );
	
	window.onload = function() {
	  main();
	}
	
	var main = function() {
	  displayComments();
	}
	
	var displayComments = function() {
	  var view = new CommentsView();
	  view.display();
	}

/***/ },
/* 1 */
/***/ function(module, exports) {

	var CommentsView = function() {
	  this.comments = [];
	  this.url = "http://localhost:5000/comments.json";
	  this.getComments();
	}
	
	CommentsView.prototype = {
	
	  display: function() {
	
	  },
	
	  getComments: function() {
	    var request = new XMLHttpRequest();
	    request.open( 'GET', this.url );
	    // request.setRequestHeader( "Content-type", "application/json" );
	    // request.withCredentials = true;
	    request.onload = () => {
	      if( request.status === 200 ) {
	        var comments = JSON.parse( request.responseText );
	        this.comments = comments;
	        console.log( comments );
	      }
	    }
	    request.send( null );
	  },
	}
	
	module.exports = CommentsView;

/***/ }
/******/ ]);
//# sourceMappingURL=bundle.js.map