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