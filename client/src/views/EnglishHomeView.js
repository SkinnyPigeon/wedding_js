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
    text.innerText = "Thanks for visiting the site. Hopefully you'll find some useful information throughout. If you have any other questions then feel free to ping us an email via the Contact page. Also come and say hello on the Comments page."

    var language = document.createElement( 'h1' );
    language.innerText = "Change Language";

    var languageText = document.createElement( 'h5' );
    languageText.innerText = "Click the flag at any point to change the language."

    homeSpace.appendChild( welcome );
    homeSpace.appendChild( text );
    homeSpace.appendChild( language );
    homeSpace.appendChild( languageText );
  },

}

module.exports = EnglishHomeView;