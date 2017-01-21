var EnglishRSVP = function() {
  this.url = "https://guest-database.herokuapp.com/guests";
  // this.url = "http://localhost:5000/guests";
  this.busUrl = "https://bus-database.herokuapp.com/buses";
  // this.busUrl = "http://localhost:9090/buses";
  this.display();
}

EnglishRSVP.prototype = {

  display: function() {
    var rsvpSpace = document.getElementById( 'rsvp-space' );
    rsvpSpace.innerText = "";

    var rsvp = document.createElement( 'h1' );
    rsvp.className = "circleTitle";
    rsvp.innerText = "Confirmación de asistencia";

    var dotsOne = document.createElement( 'p' );
    dotsOne.innerText = "--------------------------------"

    var name = document.createElement( 'input' );
    name.placeholder = "Nombre...";

    var email = document.createElement( 'input' );
    email.placeholder = "Email...";

    var comingText = document.createElement( 'h5' );
    comingText.innerText = "¿Vienes?";

    var comingBox = document.createElement( 'input' );
    comingBox.type = "checkbox";

    var plusOneText = document.createElement( 'h5' );
    plusOneText.innerText = "¿Vienes con pareja?";

    var plusOneBox = document.createElement( 'input' );
    plusOneBox.type = "checkbox";

    var kidsText = document.createElement( 'h5' );
    kidsText.innerText = "¿Vienes con niños?";

    var kidsNumber = document.createElement( 'h5' );
    kidsNumber.innerText = 0;

    var kidsSlider = document.createElement( 'input' );
    kidsSlider.id = "kidsSlider";
    kidsSlider.type = "range";
    kidsSlider.step = 1;
    kidsSlider.min = 0;
    kidsSlider.max = 3;
    kidsSlider.value = 0;
    kidsSlider.list = "steplist";

    kidsSlider.onchange = function() {
      kidsNumber.innerText = kidsSlider.value;
    }

    var busText = document.createElement( 'h5' );
    busText.innerText = "¿Usaras el autobús?";

    var busBox = document.createElement( 'input' );
    busBox.type = "checkbox";

    var button = document.createElement( 'button' );
    button.innerText = "Confirmación de asistencia";
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

      var request = new XMLHttpRequest();
      request.open( 'POST', this.url );
      request.setRequestHeader("Content-Type", "application/json");
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
      request.send( JSON.stringify( data ));

      if( busBox.checked ) {
        var busRequest = new XMLHttpRequest();
        busRequest.open( 'POST', this.busUrl );
        busRequest.setRequestHeader("Content-Type", "application/json");
        busRequest.onload = () => {
        }
        var data = {
          bus: {
            name: name.value,
            email: email.value,
            party: familyTotal
          }
        }
        busRequest.send( JSON.stringify( data ));
      }
    }.bind( this )

    var brOne = document.createElement( 'br' );
    var brTwo = document.createElement( 'br' );
    var brThree = document.createElement( 'br' );
    var brFour = document.createElement( 'br' );
    var brFive = document.createElement( 'br' );

    rsvpSpace.appendChild( rsvp );
    rsvpSpace.appendChild( dotsOne );
    rsvpSpace.appendChild( name );
    rsvpSpace.appendChild( email );
    rsvpSpace.appendChild( brOne );
    rsvpSpace.appendChild( comingText );
    rsvpSpace.appendChild( comingBox );
    rsvpSpace.appendChild( plusOneText );
    rsvpSpace.appendChild( plusOneBox );
    rsvpSpace.appendChild( brTwo );
    rsvpSpace.appendChild( kidsText );
    rsvpSpace.appendChild( kidsSlider );
    rsvpSpace.appendChild( kidsNumber );
    rsvpSpace.appendChild( brThree );
    rsvpSpace.appendChild( busText );
    rsvpSpace.appendChild( busBox );
    rsvpSpace.appendChild( brFour );
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
    thankYou.innerText = "Muchísimas gracias";
    rsvpSpace.style.display = "block";

    rsvpSpace.appendChild( thankYou );
  }
}

module.exports = EnglishRSVP;