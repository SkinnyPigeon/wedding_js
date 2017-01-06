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