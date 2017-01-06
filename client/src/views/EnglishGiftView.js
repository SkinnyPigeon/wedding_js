var EnglishGiftView = function() {
  this.display();
  // this.url = "https://gift-database.herokuapp.com/gifts";
  this.url = "http://localhost:8080/gifts";
}

EnglishGiftView.prototype = {

  display: function() {
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

    // var flights = document.createElement( 'h3' );
    // flights.innerText = "Flights";
    var flights = document.createElement( 'img' );
    flights.src = "../css/image/plane.png";
    flights.onclick = function() {
      this.displayFlights();
    }.bind( this );

    // var lavaTour = document.createElement( 'h3' );
    // lavaTour.innerText = "Lava Tour";
    var lavaTour = document.createElement( 'img' );
    lavaTour.src = "../css/image/volcano.png";
    lavaTour.onclick = function() {
      this.displayLavaTour();
    }.bind( this );

    // var boatTour = document.createElement( 'h3' );
    // boatTour.innerText = "Boat Tour";
    var boatTour = document.createElement( 'img' );
    boatTour.src = "../css/image/boat.png";
    boatTour.onclick = function() {
      this.displayBoatTour();
    }.bind( this );

    // var hotels = document.createElement( 'h3' );
    // hotels.innerText = "Hotels";
    var hotels = document.createElement( 'img' );
    hotels.src = "../css/image/hotel.png";
    hotels.onclick = function() {
      this.displayHotels();
    }.bind( this );

    // var drinks = document.createElement( 'h3' );
    // drinks.innerText = "Drinks on the Beach";
    var drinks = document.createElement( 'img' );
    drinks.src = "../css/image/drink.png";
    drinks.onclick = function() {
      this.displayDrinks();
    }.bind( this );

    // var food = document.createElement( 'h3' );
    // food.innerText = "Delicious Food";
    var food = document.createElement( 'img' );
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
    var giftSpace = document.getElementById( 'gift-space' );
    giftSpace.style.display = "none";

    while( giftSpace.hasChildNodes() ) {
      giftSpace.removeChild( giftSpace.lastChild );
    }

    var title = document.createElement( 'h1' );
    title.innerText = "Flights";
    title.className = "circleTitle";

    var dotsFour = document.createElement( 'p' );
    dotsFour.innerText = "--------------------------------"

    var text = document.createElement( 'h5' );
    text.innerText = "These are the big ones. We've got a couple flights to get to Hawaii then another few internal flights. \n\n If you'd like to help with these the give this a click."

    var goButton = document.createElement( 'button' );
    goButton.innerText = "Click";
    goButton.onclick = function() {
      this.displayForm( "Flights" );
    }.bind( this );

    var backButton = document.createElement( 'button' );
    backButton.innerText = "Back";
    backButton.onclick = function() {
      this.displayGifts() 
    }.bind( this );

    giftSpace.style.display = "block";

    giftSpace.appendChild( title );
    giftSpace.appendChild( dotsFour );
    giftSpace.appendChild( text );
    giftSpace.appendChild( goButton );
    giftSpace.appendChild( backButton );
  },

  displayLavaTour: function() {
    var giftSpace = document.getElementById( 'gift-space' );
    giftSpace.style.display = "none";

    while( giftSpace.hasChildNodes() ) {
      giftSpace.removeChild( giftSpace.lastChild );
    }

    var title = document.createElement( 'h1' );
    title.innerText = "Lava Tour";
    title.className = "circleTitle";

    var dotsFive = document.createElement( 'p' );
    dotsFive.innerText = "--------------------------------"

    var text = document.createElement( 'h5' );
    text.innerText = "One of the sights we are really hoping to get to is a tour of the volcanos. \n\n If you'd like to help with this then give this a click."

    var goButton = document.createElement( 'button' );
    goButton.innerText = "Click";
    goButton.onclick = function() {
      this.displayForm( "Lava Tour" );
    }.bind( this );

    var backButton = document.createElement( 'button' );
    backButton.innerText = "Back";
    backButton.onclick = function() {
      this.displayGifts() 
    }.bind( this );

    giftSpace.style.display = "block";

    giftSpace.appendChild( title );
    giftSpace.appendChild( dotsFive );
    giftSpace.appendChild( text );
    giftSpace.appendChild( goButton );
    giftSpace.appendChild( backButton );
  },

  displayBoatTour: function() {
    var giftSpace = document.getElementById( 'gift-space' );
    giftSpace.style.display = "none";

    while( giftSpace.hasChildNodes() ) {
      giftSpace.removeChild( giftSpace.lastChild );
    }

    var title = document.createElement( 'h1' );
    title.innerText = "Boat Tour";
    title.className = "circleTitle";

    var dotsSix = document.createElement( 'p' );
    dotsSix.innerText = "--------------------------------"

    var text = document.createElement( 'h5' );
    text.innerText = "Another of the main attractions we would love to get to is a boat tour of the Napali Coast. \n\n If you'd like to help with this then give this a click."

    var goButton = document.createElement( 'button' );
    goButton.innerText = "Click";
    goButton.onclick = function() {
      this.displayForm( "Boat Tour" );
    }.bind( this );

    var backButton = document.createElement( 'button' );
    backButton.innerText = "Back";
    backButton.onclick = function() {
      this.displayGifts() 
    }.bind( this );

    giftSpace.style.display = "block";

    giftSpace.appendChild( title );
    giftSpace.appendChild( dotsSix );
    giftSpace.appendChild( text );
    giftSpace.appendChild( goButton );
    giftSpace.appendChild( backButton );
  },

  displayHotels: function() {
    var giftSpace = document.getElementById( 'gift-space' );
    giftSpace.style.display = "none";

    while( giftSpace.hasChildNodes() ) {
      giftSpace.removeChild( giftSpace.lastChild );
    }

    var title = document.createElement( 'h1' );
    title.innerText = "Hotels";
    title.className = "circleTitle";

    var dotsSeven = document.createElement( 'p' );
    dotsSeven.innerText = "--------------------------------"

    var text = document.createElement( 'h5' );
    text.innerText = "Like the flights these are pretty essential. We are doing a fair amount of travelling throughout the islands so any help will be very much appreciated. \n\n If you'd like to help with these then give this a click."

    var goButton = document.createElement( 'button' );
    goButton.innerText = "Click";
    goButton.onclick = function() {
      this.displayForm( "Hotels" );
    }.bind( this );

    var backButton = document.createElement( 'button' );
    backButton.innerText = "Back";
    backButton.onclick = function() {
      this.displayGifts() 
    }.bind( this );

    giftSpace.style.display = "block";

    giftSpace.appendChild( title );
    giftSpace.appendChild( dotsSeven );
    giftSpace.appendChild( text );
    giftSpace.appendChild( goButton );
    giftSpace.appendChild( backButton );
  },

  displayDrinks: function() {
    var giftSpace = document.getElementById( 'gift-space' );
    giftSpace.style.display = "none";

    while( giftSpace.hasChildNodes() ) {
      giftSpace.removeChild( giftSpace.lastChild );
    }

    var title = document.createElement( 'h1' );
    title.innerText = "Drinks on the Beach";
    title.className = "circleTitle";

    var dotsEight = document.createElement( 'p' );
    dotsEight.innerText = "--------------------------------"

    var text = document.createElement( 'h5' );
    text.innerText = "For those of you who know Laura you'll be aware that relaxing on the beach is pretty important to her so any help to do it in style would be amazing. \n\n If you'd like to help with this then give this a click."

    var goButton = document.createElement( 'button' );
    goButton.innerText = "Click";
    goButton.onclick = function() {
      this.displayForm( "Drinks" );
    }.bind( this );

    var backButton = document.createElement( 'button' );
    backButton.innerText = "Back";
    backButton.onclick = function() {
      this.displayGifts() 
    }.bind( this );

    giftSpace.style.display = "block";

    giftSpace.appendChild( title );
    giftSpace.appendChild( dotsEight );
    giftSpace.appendChild( text );
    giftSpace.appendChild( goButton );
    giftSpace.appendChild( backButton );
  },

  displayFood: function() {
    var giftSpace = document.getElementById( 'gift-space' );
    giftSpace.style.display = "none";

    while( giftSpace.hasChildNodes() ) {
      giftSpace.removeChild( giftSpace.lastChild );
    }

    var title = document.createElement( 'h1' );
    title.innerText = "Delicious Food";
    title.className = "circleTitle";

    var dotsNine = document.createElement( 'p' );
    dotsNine.innerText = "--------------------------------"

    var text = document.createElement( 'h5' );
    text.innerText = "What would be the point in travelling half way round the world without sampling as much delicious food as possible? \n\n If you'd like to help with this then give this a click."

    var goButton = document.createElement( 'button' );
    goButton.innerText = "Click";
    goButton.onclick = function() {
      this.displayForm( "Food" );
    }.bind( this );

    var backButton = document.createElement( 'button' );
    backButton.innerText = "Back";
    backButton.onclick = function() {
      this.displayGifts() 
    }.bind( this );

    giftSpace.style.display = "block";

    giftSpace.appendChild( title );
    giftSpace.appendChild( dotsNine );
    giftSpace.appendChild( text );
    giftSpace.appendChild( goButton );
    giftSpace.appendChild( backButton );
  },

  displayForm: function( towardsValue ) {
    var giftSpace = document.getElementById( 'gift-space' );
    giftSpace.style.display = "none";

    while( giftSpace.hasChildNodes() ) {
      giftSpace.removeChild( giftSpace.lastChild );
    }

    giftSpace.style.display = "block";

    var title = document.createElement( 'h1' );
    title.className = "circleTitle";
    title.innerText = "Thank You";

    var dotsThree = document.createElement( 'p' );
    dotsThree.innerText = "--------------------------------"

    var name = document.createElement( 'input' );
    name.placeholder = "Name...";

    var email = document.createElement( 'input' );
    email.placeholder = "Email...";

    var contribution = document.createElement( 'input' );
    contribution.placeholder = "Contribution...";

    var message = document.createElement( 'input' );
    message.placeholder = "Message";

    var change = document.createElement( 'h4' );
    change.innerText = "Click to change currency";

    var changeBox = document.createElement( 'input' );
    changeBox.type = "checkbox";

    var currency = document.createElement( 'h4' );
    currency.innerText = "€";

    changeBox.onchange = function() {
      if( changeBox.checked ) {
        currency.innerText = "£"
      } else {
        currency.innerText = "€"
      }
    }

    var button = document.createElement( 'button' );
    button.innerText = "Click";

    button.onclick = function() {
      var request = new XMLHttpRequest()
      request.open( 'POST', this.url )
      request.setRequestHeader("Content-Type", "application/json")
      request.onload = () => {
        this.displayThankYou();
      }
      var data = {
        gift: {
          name: name.value,
          email: email.value,
          contribution: contribution.value,
          towards: towardsValue,
          message: message.value,
          currency: currency.innerText
        }
      }
      request.send( JSON.stringify( data ));
    }.bind( this )

    var backButton = document.createElement( 'button' );
    backButton.innerText = "Back";
    backButton.onclick = function() {
      this.displayGifts();
    }.bind( this );

    giftSpace.appendChild( title );
    giftSpace.appendChild( dotsThree );
    giftSpace.appendChild( name );
    giftSpace.appendChild( email );
    giftSpace.appendChild( contribution );
    giftSpace.appendChild( message );
    giftSpace.appendChild( change );
    giftSpace.appendChild( changeBox );
    giftSpace.appendChild( currency );
    giftSpace.appendChild( button );
    giftSpace.appendChild( backButton );
  },

  displayThankYou: function() {
    var giftSpace = document.getElementById( 'gift-space' );
    giftSpace.style.display = "none";

    while( giftSpace.hasChildNodes() ) {
      giftSpace.removeChild( giftSpace.lastChild );
    }

    var thankYou = document.createElement( 'h1' );
    thankYou.className = "circleTitle";
    thankYou.innerText = "Thank you very much";
    giftSpace.style.display = "block";

    giftSpace.appendChild( thankYou );
  }
}

module.exports = EnglishGiftView;
