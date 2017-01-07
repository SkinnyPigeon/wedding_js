var EnglishHotelsView = function() {
  this.hotelUrl = "http://localhost:1235/hotels";

  this.hotelObject = [];
  this.kona = 0;
  this.volcano = 0;
  this.maui = 0;
  this.kauai = 0;
  this.honolulu = 0;

  this.buyKona = 0;
  this.buyVolcano = 0;
  this.buyMaui = 0;
  this.buyKauai = 0;
  this.buyHonolulu = 0;

  this.total = 0;

  this.getHotels();
}

EnglishHotelsView.prototype = {

  getHotels: function() {
    setInterval( function() {
      if( this.hotelObject.length === 0 ) {
        this.displayLoading()
      }
    }.bind( this ), 10 );

    var request = new XMLHttpRequest();
    request.open( 'GET', this.hotelUrl );
    request.setRequestHeader("Content-Type", "application/json")

    request.onload = () => {
      if( request.status === 200 ) {
        var hotelObject = JSON.parse( request.responseText );
        this.hotelObject = hotelObject;
        for( var i = 0; i < hotelObject.length; i++ ) {
            if( this.hotelObject[i].id === 1 ) {
                this.kona = hotelObject[i].kona;
                this.volcano = hotelObject[i].volcano;
                this.maui = hotelObject[i].maui;
                this.kauai = hotelObject[i].kauai;
                this.honolulu = hotelObject[i].honolulu;
            }
        }
        this.hideLoading();
        this.displayHotels();
      }
    }
    request.send( null );
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

  updateHotels: function() {
    var newKona = this.kona - this.buyKona;
    var newVolcano = this.volcano - this.buyVolcano;
    var newMaui = this.maui - this.buyMaui;
    var newKauai = this.kauai - this.buyKauai;
    var newHonolulu = this.honolulu - this.buyHonolulu;

    var url = this.hotelUrl + "/1";
    var request = new XMLHttpRequest();
    request.open( 'PUT', url );
    request.setRequestHeader( "Content-type", "application/json" );
    request.onload = () => {
        console.log( "Loaded" );
    }
    var data = {
      hotel : {
        kona: newKona,
        volcano: newVolcano,
        maui: newMaui,
        kauai: newKauai,
        honolulu: newHonolulu
      }
    }
    request.send( JSON.stringify( data ));
    console.log( data );
  },

  displayHotels: function() {
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
    title.innerText = "Hotels";
    title.className = "circleTitle";

    var dotsFour = document.createElement( 'p' );
    dotsFour.innerText = "--------------------------------"

    var text = document.createElement( 'h5' );
    text.innerText = "Another big one. We're there for a while so having a bed to sleep on would come in very handy. \n\n If you'd like to help with these the give this a click."

    var goButton = document.createElement( 'button' );
    goButton.innerText = "Click";
    goButton.onclick = function() {
      this.displayHotelPick();
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
      this.updateHotels();
      var request = new XMLHttpRequest();
      request.open( 'POST', this.hotelUrl );
      request.setRequestHeader("Content-Type", "application/json");
      request.onload = () => {
        this.displayThankYou();
      }
      var data = {
        hotel: {
          name: name.value,
          email: email.value,
          total: this.total,
          comment: message.value,
          kona: this.buyKona,
          volcano: this.buyVolcano,
          maui: this.buyMaui,
          kauai: this.buyKauai,
          honolulu: this.buyHonolulu,
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

  displayHotelPick: function() {

    var giftSpaced = document.getElementById( 'gift-space' );
    giftSpaced.style.display = "none";

    while( giftSpaced.hasChildNodes() ) {
      giftSpaced.removeChild( giftSpaced.lastChild );
    }

    var giftSpace = document.getElementById( 'gift-list' );
    giftSpace.style.display = "block";

    var hotelTitle = document.createElement( 'h1' );
    hotelTitle.innerText = "Hotels";
    hotelTitle.className = "circleTitleRaisedHigher";

  // ###################################


    var hotelListOne = document.createElement( 'ul' );
    hotelListOne.id = "hotelListOne";

    var konaList = document.createElement( 'li' );

    var kona = document.createElement( 'img' );
    kona.src = "../css/image/hotel.png";
    kona.id = "konaImg";
    kona.className = "giftImage";

    var cost = 150;

    var konaUnit = document.createElement( 'h5' );
    konaUnit.innerText = "Unit Price: £" + cost;

    var konaAvail = document.createElement( 'h5' );
    konaAvail.innerText = "Available: " + this.kona + "/8";

    var konaSelectValue = document.createElement( 'h5' );

    var konaSelect = document.createElement( 'input' );
    konaSelect.type = "range";
    konaSelect.step = 1;
    konaSelect.min = 0;
    konaSelect.max = this.kona;
    konaSelect.value = 0;
    konaSelect.list = "steplist";

    konaSelect.onchange = function() {
        konaSelectValue.innerText = "Give " + konaSelect.value + " Units";
        this.buykona = konaSelect.value;
        this.total = cost * konaSelect.value;
    }.bind( this );

    konaSelectValue.innerText = "Give " + konaSelect.value + " Units";

    var konaButton = document.createElement( 'button' );
    konaButton.innerText = "Give...";
    konaButton.onclick = function() {
        this.displayForm( "Hotels" );
        }.bind( this ); 

    var konaText = document.createElement( 'h5' );
    konaText.innerText = "Hotels in Kona";

    giftSpace.appendChild( hotelListOne );

    konaList.appendChild( kona );
    konaList.appendChild( konaUnit );
    konaList.appendChild( konaAvail );
    konaList.appendChild( konaSelect );
    konaList.appendChild( konaSelectValue );
    konaList.appendChild( konaButton );
    konaList.appendChild( konaText );

    hotelListOne.appendChild( konaList );
  }




}

module.exports = EnglishHotelsView;




// 150 * 2 - holiday inn
// 120 * 3 - volcano park
// 145 * 4 - Maui
// 170 * 5 - Kauai
// 70 * 2 - Honolulu