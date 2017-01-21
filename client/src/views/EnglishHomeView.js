var EnglishHomeView = function() {
  this.display();
}

EnglishHomeView.prototype = {

  display: function() {
    var homeSpace = document.getElementById( 'home-space' );
    homeSpace.innerText = "";

    var welcome = document.createElement( 'h1' );
    welcome.className = "circleTitleRaised";
    welcome.innerText = "Welcome to our website";

    var dotsOne = document.createElement( 'p' );
    dotsOne.innerText = "--------------------------------"

    var dotsTwo = document.createElement( 'p' );
    dotsTwo.innerText = "--------------------------------"

    var text = document.createElement( 'h5' );
    text.innerText = "Here you’ll find everything you’ll need to get to our wedding and more. \n\n Drop by our guest book to say hello or go to the venue page to find information about the venue location and a way to share photos on the big day. \n\n For those of you travelling in from out of town you’ll find some suggested hotels and information about the bus that’ll be running from Orihuela to the venue. \n\n Some of you have already asked us what we would like in the way of presents. For those so inclined you can find some ideas in the gift section. \n\n Please RSVP through the website. You can also confirm if you’ll need the bus on that page."

    var message = document.createElement( 'h5' );
    message.innerText = "We hope to see you all there on the 1st of April at half past twelve.";
    message.id = "message";

    var us = document.createElement( 'h1' );
    us.innerText = "Laura & Euan";

    var language = document.createElement( 'h1' );
    language.innerText = "Cambiar de idioma";

    var languageText = document.createElement( 'h5' );
    languageText.innerText = "Pulsa en la bandera para cambiar el idioma."

    homeSpace.appendChild( welcome );
    homeSpace.appendChild( dotsOne );
    homeSpace.appendChild( text );
    homeSpace.appendChild( message );
    homeSpace.appendChild( us );
    homeSpace.appendChild( languageText );
  },

}

module.exports = EnglishHomeView;