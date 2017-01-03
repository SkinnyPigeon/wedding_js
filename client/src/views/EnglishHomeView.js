var EnglishHomeView = function() {
  this.display();
}

EnglishHomeView.prototype = {

  display: function() {
    var homeSpace = document.getElementById( 'home-space' );
    homeSpace.innerText = "";
    var welcome = document.createElement( 'h1' );
    welcome.innerText = "Hello";
    var text = document.createElement( 'h5' );
    text.innerText = "Thanks for visiting the site. Hopefully you'll find some useful information throughout. If you have any other questions then feel free to ping us an email via the Contact page. Also feel free to say hello through the Comments page."
    homeSpace.appendChild( welcome );
    homeSpace.appendChild( text );
  },

}

module.exports = EnglishHomeView;