var EnglishFlightsView = function() {
  // this.url = "https://gift-database.herokuapp.com/gifts";
  // this.url = "http://localhost:8080/gifts";
  this.flightUrl = "http://localhost:1235/flights";

  this.flightObject = [];
  this.leave = 0;
  this.returnFlight = 0;
  this.bigIsland = 0;
  this.maui = 0;
  this.kauai = 0;

  this.buyLeave = 0;
  this.buyReturnFlight = 0;
  this.buyBigIsland = 0;
  this.buyMaui = 0;
  this.buyKauai = 0;

  this.total = 0;

  this.getFlights();
}

EnglishFlightsView.prototype = {

  getFlights: function() {

    setInterval( function() {
      if( this.flightObject.length === 0 ) {
        this.displayLoading()
      }
    }.bind( this ), 10 );

    var request = new XMLHttpRequest();
    request.open( 'GET', this.flightUrl );
    request.setRequestHeader("Content-Type", "application/json")

    request.onload = () => {
      if( request.status === 200 ) {
        var flightObject = JSON.parse( request.responseText );
        this.flightObject = flightObject;
        for( var i = 0; i < flightObject.length; i++ ) {
            if( this.flightObject[i].id === 1 ) {
                this.leave = flightObject[i].leave;
                this.returnFlight = flightObject[i].return;
                this.bigIsland = flightObject[i].bigisland;
                this.maui = flightObject[i].maui;
                this.kauai = flightObject[i].kauai;
            }
        }
        this.hideLoading();
        this.displayFlights();
      }
    }
    request.send( null );
  },

  updateFlights: function() {
    var newLeave = this.leave - this.buyLeave;
    var newReturn = this.returnFlight - this.buyReturnFlight;
    var newBigIsland = this.bigIsland - this.buyBigIsland;
    var newMaui = this.maui - this.buyMaui;
    var newKauai = this.kauai - this.buyKauai;

    var url = this.flightUrl + "/1";
    var request = new XMLHttpRequest();
    request.open( 'PUT', url );
    request.setRequestHeader( "Content-type", "application/json" );
    request.onload = () => {
        console.log( "Loaded" );
    }
    var data = {
      flight : {
        leave: newLeave,
        return: newReturn,
        bigisland: newBigIsland,
        maui: newMaui,
        kauai: newKauai
      }
    }
    request.send( JSON.stringify( data ));
    console.log( data );
  },


  displayLoading: function() {
    var giftSpace = document.getElementById( 'gift-space' );
    giftSpace.innerText = "";

    var img = document.createElement( 'img' );
    img.src = "./css/image/loading.gif";
    img.id = "loading";
    giftSpace.appendChild( img );
  },

  hideLoading: function() {
    var giftSpace = document.getElementById( 'gift-space' );
    giftSpace.innerText = "";
  },

  displayFlights: function() {
    var giftSpace = document.getElementById( 'gift-space' );
    giftSpace.style.display = "none";

    while( giftSpace.hasChildNodes() ) {
      giftSpace.removeChild( giftSpace.lastChild );
    }

    var giftList = document.getElementById( 'gift-list' );

    while( giftList.hasChildNodes() ) {
      giftList.removeChild( giftList.lastChild );
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
      this.displayFlightPick();
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
      this.updateFlights();
      var request = new XMLHttpRequest();
      request.open( 'POST', this.flightUrl );
      request.setRequestHeader("Content-Type", "application/json");
      request.onload = () => {
        this.displayThankYou();
      }
      var data = {
        flight: {
          name: name.value,
          email: email.value,
          total: this.total,
          comment: message.value,
          leave: this.buyLeave,
          return: this.buyReturnFlight,
          bigisland: this.buyBigIsland,
          maui: this.buyMaui,
          kauai: this.buyKauai,
          currency: "£"
        }
      }
      request.send( JSON.stringify( data ));
    }.bind( this )

    var backButton = document.createElement( 'button' );
    backButton.innerText = "Back";
    backButton.onclick = function() {
      this.displayGifts();
    }.bind( this );

    var brOne = document.createElement( 'br' );
    var brTwo = document.createElement( 'br' );
    var brThree = document.createElement( 'br' );

    giftSpace.appendChild( title );
    giftSpace.appendChild( dotsThree );
    giftSpace.appendChild( name );
    giftSpace.appendChild( email );
    giftSpace.appendChild( brOne );
    giftSpace.appendChild( brTwo );
    giftSpace.appendChild( message );
    giftSpace.appendChild( brThree );
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
  },

  displayFlightPick: function() {

    var giftSpaced = document.getElementById( 'gift-space' );
    giftSpaced.style.display = "none";

    while( giftSpaced.hasChildNodes() ) {
      giftSpaced.removeChild( giftSpaced.lastChild );
    }

    var giftSpace = document.getElementById( 'gift-list' );
    giftSpace.style.display = "block";

    var flightTitle = document.createElement( 'h1' );
    flightTitle.innerText = "Flights";
    flightTitle.className = "circleTitleRaisedHigher";

    // ##################################################

    var flightListOne = document.createElement( 'ul' );
    flightListOne.id = "flightListOne";

    var leaveList = document.createElement( 'li' );

    var leave = document.createElement( 'img' );
    leave.src = "../css/image/plane.png";
    leave.id = "leaveImg";
    leave.className = "giftImage";

    var cost = 100;

    var leaveUnit = document.createElement( 'h5' );
    leaveUnit.innerText = "Unit Price: £" + cost;

    var leaveAvail = document.createElement( 'h5' );
    leaveAvail.innerText = "Available: " + this.leave + "/8";

    var leaveSelectValue = document.createElement( 'h5' );

    var leaveSelect = document.createElement( 'input' );
    leaveSelect.type = "range";
    leaveSelect.step = 1;
    leaveSelect.min = 0;
    leaveSelect.max = this.leave;
    leaveSelect.value = 0;
    leaveSelect.list = "steplist";

    leaveSelect.onchange = function() {
        leaveSelectValue.innerText = "Give " + leaveSelect.value + " Units";
        this.buyLeave = leaveSelect.value;
        this.total = cost * leaveSelect.value;
    }.bind( this );

    leaveSelectValue.innerText = "Give " + leaveSelect.value + " Units";

    var leaveButton = document.createElement( 'button' );
    leaveButton.innerText = "Give...";
    leaveButton.onclick = function() {
        this.displayForm( "Flights" );
        }.bind( this ); 

    var leaveText = document.createElement( 'h5' );
    leaveText.innerText = "Flights to Hawaii";

    giftSpace.appendChild( flightListOne );

    leaveList.appendChild( leave );
    leaveList.appendChild( leaveUnit );
    leaveList.appendChild( leaveAvail );
    leaveList.appendChild( leaveSelect );
    leaveList.appendChild( leaveSelectValue );
    leaveList.appendChild( leaveButton );
    leaveList.appendChild( leaveText );

    flightListOne.appendChild( leaveList );

// ######################################################

    var returnFlightList = document.createElement( 'li' );

    var returnFlight = document.createElement( 'img' );
    returnFlight.src = "../css/image/plane.png";
    returnFlight.id = "returnFlightImg";
    returnFlight.className = "giftImage";

    var cost = 100
    var returnFlightUnit = document.createElement( 'h5' );
    returnFlightUnit.innerText = "Unit Price: £" + cost;

    var returnFlightAvail = document.createElement( 'h5' );
    returnFlightAvail.innerText = "Available: " + this.returnFlight + "/8";

    var returnFlightSelectValue = document.createElement( 'h5' );

    var returnFlightSelect = document.createElement( 'input' );
    returnFlightSelect.type = "range";
    returnFlightSelect.step = 1;
    returnFlightSelect.min = 0;
    returnFlightSelect.max = this.returnFlight;
    returnFlightSelect.value = 0;
    returnFlightSelect.list = "steplist";

    returnFlightSelect.onchange = function() {
        returnFlightSelectValue.innerText = "Give " + returnFlightSelect.value + " Units";
        this.buyReturnFlight = returnFlightSelect.value;
        this.total = cost * returnFlightSelect.value;
    }.bind( this );

    returnFlightSelectValue.innerText = "Give " + returnFlightSelect.value + " Units";

    var returnButton = document.createElement( 'button' );
    returnButton.innerText = "Give...";
    returnButton.onclick = function() {
        this.displayForm( "Flights" );
    }.bind( this );

    var returnText = document.createElement( 'h5' );
    returnText.innerText = "Flights back home";

    giftSpace.appendChild( flightListOne );

    returnFlightList.appendChild( returnFlight );
    returnFlightList.appendChild( returnFlightUnit );
    returnFlightList.appendChild( returnFlightAvail );
    returnFlightList.appendChild( returnFlightSelect );
    returnFlightList.appendChild( returnFlightSelectValue );
    returnFlightList.appendChild( returnButton );
    returnFlightList.appendChild( returnText );

    // flightListOne.appendChild( returnFlightList );

    // ##################################################

    var bigIslandFlightList = document.createElement( 'li' );

    var bigIslandFlight = document.createElement( 'img' );
    bigIslandFlight.src = "../css/image/plane.png";
    bigIslandFlight.id = "returnFlightImg";
    bigIslandFlight.className = "giftImage";

    var cost = 100;

    var bigIslandFlightUnit = document.createElement( 'h5' );
    bigIslandFlightUnit.innerText = "Unit Price: £" + cost;

    var bigIslandFlightAvail = document.createElement( 'h5' );
    bigIslandFlightAvail.innerText = "Available: " + this.bigIsland + "/2";

    var bigIslandFlightSelectValue = document.createElement( 'h5' );

    var bigIslandFlightSelect = document.createElement( 'input' );
    bigIslandFlightSelect.type = "range";
    bigIslandFlightSelect.step = 1;
    bigIslandFlightSelect.min = 0;
    bigIslandFlightSelect.max = this.bigIsland;
    bigIslandFlightSelect.value = 0;
    bigIslandFlightSelect.list = "steplist";

    bigIslandFlightSelect.onchange = function() {
        bigIslandFlightSelectValue.innerText = "Give " + bigIslandFlightSelect.value + " Units";
        this.buyBigIsland = bigIslandFlightSelect.value;
        this.total = cost * bigIslandFlightSelect.value;
    }.bind( this );

    bigIslandFlightSelectValue.innerText = "Give " + bigIslandFlightSelect.value + " Units";

    var bigIslandButton = document.createElement( 'button' );
    bigIslandButton.innerText = "Give...";
    bigIslandButton.onclick = function() {
        this.displayForm( "Flights" );
    }.bind( this );

    var bigIslandText = document.createElement( 'h5' );
    bigIslandText.innerText = "Big Island to Maui";

    bigIslandFlightList.appendChild( bigIslandFlight );
    bigIslandFlightList.appendChild( bigIslandFlightUnit );
    bigIslandFlightList.appendChild( bigIslandFlightAvail );
    bigIslandFlightList.appendChild( bigIslandFlightSelect );
    bigIslandFlightList.appendChild( bigIslandFlightSelectValue );
    bigIslandFlightList.appendChild( bigIslandButton );
    bigIslandFlightList.appendChild( bigIslandText );

    flightListOne.appendChild( bigIslandFlightList );

    // ##################################################

    var flightListTwo = document.createElement( 'ul' );
    flightListTwo.id = "flightListTwo";

    var mauiFlightList = document.createElement( 'li' );

    var mauiFlight = document.createElement( 'img' );
    mauiFlight.src = "../css/image/plane.png";
    mauiFlight.id = "returnFlightImg";
    mauiFlight.className = "giftImage";

    var cost = 100;

    var mauiFlightUnit = document.createElement( 'h5' );
    mauiFlightUnit.innerText = "Unit Price: £" + cost;

    var mauiFlightAvail = document.createElement( 'h5' );
    mauiFlightAvail.innerText = "Available: " + this.maui + "/2";

    var mauiFlightSelectValue = document.createElement( 'h5' );

    var mauiFlightSelect = document.createElement( 'input' );
    mauiFlightSelect.type = "range";
    mauiFlightSelect.step = 1;
    mauiFlightSelect.min = 0;
    mauiFlightSelect.max = this.maui;
    mauiFlightSelect.value = 0;
    mauiFlightSelect.list = "steplist";

    mauiFlightSelect.onchange = function() {
        mauiFlightSelectValue.innerText = "Give " + mauiFlightSelect.value + " Units";
        this.buyMaui = mauiFlightSelect.value;
        this.total = cost * mauiFlightSelect.value;
    }.bind( this );

    mauiFlightSelectValue.innerText = "Give " + mauiFlightSelect.value + " Units";

    var mauiButton = document.createElement( 'button' );
    mauiButton.innerText = "Give...";
    mauiButton.onclick = function() {
        this.displayForm( "Flights" );
    }.bind( this );

    var mauiText = document.createElement( 'h5' );
    mauiText.innerText = "Maui to Kauai";

    mauiFlightList.appendChild( mauiFlight );
    mauiFlightList.appendChild( mauiFlightUnit );
    mauiFlightList.appendChild( mauiFlightAvail );
    mauiFlightList.appendChild( mauiFlightSelect );
    mauiFlightList.appendChild( mauiFlightSelectValue );
    mauiFlightList.appendChild( mauiButton );
    mauiFlightList.appendChild( mauiText );

    // ###################################################

    var kauaiFlightList = document.createElement( 'li' );

    var kauaiFlight = document.createElement( 'img' );
    kauaiFlight.src = "../css/image/plane.png";
    kauaiFlight.id = "returnFlightImg";
    kauaiFlight.className = "giftImage";

    var cost = 100;

    var kauaiFlightUnit = document.createElement( 'h5' );
    kauaiFlightUnit.innerText = "Unit Price: £" + cost;

    var kauaiFlightAvail = document.createElement( 'h5' );
    kauaiFlightAvail.innerText = "Available: " + this.kauai + "/1";

    var kauaiFlightSelectValue = document.createElement( 'h5' );

    var kauaiFlightSelect = document.createElement( 'input' );
    kauaiFlightSelect.type = "range";
    kauaiFlightSelect.step = 1;
    kauaiFlightSelect.min = 0;
    kauaiFlightSelect.max = this.kauai;
    kauaiFlightSelect.value = 0;
    kauaiFlightSelect.list = "steplist";

    kauaiFlightSelect.onchange = function() {
        kauaiFlightSelectValue.innerText = "Give " + kauaiFlightSelect.value + " Units";
        this.buyKauai = kauaiFlightSelect.value;
        this.total = cost * kauaiFlightSelect.value;
    }.bind( this );

    kauaiFlightSelectValue.innerText = "Give " + kauaiFlightSelect.value + " Units";

    var kauaiButton = document.createElement( 'button' );
    kauaiButton.innerText = "Give...";
    kauaiButton.onclick = function() {
        this.displayForm( "Flights" );
    }.bind( this );

    var kauaiText = document.createElement( 'h5' );
    kauaiText.innerText = "Kauai to Honolulu";

    kauaiFlightList.appendChild( kauaiFlight );
    kauaiFlightList.appendChild( kauaiFlightUnit );
    kauaiFlightList.appendChild( kauaiFlightAvail );
    kauaiFlightList.appendChild( kauaiFlightSelect );
    kauaiFlightList.appendChild( kauaiFlightSelectValue );
    kauaiFlightList.appendChild( kauaiButton );
    kauaiFlightList.appendChild( kauaiText );

    flightListOne.appendChild( kauaiFlightList );
    flightListTwo.appendChild( mauiFlightList );
    flightListTwo.appendChild( returnFlightList );

    giftSpace.appendChild( flightListTwo );

    giftSpace.style.display = "block";
  }
}

module.exports = EnglishFlightsView;