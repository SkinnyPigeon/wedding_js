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