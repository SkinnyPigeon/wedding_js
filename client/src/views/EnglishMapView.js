var EnglishMapView = function() {
  this.center = { lat: 38.1976052, lng: -0.6143937 };
  this.map = new google.maps.Map( document.getElementById( 'map' ), {
    center: this.center,
    zoom: 10
  })

  this.displayPalacioAlicante();
  this.displayLosPalacios();
  this.displayLaLaguna();

}

EnglishMapView.prototype = {

  displayPalacioAlicante: function() {
    var palacioAlicante = new google.maps.Marker({
      position: { lat: 38.3960059, lng: -0.5277508 },
      map: this.map,
      animation: google.maps.Animation.DROP,
      title: 'Palacio de Tudemir'
    });

    var palacioAlicanteInfo = new google.maps.InfoWindow({
      content: "<a href='http://www.hotelpalaciotudemir.com/en' target='_blank'>Hotel Palacio</a>"
    });

    palacioAlicante.addListener( 'click', function() {
      palacioAlicanteInfo.open( this.map, palacioAlicante )
    })
  },

  displayLosPalacios: function() {
    var losPalacios = new google.maps.Marker({
      position: { lat: 38.0881009, lng: -0.7291746 },
      map: this.map,
      animation: google.maps.Animation.DROP,
      title: 'Los Palacios'
    });

    var losPalaciosInfo = new google.maps.InfoWindow({
      content: "<a href='https://goo.gl/0OhSGS' target='_blank'>Los Palacios</a>"
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
      title: 'Hotel La Laguna'
    });

    var laLagunaInfo = new google.maps.InfoWindow({
      content: "<a href='http://www.hotellalaguna.com/en' target='_blank'>La Laguna</a>"
    });

    laLaguna.addListener( 'click', function() {
      laLagunaInfo.open( this.map, laLaguna )
    })
  },
}

module.exports = EnglishMapView;

