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
    title.innerText = "Buses";

    var text = document.createElement( 'h5' );
    text.innerText = "For those of you staying in Orihuela we will be providing a bus to and from the wedding so no need to worry about taxis or sorting out a lift. We don't have the exact time or location that it'll run from but we will update this as soon as we have those details. \n\n It would be great if you could let us know if you are likely to want to use the bus so we can get an idea of numbers."

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