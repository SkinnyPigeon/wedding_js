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

    var dotsOne = document.createElement( 'p' );
    dotsOne.innerText = "--------------------------------"

    var dotsTwo = document.createElement( 'p' );
    dotsTwo.innerText = "--------------------------------"

    var welcome = document.createElement( 'h1' );
    welcome.className = "circleTitle";
    welcome.innerText = "Información general";

    primary.appendChild( welcome );
    primary.appendChild( dotsOne );

    var info = document.createElement( 'h5' );
    info.innerText = "Los momentos importes en la vida se hacen más especiales si se comparten con la gente que se quiere, por ello esperamos que nos podáis acompañar en nuestra boda el Sabado 1 de Abril. \n\n No dudéis en escribidnos si tenéis alguna pregunta."
    primary.appendChild( info );

    var contact = document.createElement( 'ul' );
    secondary.appendChild( contact );

    var getInTouch = document.createElement( 'h1' );
    getInTouch.innerText = "Información de contacto";

    var email = document.createElement( 'li' );
    email.innerHTML = "<img src='./css/image/email.png' >";

    var address = document.createElement( 'a' );
    address.href = "mailto:euanandlaura@gmail.com";
    address.innerText = "euanandlaura@gmail.com";

    contact.appendChild( getInTouch );
    contact.appendChild( dotsTwo );
    contact.appendChild( email );
    contact.appendChild( address );

    contactSpace.appendChild( primary );

    contactSpace.appendChild( secondary );
  },

}

module.exports = EnglishContactView;