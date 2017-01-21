var EnglishHomeView = function() {
  this.display();
}

EnglishHomeView.prototype = {

  display: function() {
    var homeSpace = document.getElementById( 'home-space' );
    homeSpace.innerText = "";

    var welcome = document.createElement( 'h1' );
    welcome.className = "circleTitleRaised";
    welcome.innerText = "Bienvenidos";

    var dotsOne = document.createElement( 'p' );
    dotsOne.innerText = "--------------------------------"

    var dotsTwo = document.createElement( 'p' );
    dotsTwo.innerText = "--------------------------------"

    var text = document.createElement( 'h5' );
    text.innerText = "Aquí encontrareis toda la información de nuestra boda. \n\n Entra en nuestro libro de invitados y déjanos unas líneas, o ve a la página del salón y para ver su ubicación y la forma de poder compartir las fotos que toméis durante el día. \n\n Los que venís de fuera podéis encontrar algunos hoteles e información acerca del autobús que ira desde Orihuela hasta el salón. \n\n Algunos de vosotros nos habéis preguntado que nos gustaría como regalo, para todos aquellos a los que les gustaría saberlo hemos puesto el apartado de la lista de bodas. \n\n Por favor confirmad la asistencia a través de la página web. También podéis indicar si vais a usar el autobús."

    var message = document.createElement( 'h5' );
    message.innerText = "Esperamos veros a todos el 1 de Abril a las 12:30 porque compartir este día con vosotros lo hará aún más especial.";
    message.id = "message";

    var us = document.createElement( 'h1' );
    us.innerText = "Laura & Euan";

    var language = document.createElement( 'h1' );
    language.innerText = "Change Language";

    var languageText = document.createElement( 'h5' );
    languageText.innerText = "Click the flag at any point to change the language."

    homeSpace.appendChild( welcome );
    homeSpace.appendChild( dotsOne );
    homeSpace.appendChild( text );
    // homeSpace.appendChild( date );
    // homeSpace.appendChild( time );
    // homeSpace.appendChild( venue );
    // homeSpace.appendChild( dotsTwo );
    homeSpace.appendChild( message );
    homeSpace.appendChild( us );
    // homeSpace.appendChild( language );
    homeSpace.appendChild( languageText );
  },

}

module.exports = EnglishHomeView;