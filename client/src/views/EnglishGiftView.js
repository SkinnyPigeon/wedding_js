var EnglishGiftView = function() {
  this.display();
}

EnglishGiftView.prototype = {

  display: function() {
    var giftCircle = document.getElementById( 'gift-circle' );
    giftCircle.innerText = "";

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
      this.displayCircles();
    }.bind( this );

    giftCircle.appendChild( title );
    giftCircle.appendChild( dotsOne );
    giftCircle.appendChild( text );
    giftCircle.appendChild( button );

  },

  displayCircles: function() {
    var circleSpace = document.getElementById( 'circle-space' );
    circleSpace.style.display = "none";

    var giftSpace = document.getElementById( 'gift-space' );
    giftSpace.innerText = "";
    giftSpace.style.display = "block";

    var table = document.createElement( 'table' );
    table.id = "giftTable";

    var rowOne = document.createElement( 'tr' );
    var rowTwo = document.createElement( 'tr' );

    var circleOne = document.createElement( 'td' );
    circleOne.id = "circleOne";
    circleOne.className = "circle";

    var circleOneTitle = document.createElement( 'h1' );
    circleOneTitle.innerText = "Flights";
    circleOne.appendChild( circleOneTitle );

    var circleOneText = document.createElement( 'a' );
    circleOneText.innerText = "These are the big ones. We've got a couple flights to get to Hawaii then another few internal flights. \n\n If you'd like to help with these the give this a click."

    circleOne.onmouseover = function() {
      circleOne.innerText = "";
      circleOne.appendChild( circleOneText );
      circleOneText.href = "mailto:euanandlaura@gmail.com";
    }

    circleOne.onmouseleave = function() {
      circleOne.innerText = "";
      circleOne.appendChild( circleOneTitle );
    }

    var circleTwo = document.createElement( 'td' );
    circleTwo.id = "circleTwo";  
    circleTwo.className = "circle"; 

    var circleTwoTitle = document.createElement( 'h1' );
    circleTwoTitle.innerText = "Lava Tour";
    circleTwo.appendChild( circleTwoTitle );

    var circleTwoText = document.createElement( 'a' );
    circleTwoText.innerText = "One of the sights we are really hoping to get to is a tour of the volcanos. \n\n If you'd like to help with this then give this a click."

    circleTwo.onmouseover = function() {
      circleTwo.innerText = "";
      circleTwo.appendChild( circleTwoText );
      circleTwoText.href = "mailto:euanandlaura@gmail.com";
    }   

    circleTwo.onmouseleave = function() {
      circleTwo.innerText = "";
      circleTwo.appendChild( circleTwoTitle );
    }

    var circleThree = document.createElement( 'td' );
    circleThree.id = "circleThree";
    circleThree.className = "circle";

    var circleThreeTitle = document.createElement( 'h1' );
    circleThreeTitle.innerText = "Lava Tour";
    circleThree.appendChild( circleThreeTitle );

    var circleThreeText = document.createElement( 'a' );
    circleThreeText.innerText = "Another of the main attractions we would love to get to is a boat tour of the Napali Coast. \n\n If you'd like to help with this then give this a click."

    circleThree.onmouseover = function() {
      circleThree.innerText = "";
      circleThree.appendChild( circleThreeText );
      circleThreeText.href = "mailto:euanandlaura@gmail.com";
    }   

    circleThree.onmouseleave = function() {
      circleThree.innerText = "";
      circleThree.appendChild( circleThreeTitle );
    }    

    var circleFour = document.createElement( 'td' );
    circleFour.id = "circleFour"; 
    circleFour.className = "circle";  

    var circleFourTitle = document.createElement( 'h1' );
    circleFourTitle.innerText = "Hotels";
    circleFour.appendChild( circleFourTitle );

    var circleFourText = document.createElement( 'a' );
    circleFourText.innerText = "Like the flights these are pretty essential. We are \n doing a fair amount of travelling throughout the islands so any help will be very much appreciated. \n\n If you'd like to help with these then give this a click."

    circleFour.onmouseover = function() {
      circleFour.innerText = "";
      circleFour.appendChild( circleFourText );
      circleFourText.href = "mailto:euanandlaura@gmail.com";
    }   

    circleFour.onmouseleave = function() {
      circleFour.innerText = "";
      circleFour.appendChild( circleFourTitle );
    }    

    var circleFive = document.createElement( 'td' );
    circleFive.id = "circleFive";   
    circleFive.className = "circle";    

    var circleSix = document.createElement( 'td' );
    circleSix.id = "circleSix";
    circleSix.className = "circle";    

    rowOne.appendChild( circleOne );
    rowOne.appendChild( circleTwo );
    rowOne.appendChild( circleThree );
    rowTwo.appendChild( circleFour );
    rowTwo.appendChild( circleFive );
    rowTwo.appendChild( circleSix );

    table.appendChild( rowOne );
    table.appendChild( rowTwo );

    giftSpace.appendChild( table );
  },

  helpWithFlights: function() {

  },

}

module.exports = EnglishGiftView;