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
  this.buyHololulu = 0;

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
    request.open( 'GET', this.flightUrl );
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

    var url = this.flightUrl + "/1";
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

}

module.exports = EnglishHotelsView;




// 150 * 2 - holiday inn
// 120 * 3 - volcano park
// 145 * 4 - Maui
// 170 * 5 - Kauai
// 70 * 2 - Honolulu