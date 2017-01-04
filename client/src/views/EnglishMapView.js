var EnglishMapView = function() {
  this.center = { lat: 38.0823114, lng: -0.8337589 };
  this.map = new google.maps.Map( document.getElementById( 'map' ), {
    center: this.center,
    zoom: 11,
    scrollwheel: false,
    navigationControl: false,
    mapTypeControl: false,
    scaleControl: false,
    streetViewControl: false
  })

  this.display();
  this.displayPalacioDeTudemir();
  this.displayHostalReyTeodomiro();
  this.displayLosPalacios();
  this.displayLaLaguna();
  this.displayVenue();

}

EnglishMapView.prototype = {

  display: function() {
    var hotelSpace = document.getElementById( 'hotel-space' );
    hotelSpace.innerText = "";

    var title = document.createElement( 'h1' );
    title.className = "circleTitle";
    title.innerText = "Hotels";

    var dotsOne = document.createElement( 'p' );
    dotsOne.innerText = "--------------------------------"

    var text = document.createElement( 'h5' );
    text.innerText = "For those of you who are travelling in from out of town or just looking for somewhere a bit closer to the venue we have picked a couple places that you might be interested in. \n\n Orihuela is a large and lovely town that's home to Laura's family and has got a great selection of places to eat, drink and enjoy. It's also got the Hotel Palacio de Tudemir that's happy to give us a discount if we block book 10 rooms so let us know if you fancy booking there and we'll get it all set up. \n\n For those looking for an even easier life on the day of the wedding there are a couple that are very close to the venue. The venue is marked as green on the map below";

    hotelSpace.appendChild( title );
    hotelSpace.appendChild( dotsOne );
    hotelSpace.appendChild( text );
  },

  displayPalacioDeTudemir: function() {
    var palacioDeTudemir = new google.maps.Marker({
      position: { lat: 38.0859664, lng: -0.9447066 },
      map: this.map,
      animation: google.maps.Animation.DROP,
      title: 'Palacio de Tudemir',
      icon: 'http://maps.google.com/mapfiles/ms/icons/blue-dot.png'
    });

    var palacioDeTumedirInfo = new google.maps.InfoWindow({
      content: "<a href='http://www.hotelpalaciotudemir.com/en' target='_blank'>Hotel de Tumedir</a>"
    });

    palacioDeTudemir.addListener( 'click', function() {
      palacioDeTumedirInfo.open( this.map, palacioDeTudemir )
    })
  },

  displayHostalReyTeodomiro: function() {
    var hostalReyTeodomiro = new google.maps.Marker({
      position: { lat: 38.0818911, lng: -0.9478066 },
      map: this.map,
      animation: google.maps.Animation.DROP,
      title: 'Hostal Rey Teodomiro',
      icon: 'http://maps.google.com/mapfiles/ms/icons/blue-dot.png'
    });

    var hostalReyTeodomiroInfo = new google.maps.InfoWindow({
      content: "<a href='http://www.hostalreyteodomiro.eu/' target='_blank'>Hostal Rey Teodomiro</a>"
    });

    hostalReyTeodomiro.addListener( 'click', function() {
      hostalReyTeodomiroInfo.open( this.map, hostalReyTeodomiro )
    })
  },

  displayLosPalacios: function() {
    var losPalacios = new google.maps.Marker({
      position: { lat: 38.0881009, lng: -0.7291746 },
      map: this.map,
      animation: google.maps.Animation.DROP,
      title: 'Los Palacios',
      icon: 'http://maps.google.com/mapfiles/ms/icons/blue-dot.png'
    });

    var losPalaciosInfo = new google.maps.InfoWindow({
      content: "<a href='https://goo.gl/0OhSGS' target='_blank'>Los Palacios - This is a 10 minute walk from the venue</a>"
    });

    losPalacios.addListener( 'click', function() {
      losPalaciosInfo.open( this.map, losPalacios )
    })
  },

  displayLaLaguna: function() {
    var laLaguna = new google.maps.Marker({
      position: { lat: 38.0494904, lng: -0.7132986 },
      map: this.map,
      animation: google.maps.Animation.DROP,
      title: 'Hotel La Laguna',
      icon: 'http://maps.google.com/mapfiles/ms/icons/blue-dot.png'
    });

    var laLagunaInfo = new google.maps.InfoWindow({
      content: "<a href='http://www.hotellalaguna.com/en' target='_blank'>La Laguna - This is a 10 minute taxi or drive from the venue</a>"
    });

    laLaguna.addListener( 'click', function() {
      laLagunaInfo.open( this.map, laLaguna )
    })
  },

  displayVenue: function() {
    var salone = new google.maps.Marker({
      position: { lat: 38.085552, lng: -0.729775 },
      map: this.map,
      animation: google.maps.Animation.DROP,
      title: 'Salone Canario',
      icon: 'http://maps.google.com/mapfiles/ms/icons/green-dot.png'
    });

    var saloneInfo = new google.maps.InfoWindow({
      content: "<a href='http://www.salonescanario.com/' target='_blank'>Salones Canario - The Venue</a>"
    });

    salone.addListener( 'click', function() {
      saloneInfo.open( this.map, salone )
    })
  }
}

module.exports = EnglishMapView;