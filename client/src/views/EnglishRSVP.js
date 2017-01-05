var EnglishRSVP = function() {
  this.url = "https://guest-database.herokuapp.com/guests";
  this.display();
}

EnglishRSVP.prototype = {

  display: function() {
    var rsvpSpace = document.getElementById( 'rsvp-space' );

    var name = document.createElement( 'input' );
    name.placeholder = "Name...";

    var email = document.createElement( 'input' );
    email.placeholder = "Email...";

    var comingText = document.createElement( 'h4' );
    comingText.innerText = "Are you coming?";

    var comingBox = document.createElement( 'input' );
    comingBox.type = "checkbox";

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
      this.sendConfirmation();
    }


    rsvpSpace.appendChild( name );
    rsvpSpace.appendChild( email );
    rsvpSpace.appendChild( comingText );
    rsvpSpace.appendChild( comingBox );
    rsvpSpace.appendChild( kidsText );
    rsvpSpace.appendChild( kidsSlider );
    rsvpSpace.appendChild( button );
  },

}

module.exports = EnglishRSVP;