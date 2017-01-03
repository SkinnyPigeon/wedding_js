var EnglishContactView = function() {
  this.display();
}

EnglishContactView.prototype = {

  display: function() {
    var contactSpace = document.getElementById( 'contact-space' );
    contactSpace.innerText = "";

    var primary = document.createElement( 'div' );
    primary.id = "primary";
    var secondary = document.createElement( 'div' );
    secondary.id = "secondary";

    var welcome = document.createElement( 'h1' );
    welcome.className = "circleTitle";
    welcome.innerText = "General Information";
    primary.appendChild( welcome );

    var info = document.createElement( 'h5' );
    info.innerText = "Hey guys. We really hope you can join us on the 1st of April 2017 for a day of good weather, good food and of course helping us celebrate our love. If you have any questions please drop us a shout."
    primary.appendChild( info );

    var contact = document.createElement( 'ul' );
    secondary.appendChild( contact );

    var getInTouch = document.createElement( 'h1' );
    getInTouch.innerText = "Contact Information";

    var email = document.createElement( 'li' );
    email.innerHTML = "<img src='./css/image/email.png' >";

    var address = document.createElement( 'a' );
    address.href = "mailto:euanandlaura@gmail.com";
    address.innerText = "euanandlaura@gmail.com";

    contact.appendChild( getInTouch );
    contact.appendChild( email );
    contact.appendChild( address );

    contactSpace.appendChild( primary );
    contactSpace.appendChild( secondary );
  },

}

module.exports = EnglishContactView;