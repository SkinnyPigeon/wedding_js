var EnglishVenueView = function() {
  this.display();
}

EnglishVenueView.prototype = {

  display: function() {
    var venueSpace = document.getElementById( 'venue-space' );
    venueSpace.innerText = "";

    var title = document.createElement( 'h1' );
    title.className = "circleTitleRaised";
    title.innerText = "Salones Canario";

    var dotsOne = document.createElement( 'p' );
    dotsOne.innerText = "--------------------------------"

    var dotsTwo = document.createElement( 'p' );
    dotsTwo.innerText = "--------------------------------"

    var text = document.createElement( 'h5' );
    text.id = "venueText";
    text.innerText = "Esperamos veros a todos en la ceremonia que tendrá lugar a las 12:30 en los jardines del salón. Cuando la ceremonia acabe empezara un coctel y después entraremos a la sala para la comida. Al acabar el banquete habrá barra libre y DJ para continuar con la fiesta."

    var address = document.createElement( 'a' );
    address.innerText = "Salones Canarios, Calle Constitución, 03170 Rojales, Alicante, Spain \n (pulsame)";
    address.href = "https://www.google.co.uk/maps/place/Salones+Canario/@38.085104,-0.7316289,17z/data=!3m1!4b1!4m5!3m4!1s0xd63af14268fcecf:0xe8048d44d8dd442f!8m2!3d38.085104!4d-0.7294402";
    address.target = "_blank";
    address.id = "address";

    var slackTitle = document.createElement( 'h1' );
    slackTitle.innerText = "Cómo compartir tus fotos"

    var slackText = document.createElement( 'h5' );
    slackText.innerText = "Nos encantaría que compartierais las fotos que toméis durante el día con todos. Por favor mandadnos vuestro email y os invitaremos a uniros a un grupo en una app que se llama Slack. Es gratis y privada y lo único que tenéis que hacer durante el día es subir las fotos a el grupo e irán apareciendo en la pantalla del salón."

    var contact = document.createElement( 'ul' );

    var email = document.createElement( 'li' );
    email.innerHTML = "<img src='./css/image/email.png' >";

    var emailAddress = document.createElement( 'a' );
    emailAddress.href = "mailto:euanandlaura@gmail.com";
    emailAddress.innerText = "euanandlaura@gmail.com";

    contact.appendChild( email );
    contact.appendChild( emailAddress );

    venueSpace.appendChild( title );
    venueSpace.appendChild( dotsOne );
    venueSpace.appendChild( text );
    venueSpace.appendChild( address );
    venueSpace.appendChild( slackTitle );
    venueSpace.appendChild( dotsTwo );
    venueSpace.appendChild( slackText );
    venueSpace.appendChild( contact );
  },
}

module.exports = EnglishVenueView;