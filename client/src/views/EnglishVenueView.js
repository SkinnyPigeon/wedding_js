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

    var slackTitle = document.createElement( 'h1' );
    slackTitle.innerText = "How Share Your Photos"

    var slackText = document.createElement( 'h5' );
    slackText.innerText = "We would love for you to share your pictures of the ceremony and party with all of us. \n\n If you'd like to join in then send us your email address and we'll invite you to join a group in an app called Slack. It's free and private. All you have to do is post the photos you take to the channel in Slack and we'll all get to see them on the big screen in the venue."

    venueSpace.appendChild( title );
    venueSpace.appendChild( text );
    venueSpace.appendChild( slackTitle );
    venueSpace.appendChild( slackText );
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