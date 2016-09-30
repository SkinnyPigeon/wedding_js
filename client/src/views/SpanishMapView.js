var SpanishMapView = function() {
  this.center = { lat: 38.0881009, lng: -0.7291746 };
  this.map = new google.maps.Map( document.getElementById( 'map' ), {
    center: this.center,
    zoom: 10
  })

  this.displayPalacioAlicante();
  this.displayLosPalacios();
  this.displayLaLaguna();

}

SpanishMapView.prototype = {

  displayPalacioAlicante: function() {
    var palacioAlicante = new google.maps.Marker({
      position: { lat: 38.3960059, lng: -0.5277508 },
      map: this.map,
      title: 'Palacio de Tudemir'
    });

    var palacioAlicanteInfo = new google.maps.InfoWindow({
      content: "http://www.hotelpalaciotudemir.com/en"
    });

    palacioAlicante.addListener( 'click', function() {
      palacioAlicanteInfo.open( this.map, palacioAlicante )
    })
  },

  displayLosPalacios: function() {
    var losPalacios = new google.maps.Marker({
      position: { lat: 38.0881009, lng: -0.7291746 },
      map: this.map,
      title: 'Los Palacios'
    });

    var losPalaciosInfo = new google.maps.InfoWindow({
      content: "https://goo.gl/0OhSGS"
    });

    losPalacios.addListener( 'click', function() {
      losPalaciosInfo.open( this.map, losPalacios )
    })
  },

  displayLaLaguna: function() {
    var laLaguna = new google.maps.Marker({
      position: { lat: 38.0494904, lng: -0.7132986 },
      map: this.map,
      title: 'Hotel La Laguna'
    });

    var laLagunaInfo = new google.maps.InfoWindow({
      content: "http://www.hotellalaguna.com/en/"
    });

    laLaguna.addListener( 'click', function() {
      laLagunaInfo.open( this.map, laLaguna )
    })
  },
}

module.exports = SpanishMapView;

