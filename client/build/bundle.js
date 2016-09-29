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

	var EnglishCommentsView = __webpack_require__( 2 );
	
	window.onload = function() {
	  main();
	}
	
	var main = function() {
	  displayComments();
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
	
	
	
	
	
	
	
	
	
	
	
	
	


/***/ }
/******/ ]);
//# sourceMappingURL=bundle.js.map