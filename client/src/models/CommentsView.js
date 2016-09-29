var CommentsView = function() {
  this.comments = [];
  this.url = "http://localhost:5000/comments.json";
  this.getComments();
  this.createForm();
}

CommentsView.prototype = {

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

  },
}

module.exports = CommentsView;