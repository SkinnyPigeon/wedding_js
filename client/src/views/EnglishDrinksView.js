var EnglishDrinksView = function() {

  this.drinkUrl = "http://localhost:1235/drinks";

  this.drinkObject = [];
  this.drink = 0;

  this.buyDrinks = 0;

  this.total = 0;

  this.getDrinks();
}

EnglishDrinksView.prototype = {

  getDrinks: function() {
    setInterval( function() {
      if( this.drinkObject.length === 0 ) {
        this.displayLoading()
      }
    }.bind( this ), 10 );

    var request = new XMLHttpRequest();
    request.open( 'GET', this.drinkUrl );
    request.setRequestHeader("Content-Type", "application/json")

    request.onload = () => {
      if( request.status === 200 ) {
        var drinkObject = JSON.parse( request.responseText );
        this.drinkObject = drinkObject;
        for( var i = 0; i < drinkObject.length; i++ ) {
            if( this.drinkObject[i].id === 1 ) {
                this.drink = drinkObject[i].drink;
            }
        }
        this.hideLoading();
        this.displayDrinks();
      }
    }
    request.send( null );
  },

  displayLoading: function() {
    var giftSpace = document.getElementById( 'gift-space' );
    giftSpace.style.display = "none";

    var giftList = document.getElementById( "gift-list" );
    giftList.innerText = "";
    giftList.style.display = "block";

    var img = document.createElement( 'img' );
    img.src = "./css/image/loading.gif";
    img.id = "loading";
    giftList.appendChild( img );
  },

  hideLoading: function() {
    var giftList = document.getElementById( 'gift-list' );
    giftList.innerText = "";
  },

  updateDrinks: function() {
    var newDrink = this.drink + this.buyDrinks;

    var url = this.drinkUrl + "/1";
    var request = new XMLHttpRequest();
    request.open( 'PUT', url );
    request.setRequestHeader( "Content-type", "application/json" );
    request.onload = () => {
        // console.log( "Loaded" );
    }
    var data = {
      drink : {
        drink: newDrink
      }
    }
    request.send( JSON.stringify( data ));
    console.log( data );
  },

  displayDrinks: function() {
    var giftSpace = document.getElementById( 'gift-space' );
    giftSpace.style.display = "none";

    var giftList = document.getElementById( 'gift-list' );

    while( giftList.hasChildNodes() ) {
      giftList.removeChild( giftList.lastChild );
    }

    var title = document.createElement( 'h1' );
    title.innerText = "Drinks";
    title.className = "circleTitle";

    var dotsFour = document.createElement( 'p' );
    dotsFour.innerText = "--------------------------------"

    var text = document.createElement( 'h5' );
    text.innerText = "For those of you who know Laura you'll be aware that relaxing on the beach is pretty important to her so any help to do it in style would be amazing. \n\n If you'd like to help with this then give this a click."

    var goButton = document.createElement( 'button' );
    goButton.innerText = "Drinks";
    goButton.onclick = function() {
      this.displayDrinkPick();
    }.bind( this );

    var backButton = document.createElement( 'button' );
    backButton.innerText = "Back";
    backButton.onclick = function() {
      this.displayGifts() 
    }.bind( this );

    giftList.style.display = "block";

    giftList.appendChild( title );
    giftList.appendChild( dotsFour );
    giftList.appendChild( text );
    giftList.appendChild( goButton );
    giftList.appendChild( backButton );
  },

  displayForm: function( towardsValue ) {
    var giftSpace = document.getElementById( 'gift-space' );
    giftSpace.style.display = "none";

    var giftList = document.getElementById( 'gift-list' );
    giftList.style.display = "none";

    while( giftList.hasChildNodes() ) {
      giftList.removeChild( giftList.lastChild );
    }

    giftList.style.display = "block";

    var title = document.createElement( 'h1' );
    title.className = "circleTitle";
    title.innerText = "Thank You";

    var dotsThree = document.createElement( 'p' );
    dotsThree.innerText = "--------------------------------"

    var name = document.createElement( 'input' );
    name.placeholder = "Name...";

    var email = document.createElement( 'input' );
    email.placeholder = "Email...";

    var message = document.createElement( 'input' );
    message.placeholder = "Message";

    var button = document.createElement( 'button' );
    button.innerText = "Click";

    button.onclick = function() {
      this.updateDrinks();
      var request = new XMLHttpRequest();
      request.open( 'POST', this.drinkUrl );
      request.setRequestHeader("Content-Type", "application/json");
      request.onload = () => {
        this.displayThankYou();
      }
      var data = {
        drink: {
          name: name.value,
          email: email.value,
          total: this.total,
          comment: message.value,
          drink: this.buyDrinks,
          currency: "£"
        }
      }
      request.send( JSON.stringify( data ));
    }.bind( this )

    var backButton = document.createElement( 'button' );
    backButton.innerText = "Back";
    backButton.onclick = function() {
      this.displayDrinkPick();
    }.bind( this );

    var brOne = document.createElement( 'br' );
    var brTwo = document.createElement( 'br' );
    var brThree = document.createElement( 'br' );

    giftList.appendChild( title );
    giftList.appendChild( dotsThree );
    giftList.appendChild( name );
    giftList.appendChild( email );
    giftList.appendChild( brOne );
    giftList.appendChild( brTwo );
    giftList.appendChild( message );
    giftList.appendChild( brThree );
    giftList.appendChild( button );
    giftList.appendChild( backButton );
  },

  displayThankYou: function() {
    var giftSpace = document.getElementById( 'gift-space' );
    giftSpace.style.display = "none";

    while( giftSpace.hasChildNodes() ) {
      giftSpace.removeChild( giftSpace.lastChild );
    }

    var giftList = document.getElementById( 'gift-list' );
    giftList.style.display = "none";

    var thankYou = document.createElement( 'h1' );
    thankYou.className = "circleTitle";
    thankYou.innerText = "Thank you very much";
    giftSpace.style.display = "block";

    giftSpace.appendChild( thankYou );
  },

  displayDrinkPick: function() {

    var giftSpaced = document.getElementById( 'gift-space' );
    giftSpaced.style.display = "none";

    var giftSpace = document.getElementById( 'gift-list' );
    giftSpace.style.display = "block";

    while( giftSpace.hasChildNodes() ) {
      giftSpace.removeChild( giftSpace.lastChild );
    }

    var drinkTitle = document.createElement( 'h1' );
    drinkTitle.innerText = "Drinks";
    drinkTitle.className = "circleTitleRaisedHigher";

    var drinkListOne = document.createElement( 'ul' );
    drinkListOne.id = "drinkListOne";

    var drinkList = document.createElement( 'li' );

    var drink = document.createElement( 'img' );
    drink.src = "../css/image/drink.png";
    drink.id = "drinkImg";
    drink.className = "giftImage";

    var cost = 20;

    var drinkUnit = document.createElement( 'h5' );
    drinkUnit.innerText = "Unit Price: £" + cost;

    var drinkAvail = document.createElement( 'h5' );
    drinkAvail.innerText = "Available: " + String.fromCharCode( 8734 ) + "/" + String.fromCharCode( 8734 );

    var drinkSelectValue = document.createElement( 'h5' );

    var drinkSelect = document.createElement( 'input' );
    drinkSelect.type = "range";
    drinkSelect.step = 1;
    drinkSelect.min = 0;
    drinkSelect.max = 10;
    drinkSelect.value = 0;
    drinkSelect.list = "steplist";

    drinkSelect.onchange = function() {
        drinkSelectValue.innerText = "Give " + drinkSelect.value + " Units";
        this.buyDrinks = drinkSelect.value;
        this.total = cost * drinkSelect.value;
    }.bind( this );

    drinkSelectValue.innerText = "Give " + drinkSelect.value + " Units";

    var drinkText = document.createElement( 'h5' );
    drinkText.innerText = "Drinks on the Beach";

    giftSpace.appendChild( drinkListOne );

    drinkList.appendChild( drink );
    drinkList.appendChild( drinkUnit );
    drinkList.appendChild( drinkAvail );
    drinkList.appendChild( drinkSelect );
    drinkList.appendChild( drinkSelectValue );
    drinkList.appendChild( drinkText );

    drinkListOne.appendChild( drinkList );
    giftSpace.appendChild( drinkListOne );

    giftSpace.style.display = "block";

    var giveButton = document.createElement( 'button' );
    var cancelButton = document.createElement( 'button' );

    giveButton.innerText = "Gift...";
    giveButton.onclick = function() {
      this.displayForm();
    }.bind( this );

    cancelButton.innerText = "Back...";
    cancelButton.onclick = function() {
      this.displayGifts();
    }.bind( this );

    giftSpace.appendChild( giveButton );
    giftSpace.appendChild( cancelButton ); 
  },

  displayGifts: function() {
    var giftList = document.getElementById( 'gift-list' );
    giftList.style.display = "none";

    var giftSpace = document.getElementById( 'gift-space' );
    giftSpace.style.display = "block";
  }  
}

module.exports = EnglishDrinksView;