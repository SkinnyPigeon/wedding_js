var SpanishFlightsView = require( './SpanishFlightsView.js' );
var SpanishHotelsView = require( './SpanishHotelsView.js' );
var SpanishDrinksView = require( './SpanishDrinksView.js' );
var SpanishFoodView = require( './SpanishFoodView.js' );
var SpanishBoatView = require( './SpanishBoatView.js' );
var EnglishLavaView = require( './EnglishLavaView.js' );

var EnglishGiftView = function() {
  this.display();
}

EnglishGiftView.prototype = {

  display: function() {
    var giftSpace = document.getElementById( 'gift-space' );
    giftSpace.innerText = "";

    var title = document.createElement( 'h1' );
    title.className = "circleTitle";
    title.innerText = "Lista de bodas";

    var dotsOne = document.createElement( 'p' );
    dotsOne.innerText = "--------------------------------"

    var text = document.createElement( 'h5' );
    text.innerText = "Como ya sabéis vivimos en un piso alquilado que ya está equipado, y no sabemos cuánto tiempo más estaremos aquí hasta que nos mudemos. Por ello, si deseáis hacernos algún regalo lo más práctico para nosotros sería una contribución para la luna de miel, sin embargo, como nos parece un poco frio regalar dinero sin poder asociarlo a algo en concreto, hemos ideado este apartado para que vosotros sepáis que nos estáis regalando y nosotros podamos ponerle cara a cada parte de nuestro viaje y agradecéroslo desde allí. \n\n Si os gusta la idea pulsad debajo.";

    var button = document.createElement( 'button' );
    button.innerText = "Pulsame";
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
    title.innerText = "Lista de bodas";

    var dotsTwo = document.createElement( 'p' );
    dotsTwo.innerText = "--------------------------------"

    var text = document.createElement( 'h5' );
    text.innerText = "Selecciona uno de los iconos de debajo para descubrir que son y para elegirlo si te gustaría que ese fuera tu regalo."

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
    var view = new SpanishFlightsView();
  },

  displayHotels: function() {
    var view = new SpanishHotelsView();
  },

  displayDrinks: function() {
    var view = new SpanishDrinksView();
  },

  displayFood: function() {
    var view = new SpanishFoodView();
  },

  displayBoatTour: function() {
    var view = new SpanishBoatView();
  },

  displayLavaTour: function() {
    var view = new EnglishLavaView();
  }

}

module.exports = EnglishGiftView;