var EnglishVenueView = function() {
  this.center = { lat: 38.0864422, lng: -0.8313381 };
  this.map = new google.maps.Map( document.getElementById( 'map' ), {
    center: this.center,
    zoom: 11
  })

  this.display();
  this.displayMap();
}

EnglishVenueView.prototype = {

  display: function() {
    var venueSpace = document.getElementById( 'venue-space' );
    venueSpace.innerText = "";

    var title = document.createElement( 'h1' );
    title.className = "circleTitle";
    title.innerText = "Salones Canario";

    var text = document.createElement( 'h5' );
    text.innerText = "We hope to see you all there for the ceremony at 12.30 which will be held in the garden. Afterwards there will be drinks and nibbles. Following that will be a sit down meal inside the venue before the day finishes with a DJ and open bar."

    venueSpace.appendChild( title );
    venueSpace.appendChild( text );
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

module.exports = EnglishVenueView;