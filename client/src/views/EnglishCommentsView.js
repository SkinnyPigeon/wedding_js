var EnglishCommentsView = function() {
  this.comments = [];
  this.url = "http://localhost:5000/comments.json";
  this.getComments();
  this.createForm();
}

EnglishCommentsView.prototype = {

  display: function() {
    var commentSpace = document.getElementById( 'comment-space' );
    var list = document.createElement( 'ul' );
    commentSpace.appendChild( list );
    for( var i = 0; i < this.comments.length; i++ ) {
      var comment = document.createElement( 'li' );
      var text = this.comments[i].name + " - " + this.comments[i].comment;
      comment.innerText = text;
      list.appendChild( comment );
    }
  },

  getComments: function() {
    var request = new XMLHttpRequest();
    request.open( 'GET', this.url );
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

    var comment = document.createElement( 'input' );
    comment.type = 'input';
    comment.placeHolder = 'Please add your comment';

    var button = document.createElement( 'button' );
    button.innerText = 'Add Comment';

    commentSpace.appendChild( name );
    commentSpace.appendChild( comment );
    commentSpace.appendChild( button );

    button.onclick = function() {
      this.addComment( name.value, comment.value );
    }.bind( this )
  },

  addComment: function( name, comment ) {
    var request = new XMLHttpRequest()
    request.open( 'POST', this.url )
    request.onload = () => {
      if( request.status === 201 ) {
        this.getComments();
      }
    }
    var data = {
      comment: {
        name: name,
        comment: comment
      }
    }
    console.log( data );
    request.send( JSON.stringify( data ));
  },
}

module.exports = EnglishCommentsView;













