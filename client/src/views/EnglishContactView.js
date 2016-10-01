var EnglishContactView = function() {
  this.display();
}

EnglishContactView.prototype = {

  display: function() {
    var contactSpace = document.getElementById( 'contact-space' );

    var primary = document.createElement( 'div' );
    primary.id = "primary";
    var secondry = document.createElement( 'div' );

    var welcome = document.createElement( 'h1' );
    welcome.innerText = "General Information";
    primary.appendChild( welcome );

    var info = document.createElement( 'p' );
    info.innerText = "Hey guys. We really hope you can join us on the 1st of April 2017 for a day of good weather, good food and of course helping us celebrate our love. If you have any questions please drop us a shout."
    primary.appendChild( info );

    var contact = document.createElement( 'ul' );
    secondry.appendChild( contact );

    var email = document.createElement( 'li' );
    email.innerHTML = "<img src='./css/image/email.png' >";

    var address = document.createElement( 'mailto:' );
    address.innerText = "euanandlaura@gmail.com";

    contact.appendChild( email );
    contact.appendChild( address );

    contactSpace.appendChild( primary );
    contactSpace.appendChild( secondry );
  },

}

module.exports = EnglishContactView;