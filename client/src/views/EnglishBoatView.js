var EnglishBoatView = function() {

  this.boatUrl = "http://localhost:1235/boats";

  this.boatObject = [];
  this.boat = 0;

  this.buyBoats = 0;

  this.total = 0;

  this.getBoats();
}

EnglishBoatView.prototype = {

  getBoats: function() {
    setInterval( function() {
      if( this.boatObject.length === 0 ) {
        this.displayLoading()
      }
    }.bind( this ), 10 );

    var request = new XMLHttpRequest();
    request.open( 'GET', this.boatUrl );
    request.setRequestHeader("Content-Type", "application/json")

    request.onload = () => {
      if( request.status === 200 ) {
        var boatObject = JSON.parse( request.responseText );
        this.boatObject = boatObject;
        for( var i = 0; i < boatObject.length; i++ ) {
            if( this.boatObject[i].id === 1 ) {
                this.boat = boatObject[i].boat;
            }
        }
        this.hideLoading();
        this.displayBoats();
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

  updateBoats: function() {
    // var newBoat = 1;
    var newBoat = this.boat -= this.buyBoats;

    var url = this.boatUrl + "/1";
    var request = new XMLHttpRequest();
    request.open( 'PUT', url );
    request.setRequestHeader( "Content-type", "application/json" );
    request.onload = () => {
        // console.log( "Loaded" );
    }
    var data = {
      boat : {
        boat: newBoat
      }
    }
    request.send( JSON.stringify( data ));
    console.log( data );
  },

  displayBoats: function() {
    var giftSpace = document.getElementById( 'gift-space' );
    giftSpace.style.display = "none";

    var giftList = document.getElementById( 'gift-list' );

    while( giftList.hasChildNodes() ) {
      giftList.removeChild( giftList.lastChild );
    }

    var title = document.createElement( 'h1' );
    title.innerText = "Boat Tour";
    title.className = "circleTitle";

    var dotsFour = document.createElement( 'p' );
    dotsFour.innerText = "--------------------------------"

    var text = document.createElement( 'h5' );
    text.innerText = "Another of the main attractions we would love to get to is a boat tour of the Napali Coast. \n\n If you'd like to help with this then give this a click."

    var goButton = document.createElement( 'button' );
    goButton.innerText = "Boat Tour";
    goButton.onclick = function() {
      this.displayBoatPick();
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
      this.updateBoats();
      var request = new XMLHttpRequest();
      request.open( 'POST', this.boatUrl );
      request.setRequestHeader("Content-Type", "application/json");
      request.onload = () => {
        this.displayThankYou();
      }
      var data = {
        boat: {
          name: name.value,
          email: email.value,
          total: this.total,
          comment: message.value,
          boat: this.buyBoats,
          currency: "£"
        }
      }
      request.send( JSON.stringify( data ));
    }.bind( this )

    var backButton = document.createElement( 'button' );
    backButton.innerText = "Back";
    backButton.onclick = function() {
      this.displayBoatPick();
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

  displayBoatPick: function() {

    var giftSpaced = document.getElementById( 'gift-space' );
    giftSpaced.style.display = "none";

    var giftSpace = document.getElementById( 'gift-list' );
    giftSpace.style.display = "block";

    while( giftSpace.hasChildNodes() ) {
      giftSpace.removeChild( giftSpace.lastChild );
    }

    var boatTitle = document.createElement( 'h1' );
    boatTitle.innerText = "Boats";
    boatTitle.className = "circleTitleRaisedHigher";

    var boatListOne = document.createElement( 'ul' );
    boatListOne.id = "boatListOne";

    var boatList = document.createElement( 'li' );

    var boat = document.createElement( 'img' );
    boat.src = "../css/image/boat.png";
    boat.id = "boatImg";
    boat.className = "giftImage";

    var cost = 100;

    var boatUnit = document.createElement( 'h5' );
    boatUnit.innerText = "Unit Price: £" + cost;

    var boatAvail = document.createElement( 'h5' );
    boatAvail.innerText = "Available: " + this.boat + "/1";

    var boatSelectValue = document.createElement( 'h5' );

    var boatSelect = document.createElement( 'input' );
    boatSelect.type = "range";
    boatSelect.step = 1;
    boatSelect.min = 0;
    boatSelect.max = this.boat;
    boatSelect.value = 0;
    boatSelect.list = "steplist";

    boatSelect.onchange = function() {
        boatSelectValue.innerText = "Give " + boatSelect.value + " Units";
        this.buyBoats = boatSelect.value;
        this.total = cost * boatSelect.value;
    }.bind( this );

    boatSelectValue.innerText = "Give " + boatSelect.value + " Units";

    var boatText = document.createElement( 'h5' );
    boatText.innerText = "Boat tour of Napali Bay";

    giftSpace.appendChild( boatListOne );

    boatList.appendChild( boat );
    boatList.appendChild( boatUnit );
    boatList.appendChild( boatAvail );
    boatList.appendChild( boatSelect );
    boatList.appendChild( boatSelectValue );
    boatList.appendChild( boatText );

    boatListOne.appendChild( boatList );
    giftSpace.appendChild( boatListOne );

    giftSpace.style.display = "block";

    var giveButton = document.createElement( 'button' );
    var cancelButton = document.createElement( 'button' );

    giveButton.innerText = "Give...";
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

module.exports = EnglishBoatView;