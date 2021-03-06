var EnglishFlightsView = function() {
  // this.url = "https://gift-database.herokuapp.com/gifts";
  this.flightUrl = "https://gift-list-database.herokuapp.com/flights"
  // this.url = "http://localhost:8080/gifts";
  // this.flightUrl = "http://localhost:1235/flights";

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

  displayFlights: function() {
    var giftSpace = document.getElementById( 'gift-space' );
    giftSpace.style.display = "none";

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
    text.innerText = "These are the big ones. We've got a couple flights to get to Hawaii then another few internal flights. \n\n If you are worried we would might have to swim some of it click below."

    var goButton = document.createElement( 'button' );
    goButton.innerText = "Flights";
    goButton.onclick = function() {
      this.displayFlightPick();
    }.bind( this );

    var backButton = document.createElement( 'button' );
    backButton.innerText = "Back";
    backButton.onclick = function() {
      this.displayGifts(); 
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

    var thankYouText = document.createElement( 'h5' );
    thankYouText.innerText = "Please give us you email address and we will send you details."

    var dotsThree = document.createElement( 'p' );
    dotsThree.innerText = "--------------------------------"

    var name = document.createElement( 'input' );
    name.placeholder = "Name...";

    var email = document.createElement( 'input' );
    email.placeholder = "Email...";

    var message = document.createElement( 'input' );
    message.placeholder = "Message";

    var button = document.createElement( 'button' );
    button.innerText = "Gift";

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
      this.displayFlightPick();
    }.bind( this );

    var brOne = document.createElement( 'br' );
    var brTwo = document.createElement( 'br' );
    var brThree = document.createElement( 'br' );
    var brFour = document.createElement( 'br' );

    giftList.appendChild( title );
    giftList.appendChild( dotsThree );
    giftList.appendChild( thankYouText );
    giftList.appendChild( brFour );
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

  displayFlightPick: function() {

    var giftSpaced = document.getElementById( 'gift-space' );
    giftSpaced.style.display = "none";

    var giftSpace = document.getElementById( 'gift-list' );
    giftSpace.style.display = "block";

    while( giftSpace.hasChildNodes() ) {
      giftSpace.removeChild( giftSpace.lastChild );
    }

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

    var cost = 200;

    var leaveUnit = document.createElement( 'h5' );
    leaveUnit.innerText = "£" + cost + "\nPer Flight";

    var leaveAvail = document.createElement( 'h5' );
    leaveAvail.innerText = "Available: " + this.leave + "/4";

    var leaveSelectValue = document.createElement( 'h5' );

    var leaveSelect = document.createElement( 'input' );
    leaveSelect.type = "range";
    leaveSelect.step = 1;
    leaveSelect.min = 0;
    leaveSelect.max = this.leave;
    leaveSelect.value = 0;
    leaveSelect.list = "steplist";

    leaveSelect.onchange = function() {
        leaveSelectValue.innerText = "Give " + leaveSelect.value + " Flights";
        this.buyLeave = leaveSelect.value;
        this.total = cost * leaveSelect.value;
    }.bind( this );

    leaveSelectValue.innerText = "Give " + leaveSelect.value + " Flights";

    var leaveText = document.createElement( 'h5' );
    leaveText.innerText = "Flight to Hawaii \n\n";

    giftSpace.appendChild( flightListOne );

    leaveList.appendChild( leave );
    leaveList.appendChild( leaveText );
    leaveList.appendChild( leaveUnit );
    leaveList.appendChild( leaveAvail );
    leaveList.appendChild( leaveSelect );
    leaveList.appendChild( leaveSelectValue );

    flightListOne.appendChild( leaveList );

// ######################################################

    var returnFlightList = document.createElement( 'li' );

    var returnFlight = document.createElement( 'img' );
    returnFlight.src = "../css/image/plane.png";
    returnFlight.id = "returnFlightImg";
    returnFlight.className = "giftImage";

    var cost = 200
    var returnFlightUnit = document.createElement( 'h5' );
    returnFlightUnit.innerText = "£" + cost + "\n Per Flight";

    var returnFlightAvail = document.createElement( 'h5' );
    returnFlightAvail.innerText = "Available: " + this.returnFlight + "/4";

    var returnFlightSelectValue = document.createElement( 'h5' );

    var returnFlightSelect = document.createElement( 'input' );
    returnFlightSelect.type = "range";
    returnFlightSelect.step = 1;
    returnFlightSelect.min = 0;
    returnFlightSelect.max = this.returnFlight;
    returnFlightSelect.value = 0;
    returnFlightSelect.list = "steplist";

    returnFlightSelect.onchange = function() {
        returnFlightSelectValue.innerText = "Give " + returnFlightSelect.value + " Flights";
        this.buyReturnFlight = returnFlightSelect.value;
        this.total = cost * returnFlightSelect.value;
    }.bind( this );

    returnFlightSelectValue.innerText = "Give " + returnFlightSelect.value + " Flights";

    var returnText = document.createElement( 'h5' );
    returnText.innerText = "Flight back home\n\n";

    giftSpace.appendChild( flightListOne );

    returnFlightList.appendChild( returnFlight );
    returnFlightList.appendChild( returnText );
    returnFlightList.appendChild( returnFlightUnit );
    returnFlightList.appendChild( returnFlightAvail );
    returnFlightList.appendChild( returnFlightSelect );
    returnFlightList.appendChild( returnFlightSelectValue );

    // ##################################################

    var bigIslandFlightList = document.createElement( 'li' );

    var bigIslandFlight = document.createElement( 'img' );
    bigIslandFlight.src = "../css/image/plane-up-left.png";
    bigIslandFlight.id = "bigFlightImg";
    bigIslandFlight.className = "giftImage";

    var cost = 100;

    var bigIslandFlightUnit = document.createElement( 'h5' );
    bigIslandFlightUnit.innerText = "£" + cost + "\n Per Flight";

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
        bigIslandFlightSelectValue.innerText = "Give " + bigIslandFlightSelect.value + " Flights";
        this.buyBigIsland = bigIslandFlightSelect.value;
        this.total = cost * bigIslandFlightSelect.value;
    }.bind( this );

    bigIslandFlightSelectValue.innerText = "Give " + bigIslandFlightSelect.value + " Flights";

    var bigIslandText = document.createElement( 'h5' );
    bigIslandText.innerText = "Big Island to Maui\n\n";

    bigIslandFlightList.appendChild( bigIslandFlight );
    bigIslandFlightList.appendChild( bigIslandText );
    bigIslandFlightList.appendChild( bigIslandFlightUnit );
    bigIslandFlightList.appendChild( bigIslandFlightAvail );
    bigIslandFlightList.appendChild( bigIslandFlightSelect );
    bigIslandFlightList.appendChild( bigIslandFlightSelectValue );

    flightListOne.appendChild( bigIslandFlightList );

    // ##################################################

    var flightListTwo = document.createElement( 'ul' );
    flightListTwo.id = "flightListTwo";

    var mauiFlightList = document.createElement( 'li' );

    var mauiFlight = document.createElement( 'img' );
    mauiFlight.src = "../css/image/plane-up-left.png";
    mauiFlight.id = "returnFlightImg";
    mauiFlight.className = "giftImage";

    var cost = 115;

    var mauiFlightUnit = document.createElement( 'h5' );
    mauiFlightUnit.innerText = "£" + cost + "\nPer Flight";

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
        mauiFlightSelectValue.innerText = "Give " + mauiFlightSelect.value + " Flights";
        this.buyMaui = mauiFlightSelect.value;
        this.total = cost * mauiFlightSelect.value;
    }.bind( this );

    mauiFlightSelectValue.innerText = "Give " + mauiFlightSelect.value + " Flights";

    var mauiText = document.createElement( 'h5' );
    mauiText.innerText = "Maui to Kauai\n\n";

    mauiFlightList.appendChild( mauiFlight );
    mauiFlightList.appendChild( mauiText );
    mauiFlightList.appendChild( mauiFlightUnit );
    mauiFlightList.appendChild( mauiFlightAvail );
    mauiFlightList.appendChild( mauiFlightSelect );
    mauiFlightList.appendChild( mauiFlightSelectValue );

    // ###################################################

    var kauaiFlightList = document.createElement( 'li' );

    var kauaiFlight = document.createElement( 'img' );
    kauaiFlight.src = "../css/image/plane.png";
    kauaiFlight.id = "returnFlightImg";
    kauaiFlight.className = "giftImage";

    var cost = 65;

    var kauaiFlightUnit = document.createElement( 'h5' );
    kauaiFlightUnit.innerText = "£" + cost + "\n Per Flight";

    var kauaiFlightAvail = document.createElement( 'h5' );
    kauaiFlightAvail.innerText = "Available: " + this.kauai + "/2";

    var kauaiFlightSelectValue = document.createElement( 'h5' );

    var kauaiFlightSelect = document.createElement( 'input' );
    kauaiFlightSelect.type = "range";
    kauaiFlightSelect.step = 1;
    kauaiFlightSelect.min = 0;
    kauaiFlightSelect.max = this.kauai;
    kauaiFlightSelect.value = 0;
    kauaiFlightSelect.list = "steplist";

    kauaiFlightSelect.onchange = function() {
        kauaiFlightSelectValue.innerText = "Give " + kauaiFlightSelect.value + " Flights";
        this.buyKauai = kauaiFlightSelect.value;
        this.total = cost * kauaiFlightSelect.value;
    }.bind( this );

    kauaiFlightSelectValue.innerText = "Give " + kauaiFlightSelect.value + " Flights";

    var kauaiText = document.createElement( 'h5' );
    kauaiText.innerText = "Kauai to Honolulu\n\n";

    kauaiFlightList.appendChild( kauaiFlight );
    kauaiFlightList.appendChild( kauaiText );
    kauaiFlightList.appendChild( kauaiFlightUnit );
    kauaiFlightList.appendChild( kauaiFlightAvail );
    kauaiFlightList.appendChild( kauaiFlightSelect );
    kauaiFlightList.appendChild( kauaiFlightSelectValue );

    flightListOne.appendChild( kauaiFlightList );
    flightListTwo.appendChild( mauiFlightList );
    flightListTwo.appendChild( returnFlightList );

    giftSpace.appendChild( flightListTwo );

    giftSpace.style.display = "block";

    // #############################################

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

module.exports = EnglishFlightsView;