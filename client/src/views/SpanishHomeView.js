var EnglishHomeView = function() {
  this.display();
}

EnglishHomeView.prototype = {

  display: function() {
    var homeSpace = document.getElementById( 'home-space' );
    homeSpace.innerText = "";

    var welcome = document.createElement( 'h1' );
    welcome.className = "circleTitle";
    welcome.innerText = "Hola. We are getting married";

    var dotsOne = document.createElement( 'p' );
    dotsOne.innerText = "--------------------------------"

    var dotsTwo = document.createElement( 'p' );
    dotsTwo.innerText = "--------------------------------"

    var text = document.createElement( 'h5' );
    text.innerText = "and we wish to share with you \n our happiness on this special day. \n We would love for you to join us for the civil ceremony \n and the celebration which will take place on"

    var date = document.createElement( 'h1' );
    date.innerText = "Saturday 1st of April 2017";

    var time = document.createElement( 'h5' );
    time.innerText = "at half past twelve at";

    var venue = document.createElement( 'h5' );
    venue.id = "venue";
    venue.innerText = "Salones Canario en Rojales, Alicante."

    var us = document.createElement( 'h1' );
    us.innerText = "Laura & Euan";

    var language = document.createElement( 'h1' );
    language.innerText = "Change Language";

    var languageText = document.createElement( 'h5' );
    languageText.innerText = "Click the flag at any point to change the language."

    homeSpace.appendChild( welcome );
    homeSpace.appendChild( dotsOne );
    homeSpace.appendChild( text );
    homeSpace.appendChild( date );
    homeSpace.appendChild( time );
    homeSpace.appendChild( venue );
    homeSpace.appendChild( dotsTwo );
    homeSpace.appendChild( us );
    // homeSpace.appendChild( language );
    // homeSpace.appendChild( languageText );
  },

}

module.exports = EnglishHomeView;