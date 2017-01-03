var EnglishHomeView = function() {
  this.display();
}

EnglishHomeView.prototype = {

  display: function() {
    var homeSpace = document.getElementById( 'home-space' );
    homeSpace.innerText = "";
    // var welcome = document.createElement( 'h1' );
    // welcome.innerText = "Hello";
    var text = document.createElement( 'h3' );
    text.innerText = "Thanks for visiting the site. Hopefully you'll find some useful information throughout. If you have any other questions you have then feel free to ping us an email via through the Contact page. We'd actually love an up to date email address for you all. Also feel free to say hello through the Comments page."
    // homeSpace.appendChild( welcome );
    homeSpace.appendChild( text );
  },

}

module.exports = EnglishHomeView;