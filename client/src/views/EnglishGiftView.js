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

    var circleOneText = document.createElement( 'h5' );
    circleOneText.innerText = "These are the big ones. We've got a couple flights to get to Hawaii then another few internal flights."

    circleOne.onmouseover = function() {
      circleOne.innerText = "";
      circleOne.appendChild( circleOneText );
    }

    circleOne.onmouseleave = function() {
      circleOne.innerText = "";
      circleOne.appendChild( circleOneTitle );
    }


    var circleTwo = document.createElement( 'td' );
    circleTwo.id = "circleTwo";  
    circleTwo.className = "circle";    

    var circleThree = document.createElement( 'td' );
    circleThree.id = "circleThree";
    circleThree.className = "circle";    

    var circleFour = document.createElement( 'td' );
    circleFour.id = "circleFour"; 
    circleFour.className = "circle";    

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

}

module.exports = EnglishGiftView;