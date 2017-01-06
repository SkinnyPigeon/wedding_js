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

    var text = document.createElement( 'h5' );
    text.innerText = "Click on on of the items below to see a bit more about it and to contribute should you wish."

    var flights = document.createElement( 'h3' );
    flights.innerText = "Flights";
    flights.onclick = function() {
      this.displayFlights();
    }.bind( this );

    var lavaTour = document.createElement( 'h3' );
    lavaTour.innerText = "Lava Tour";
    lavaTour.onclick = function() {
      this.displayLavaTour();
    }.bind( this );

    var boatTour = document.createElement( 'h3' );
    boatTour.innerText = "Boat Tour";
    boatTour.onclick = function() {
      this.displayBoatTour();
    }.bind( this );

    var hotels = document.createElement( 'h3' );
    hotels.innerText = "Hotels";
    hotels.onclick = function() {
      this.displayHotels();
    }.bind( this );

    var drinks = document.createElement( 'h3' );
    drinks.innerText = "Drinks on the Beach";
    drinks.onclick = function() {
      this.displayDrinks();
    }.bind( this );

    var food = document.createElement( 'h3' );
    food.innerText = "Delicious Food";
    food.onclick = function() {
      this.displayFood();
    }.bind( this );

    giftSpace.appendChild( title );
    giftSpace.appendChild( text );
    giftSpace.appendChild( flights );
    giftSpace.appendChild( lavaTour );
    giftSpace.appendChild( boatTour );
    giftSpace.appendChild( hotels );
    giftSpace.appendChild( drinks );
    giftSpace.appendChild( food );
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

    var name = document.createElement( 'input' );
    name.placeholder = "Name...";

    var email = document.createElement( 'input' );
    email.placeholder = "Email...";

    var contribution = document.createElement( 'input' );
    contribution.placeholder = "Contribution...";

    var message = document.createElement( 'input' );
    message.placeholder = "message";

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
    thankYou.className = "thankYou";
    thankYou.innerText = "Thank you very much";
    giftSpace.style.display = "block";

    giftSpace.appendChild( thankYou );
  }

}

module.exports = EnglishGiftView;

//   var circleSpace = document.getElementById( 'circle-space' );
//   circleSpace.style.display = "none";

//   var giftSpace = document.getElementById( 'gift-space' );
//   giftSpace.innerText = "";
//   giftSpace.style.display = "block";

//   var table = document.createElement( 'table' );
//   table.id = "giftTable";

//   var rowOne = document.createElement( 'tr' );
//   var rowTwo = document.createElement( 'tr' );

//   var circleOne = document.createElement( 'td' );
//   circleOne.id = "circleOne";
//   circleOne.className = "circle";

//   var circleOneTitle = document.createElement( 'h1' );
//   circleOneTitle.innerText = "Flights";
//   circleOne.appendChild( circleOneTitle );

//   var circleOneText = document.createElement( 'a' );
//   circleOneText.innerText = "These are the big ones. We've got a couple flights to get to Hawaii then another few internal flights. \n\n If you'd like to help with these the give this a click."

//   circleOne.onmouseover = function() {
//     circleOne.innerText = "";
//     circleOne.appendChild( circleOneText );
//     circleOneText.href = "mailto:euanandlaura@gmail.com";
//   }

//   circleOne.onmouseleave = function() {
//     circleOne.innerText = "";
//     circleOne.appendChild( circleOneTitle );
//   }

//   var circleTwo = document.createElement( 'td' );
//   circleTwo.id = "circleTwo";  
//   circleTwo.className = "circle"; 

//   var circleTwoTitle = document.createElement( 'h1' );
//   circleTwoTitle.innerText = "Lava Tour";
//   circleTwo.appendChild( circleTwoTitle );

//   var circleTwoText = document.createElement( 'a' );
//   circleTwoText.innerText = "One of the sights we are really hoping to get to is a tour of the volcanos. \n\n If you'd like to help with this then give this a click."

//   circleTwo.onmouseover = function() {
//     circleTwo.innerText = "";
//     circleTwo.appendChild( circleTwoText );
//     circleTwoText.href = "mailto:euanandlaura@gmail.com";
//   }   

//   circleTwo.onmouseleave = function() {
//     circleTwo.innerText = "";
//     circleTwo.appendChild( circleTwoTitle );
//   }

//   var circleThree = document.createElement( 'td' );
//   circleThree.id = "circleThree";
//   circleThree.className = "circle";

//   var circleThreeTitle = document.createElement( 'h1' );
//   circleThreeTitle.innerText = "boat Tour";
//   circleThree.appendChild( circleThreeTitle );

//   var circleThreeText = document.createElement( 'a' );
//   circleThreeText.innerText = "Another of the main attractions we would love to get to is a boat tour of the Napali Coast. \n\n If you'd like to help with this then give this a click."

//   circleThree.onmouseover = function() {
//     circleThree.innerText = "";
//     circleThree.appendChild( circleThreeText );
//     circleThreeText.href = "mailto:euanandlaura@gmail.com";
//   }   

//   circleThree.onmouseleave = function() {
//     circleThree.innerText = "";
//     circleThree.appendChild( circleThreeTitle );
//   }    

//   var circleFour = document.createElement( 'td' );
//   circleFour.id = "circleFour"; 
//   circleFour.className = "circle";  

//   var circleFourTitle = document.createElement( 'h1' );
//   circleFourTitle.innerText = "Hotels";
//   circleFour.appendChild( circleFourTitle );

//   var circleFourText = document.createElement( 'a' );
//   circleFourText.innerText = "Like the flights these are pretty essential. We are \n doing a fair amount of travelling throughout the islands so any help will be very much appreciated. \n\n If you'd like to help with these then give this a click."

//   circleFour.onmouseover = function() {
//     circleFour.innerText = "";
//     circleFour.appendChild( circleFourText );
//     circleFourText.href = "mailto:euanandlaura@gmail.com";
//   }   

//   circleFour.onmouseleave = function() {
//     circleFour.innerText = "";
//     circleFour.appendChild( circleFourTitle );
//   }    

//   var circleFive = document.createElement( 'td' );
//   circleFive.id = "circleFive";   
//   circleFive.className = "circle"; 

//   var circleFiveTitle = document.createElement( 'h1' );
//   circleFiveTitle.innerText = "Drinks on the Beach";
//   circleFive.appendChild( circleFiveTitle );

//   var circleFiveText = document.createElement( 'a' );
//   circleFiveText.innerText = "For those of you who know Laura you'll be aware \n that relaxing on the beach is pretty important to her so any help to do it in style would be amazing. \n\n If you'd like to help with this then give this a click."

//   circleFive.onmouseover = function() {
//     circleFive.innerText = "";
//     circleFive.appendChild( circleFiveText );
//     circleFiveText.href = "mailto:euanandlaura@gmail.com";
//   }   

//   circleFive.onmouseleave = function() {
//     circleFive.innerText = "";
//     circleFive.appendChild( circleFiveTitle );
//   }      

//   var circleSix = document.createElement( 'td' );
//   circleSix.id = "circleSix";
//   circleSix.className = "circle";   


//   var circleSixTitle = document.createElement( 'h1' );
//   circleSixTitle.innerText = "Delicious Food";
//   circleSix.appendChild( circleSixTitle );

//   var circleSixText = document.createElement( 'a' );
//   circleSixText.innerText = "What would be the point in travelling half way \n round the world without sampling as much delicious food as possible? \n\n If you'd like to help with this then give this a click."

//   circleSix.onmouseover = function() {
//     circleSix.innerText = "";
//     circleSix.appendChild( circleSixText );
//     circleSixText.href = "mailto:euanandlaura@gmail.com";
//   }   

//   circleSix.onmouseleave = function() {
//     circleSix.innerText = "";
//     circleSix.appendChild( circleSixTitle );
//   }    

//   rowOne.appendChild( circleOne );
//   rowOne.appendChild( circleTwo );
//   rowOne.appendChild( circleThree );
//   rowTwo.appendChild( circleFour );
//   rowTwo.appendChild( circleFive );
//   rowTwo.appendChild( circleSix );

//   table.appendChild( rowOne );
//   table.appendChild( rowTwo );

//   giftSpace.appendChild( table );
// },