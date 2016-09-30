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
/******/ ({

/***/ 0:
/***/ function(module, exports, __webpack_require__) {

	var EnglishHomeView = __webpack_require__( 5 );
	var NavView = __webpack_require__( !(function webpackMissingModule() { var e = new Error("Cannot find module \"./views/NavView\""); e.code = 'MODULE_NOT_FOUND'; throw e; }()) )
	
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

/***/ 5:
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

/***/ }

/******/ });
//# sourceMappingURL=bundle.js.map