var EnglishVenueView = function() {
  this.center = { lat: 38.0864422, lng: -0.8313381 };
  this.map = new google.maps.Map( document.getElementById( 'map' ), {
    center: this.center,
    zoom: 11
  })

  this.diplay();
  this.displayMap();
}

EnglishVenueView.prototype = {

  display: function() {

  },

  displayMap: function() {
    var salone = new google.maps.Marker({
      position: { lat: 38.085552, lng: -0.729775 },
      map: this.map,
      animation: google.maps.Animation.DROP,
      title: 'Salone Canario'
    });

    var palacioAlicanteInfo = new google.maps.InfoWindow({
      content: "Salone Canario"
    });

    salone.addListener( 'click', function() {
      palacioAlicanteInfo.open( this.map, salone )
    })
  },

}

module.exports = EnglishVenueView;