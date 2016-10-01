var SpanishCommentsView = function() {
  this.comments = [];
  // this.url = "http://localhost:5000/comments.json";
  this.url = "https://pacific-fortress-75674.herokuapp.com/";
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