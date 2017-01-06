var EnglishRSVP = function() {
  // this.url = "https://guest-database.herokuapp.com/guests";
  this.url = "http://localhost:5000/guests";
  this.display();
}

EnglishRSVP.prototype = {

  display: function() {
    var rsvpSpace = document.getElementById( 'rsvp-space' );
    rsvpSpace.innerText = "";

    var name = document.createElement( 'input' );
    name.placeholder = "Name...";

    var email = document.createElement( 'input' );
    email.placeholder = "Email...";

    var comingText = document.createElement( 'h4' );
    comingText.innerText = "Are you coming?";

    var comingBox = document.createElement( 'input' );
    comingBox.type = "checkbox";

    var plusOneText = document.createElement( 'h4' );
    plusOneText.innerText = "Plus One?";

    var plusOneBox = document.createElement( 'input' );
    plusOneBox.type = "checkbox";

    var kidsText = document.createElement( 'h4' );
    kidsText.innerText = "Are you taking any kids?";

    var kidsSlider = document.createElement( 'input' );
    kidsSlider.id = "kidsSlider";
    kidsSlider.type = "range";
    kidsSlider.step = 1;
    kidsSlider.min = 0;
    kidsSlider.max = 5;
    kidsSlider.value = 0;
    kidsSlider.list = "steplist";

    var button = document.createElement( 'button' );
    button.innerText = "Go";
    button.style.padding = "1em";
    button.onclick = function() {

      this.showGratitude();

      var adultTotal = 0;
      if( comingBox.checked && !plusOneBox.checked ) {
        adultTotal = 1;
      }
      if( comingBox.checked && plusOneBox.checked ) {
        adultTotal = 2;
      }
      if( !comingBox.checked && plusOneBox.checked ) {
        adultTotal = 1;
      }

      var comingBoolean = false;
      if( adultTotal >= 1 ) {
        comingBoolean = true;
      }

      var familyTotal = adultTotal += parseInt( kidsSlider.value );

      var request = new XMLHttpRequest()
      request.open( 'POST', this.url )
      request.setRequestHeader("Content-Type", "application/json")
      request.onload = () => {
        this.showGratitude();
      }
      var data = {
        guest: {
          name: name.value,
          email: email.value,
          adults: adultTotal,
          kids: kidsSlider.value,
          total: familyTotal,
          coming: comingBoolean
        }
      }
      // request.send( JSON.stringify( data ));
    }.bind( this )

    rsvpSpace.appendChild( name );
    rsvpSpace.appendChild( email );
    rsvpSpace.appendChild( comingText );
    rsvpSpace.appendChild( comingBox );
    rsvpSpace.appendChild( plusOneText );
    rsvpSpace.appendChild( plusOneBox );
    rsvpSpace.appendChild( kidsText );
    rsvpSpace.appendChild( kidsSlider );
    rsvpSpace.appendChild( button );
  },

  showGratitude: function() {
    var rsvpSpace = document.getElementById( 'rsvp-space' );
    rsvpSpace.style.display = "none";

    while( rsvpSpace.hasChildNodes() ) {
      rsvpSpace.removeChild( rsvpSpace.lastChild );
    }

    var thankYou = document.createElement( 'h1' );
    thankYou.className = "thankYou";
    thankYou.innerText = "Thank you very much";
    rsvpSpace.style.display = "block";

    rsvpSpace.appendChild( thankYou );
  }
}

module.exports = EnglishRSVP;