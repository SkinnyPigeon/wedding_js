var EnglishGiftView = function() {
  this.display();
}

EnglishGiftView.prototype = {

  display: function() {
    var giftSpace = document.getElementById( 'gift-space' );
    var table = document.createElement( 'table' );
    table.id = "giftTable";

    var rowOne = document.createElement( 'tr' );
    var rowTwo = document.createElement( 'tr' );

    var circleOne = document.createElement( 'td' );
    circleOne.id = "circleOne";
    circleOne.className = "circle"; 

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