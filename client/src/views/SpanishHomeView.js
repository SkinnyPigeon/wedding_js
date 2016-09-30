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