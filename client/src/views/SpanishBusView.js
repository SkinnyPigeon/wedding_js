var EnglishBusView = function() {

  this.center = { lat: 38.0864422, lng: -0.8313381 };
  this.map = new google.maps.Map( document.getElementById( 'map' ), {
    center: this.center,
    zoom: 11
  })

  this.display();
  this.displayMap();
}

EnglishBusView.prototype = {

  display: function() {
    var busSpace = document.getElementById( 'bus-space' );
    busSpace.innerText = "";

    var title = document.createElement( 'h1' );
    title.className = "circleTitle";
    title.innerText = "Autobús";

    var dotsOne = document.createElement( 'p' );
    dotsOne.innerText = "--------------------------------"

    var text = document.createElement( 'h5' );
    text.innerText = "Para los que estéis en Orihuela y lo necesites hemos organizado un autobús para ir y volver del salón y nadie se tenga que preocupar si quiere tomarse una copa o dos..docenas. Actualizaremos la página en Marzo con la información del horario y el punto de salida. \n\n Por favor decidnos en la página “Confirmación de asistencia” si vais a usar el autobús."

    var contactDiv = document.createElement( 'div' );
    contactDiv.id = "contactDiv";

    var contact = document.createElement( 'ul' );
    contactDiv.appendChild( contact );

    var email = document.createElement( 'li' );
    email.innerHTML = "<img src='./css/image/email.png' >";

    var address = document.createElement( 'a' );
    address.href = "mailto:euanandlaura@gmail.com";
    address.innerText = "euanandlaura@gmail.com";

    contact.appendChild( email );
    contact.appendChild( address );

    busSpace.appendChild( title );
    busSpace.appendChild( dotsOne );
    busSpace.appendChild( text );
    busSpace.appendChild( contactDiv );
  },

  displayMap: function() {
    var salone = new google.maps.Marker({
      position: { lat: 38.085552, lng: -0.729775 },
      map: this.map,
      animation: google.maps.Animation.DROP,
      title: 'Salone Canario'
    });

    var saloneInfo = new google.maps.InfoWindow({
      content: "Salone Canario"
    });

    salone.addListener( 'click', function() {
      saloneInfo.open( this.map, salone )
    })
  }
}

module.exports = EnglishBusView;