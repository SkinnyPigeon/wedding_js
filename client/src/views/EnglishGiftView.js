var EnglishFlightsView = require( './EnglishFlightsView.js' );

var EnglishGiftView = function() {
  this.display();
}

EnglishGiftView.prototype = {

  display: function() {
    // this.getFlights();
    var giftSpace = document.getElementById( 'gift-space' );
    giftSpace.innerText = "";

    var title = document.createElement( 'h1' );
    title.className = "circleTitle";
    title.innerText = "Gifts";

    var dotsOne = document.createElement( 'p' );
    dotsOne.innerText = "--------------------------------"

    var text = document.createElement( 'h5' );
    text.innerText = "Obviously we will be delighted just to see you all there but for those of you who wish to give us a gift then we certainly wouldn't turn down you generousity. Currently we are renting a flat that is fully kitted out so we are not in desperate need of household goods. We are however going on our honeymoon a few days after the wedding and if you'd like to contribute towards some of it then we would be eternally greatful to you. \n\n Click below to see some of the ways you could help out.";

    var button = document.createElement( 'button' );
    button.innerText = "Click Me";
    button.onclick = function() {
      this.displayGifts();
    }.bind( this );

    giftSpace.appendChild( title );
    giftSpace.appendChild( dotsOne );
    giftSpace.appendChild( text );
    giftSpace.appendChild( button );
  },

  displayGifts: function() {
    var circleSpace = document.getElementById( 'circle-space' );

    var giftSpace = document.getElementById( 'gift-space' );
    giftSpace.innerText = "";
    giftSpace.style.display = "block";

    var title = document.createElement( 'h1' );
    title.className = "circleTitle";
    title.innerText = "Gifts";

    var dotsTwo = document.createElement( 'p' );
    dotsTwo.innerText = "--------------------------------"

    var text = document.createElement( 'h5' );
    text.innerText = "Click on one of the items below to see a bit more about it and to contribute should you wish."

    var listOne = document.createElement( 'ul' );
    var listTwo = document.createElement( 'ul' );

    var flights = document.createElement( 'img' );
    flights.className = "giftImage";
    flights.src = "../css/image/plane.png";
    flights.onclick = function() {
      this.displayFlights();
    }.bind( this );

    var lavaTour = document.createElement( 'img' );
    lavaTour.className = "giftImage";
    lavaTour.src = "../css/image/volcano.png";
    lavaTour.onclick = function() {
      this.displayLavaTour();
    }.bind( this );

    var boatTour = document.createElement( 'img' );
    boatTour.className = "giftImage";
    boatTour.src = "../css/image/boat.png";
    boatTour.onclick = function() {
      this.displayBoatTour();
    }.bind( this );

    var hotels = document.createElement( 'img' );
    hotels.className = "giftImage";
    hotels.src = "../css/image/hotel.png";
    hotels.onclick = function() {
      this.displayHotels();
    }.bind( this );

    var drinks = document.createElement( 'img' );
    drinks.className = "giftImage";
    drinks.src = "../css/image/drink.png";
    drinks.onclick = function() {
      this.displayDrinks();
    }.bind( this );

    var food = document.createElement( 'img' );
    food.className = "giftImage";
    food.src = "../css/image/pineapple.png";
    food.onclick = function() {
      this.displayFood();
    }.bind( this );

    var br = document.createElement( 'br' );

    listOne.appendChild( flights );
    listOne.appendChild( lavaTour );
    listOne.appendChild( boatTour );
    listTwo.appendChild( hotels );
    listTwo.appendChild( drinks );
    listTwo.appendChild( food );

    giftSpace.appendChild( title );
    giftSpace.appendChild( dotsTwo );
    giftSpace.appendChild( text );
    giftSpace.appendChild( listOne );
    giftSpace.appendChild( br );
    giftSpace.appendChild( listTwo );
  },

  displayFlights: function() {
    var view = new EnglishFlightsView();
  },

}

module.exports = EnglishGiftView;