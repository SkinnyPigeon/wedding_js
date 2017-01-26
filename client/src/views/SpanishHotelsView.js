var EnglishHotelsView = function() {
  this.hotelUrl = "https://gift-list-database.herokuapp.com/hotels";
  // this.hotelUrl = "http://localhost:1235/hotels";

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

    var giftList = document.getElementById( 'gift-list' );

    while( giftList.hasChildNodes() ) {
      giftList.removeChild( giftList.lastChild );
    }

    var title = document.createElement( 'h1' );
    title.innerText = "Hoteles";
    title.className = "circleTitle";

    var dotsFour = document.createElement( 'p' );
    dotsFour.innerText = "--------------------------------"

    var text = document.createElement( 'h5' );
    text.innerText = "Vamos a estar en Hawaii por 16 dias, 5 dias en Big Island, 4 dias en Maui, 5 dias en Kauai y los últimos 2 dias en Honolulu. \n\n Si te apetece contribuir a esta parte de la luna de miel pulsa aquí."

    var goButton = document.createElement( 'button' );
    goButton.innerText = "Hoteles";
    goButton.onclick = function() {
      this.displayHotelPick();
    }.bind( this );

    var backButton = document.createElement( 'button' );
    backButton.innerText = "Volver";
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
    title.innerText = "Gracias";

    var dotsThree = document.createElement( 'p' );
    dotsThree.innerText = "--------------------------------"

    var name = document.createElement( 'input' );
    name.placeholder = "Nombre...";

    var email = document.createElement( 'input' );
    email.placeholder = "Email...";

    var message = document.createElement( 'input' );
    message.placeholder = "Mensaje";

    var button = document.createElement( 'button' );
    button.innerText = "Regalar";

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
          currency: "€"
        }
      }
      request.send( JSON.stringify( data ));
    }.bind( this )

    var backButton = document.createElement( 'button' );
    backButton.innerText = "Back";
    backButton.onclick = function() {
      this.displayHotelPick();
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
    thankYou.innerText = "Muchas gracias!";
    giftSpace.style.display = "block";

    giftSpace.appendChild( thankYou );
  },

  displayHotelPick: function() {

    var giftSpaced = document.getElementById( 'gift-space' );
    giftSpaced.style.display = "none";

    var giftSpace = document.getElementById( 'gift-list' );
    giftSpace.style.display = "block";

    while( giftSpace.hasChildNodes() ) {
      giftSpace.removeChild( giftSpace.lastChild );
    }

    var hotelTitle = document.createElement( 'h1' );
    hotelTitle.innerText = "Hoteles";
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
    konaUnit.innerText = "€" + cost + "\nCada Noche";

    var konaAvail = document.createElement( 'h5' );
    konaAvail.innerText = "Disponible: " + this.kona + "/2";

    var konaSelectValue = document.createElement( 'h5' );

    var konaSelect = document.createElement( 'input' );
    konaSelect.type = "range";
    konaSelect.step = 1;
    konaSelect.min = 0;
    konaSelect.max = this.kona;
    konaSelect.value = 0;
    konaSelect.list = "steplist";

    konaSelect.onchange = function() {
        konaSelectValue.innerText = "Regalar " + konaSelect.value + " Noches";
        this.buyKona = konaSelect.value;
        this.total = cost * konaSelect.value;
    }.bind( this );

    konaSelectValue.innerText = "Regalar " + konaSelect.value + " Noches";

    var konaText = document.createElement( 'h5' );
    konaText.innerText = "Hotel en Kona \n\n";

    giftSpace.appendChild( hotelListOne );

    konaList.appendChild( kona );
    konaList.appendChild( konaText );
    konaList.appendChild( konaUnit );
    konaList.appendChild( konaAvail );
    konaList.appendChild( konaSelect );
    konaList.appendChild( konaSelectValue );

    hotelListOne.appendChild( konaList );

    // ######################################################

    var volcanoList = document.createElement( 'li' );

    var volcano = document.createElement( 'img' );
    volcano.src = "../css/image/hotel2.png";
    volcano.id = "volcanoImg";
    volcano.className = "giftImage";

    var cost = 120
    var volcanoUnit = document.createElement( 'h5' );
    volcanoUnit.innerText = "€" + cost + "\nCada Noche";

    var volcanoAvail = document.createElement( 'h5' );
    volcanoAvail.innerText = "Disponible: " + this.volcano + "/3";

    var volcanoSelectValue = document.createElement( 'h5' );

    var volcanoSelect = document.createElement( 'input' );
    volcanoSelect.type = "range";
    volcanoSelect.step = 1;
    volcanoSelect.min = 0;
    volcanoSelect.max = this.volcano;
    volcanoSelect.value = 0;
    volcanoSelect.list = "steplist";

    volcanoSelect.onchange = function() {
        volcanoSelectValue.innerText = "Regalar " + volcanoSelect.value + " Noches";
        this.buyVolcano = volcanoSelect.value;
        this.total = cost * volcanoSelect.value;
    }.bind( this );

    volcanoSelectValue.innerText = "Regalar " + volcanoSelect.value + " Noches";

    var returnText = document.createElement( 'h5' );
    returnText.innerText = "Hotel en Volcano Park";

    giftSpace.appendChild( hotelListOne );

    volcanoList.appendChild( volcano );
    volcanoList.appendChild( returnText );
    volcanoList.appendChild( volcanoUnit );
    volcanoList.appendChild( volcanoAvail );
    volcanoList.appendChild( volcanoSelect );
    volcanoList.appendChild( volcanoSelectValue );

    hotelListOne.appendChild( volcanoList );

    // ##################################################

    var mauiFlightList = document.createElement( 'li' );

    var mauiFlight = document.createElement( 'img' );
    mauiFlight.src = "../css/image/hotel3.png";
    mauiFlight.id = "returnFlightImg";
    mauiFlight.className = "giftImage";

    var cost = 145;

    var mauiFlightUnit = document.createElement( 'h5' );
    mauiFlightUnit.innerText = "€" + cost + "\nCada Noche";

    var mauiFlightAvail = document.createElement( 'h5' );
    mauiFlightAvail.innerText = "Disponible: " + this.maui + "/4";

    var mauiFlightSelectValue = document.createElement( 'h5' );

    var mauiFlightSelect = document.createElement( 'input' );
    mauiFlightSelect.type = "range";
    mauiFlightSelect.step = 1;
    mauiFlightSelect.min = 0;
    mauiFlightSelect.max = this.maui;
    mauiFlightSelect.value = 0;
    mauiFlightSelect.list = "steplist";

    mauiFlightSelect.onchange = function() {
        mauiFlightSelectValue.innerText = "Regalar " + mauiFlightSelect.value + " Noches";
        this.buyMaui = mauiFlightSelect.value;
        this.total = cost * mauiFlightSelect.value;
    }.bind( this );

    mauiFlightSelectValue.innerText = "Regalar " + mauiFlightSelect.value + " Noches";

    var mauiText = document.createElement( 'h5' );
    mauiText.innerText = "Hotel en Maui\n\n";

    mauiFlightList.appendChild( mauiFlight );
    mauiFlightList.appendChild( mauiText );
    mauiFlightList.appendChild( mauiFlightUnit );
    mauiFlightList.appendChild( mauiFlightAvail );
    mauiFlightList.appendChild( mauiFlightSelect );
    mauiFlightList.appendChild( mauiFlightSelectValue );

    hotelListOne.appendChild( mauiFlightList );

    // ##################################################

    var hotelListTwo = document.createElement( 'ul' );
    giftSpace.appendChild( hotelListTwo );

    hotelListTwo.id = "hotelListTwo";

    var kauaiFlightList = document.createElement( 'li' );

    var kauaiFlight = document.createElement( 'img' );
    kauaiFlight.src = "../css/image/hotel4.png";
    kauaiFlight.id = "returnFlightImg";
    kauaiFlight.className = "giftImage";

    var cost = 150;

    var kauaiFlightUnit = document.createElement( 'h5' );
    kauaiFlightUnit.innerText = "€" + cost + "\nCada Noche";

    var kauaiFlightAvail = document.createElement( 'h5' );
    kauaiFlightAvail.innerText = "Disponible: " + this.kauai + "/5";

    var kauaiFlightSelectValue = document.createElement( 'h5' );

    var kauaiFlightSelect = document.createElement( 'input' );
    kauaiFlightSelect.type = "range";
    kauaiFlightSelect.step = 1;
    kauaiFlightSelect.min = 0;
    kauaiFlightSelect.max = this.kauai;
    kauaiFlightSelect.value = 0;
    kauaiFlightSelect.list = "steplist";

    kauaiFlightSelect.onchange = function() {
        kauaiFlightSelectValue.innerText = "Regalar " + kauaiFlightSelect.value + " Noches";
        this.buyKauai = kauaiFlightSelect.value;
        this.total = cost * kauaiFlightSelect.value;
    }.bind( this );

    kauaiFlightSelectValue.innerText = "Regalar " + kauaiFlightSelect.value + " Noches";

    var kauaiText = document.createElement( 'h5' );
    kauaiText.innerText = "Hotel en Kauai\n\n";

    kauaiFlightList.appendChild( kauaiFlight );
    kauaiFlightList.appendChild( kauaiText );
    kauaiFlightList.appendChild( kauaiFlightUnit );
    kauaiFlightList.appendChild( kauaiFlightAvail );
    kauaiFlightList.appendChild( kauaiFlightSelect );
    kauaiFlightList.appendChild( kauaiFlightSelectValue );

    hotelListTwo.appendChild( kauaiFlightList );


      // ###################################################

    var honoluluFlightList = document.createElement( 'li' );

    var honoluluFlight = document.createElement( 'img' );
    honoluluFlight.src = "../css/image/hotel5.png";
    honoluluFlight.id = "returnFlightImg";
    honoluluFlight.className = "giftImage";

    var cost = 70;

    var honoluluFlightUnit = document.createElement( 'h5' );
    honoluluFlightUnit.innerText = "€" + cost + "\nCada Noche";

    var honoluluFlightAvail = document.createElement( 'h5' );
    honoluluFlightAvail.innerText = "Disponible: " + this.honolulu + "/2";

    var honoluluFlightSelectValue = document.createElement( 'h5' );

    var honoluluFlightSelect = document.createElement( 'input' );
    honoluluFlightSelect.type = "range";
    honoluluFlightSelect.step = 1;
    honoluluFlightSelect.min = 0;
    honoluluFlightSelect.max = this.honolulu;
    honoluluFlightSelect.value = 0;
    honoluluFlightSelect.list = "steplist";

    honoluluFlightSelect.onchange = function() {
        honoluluFlightSelectValue.innerText = "Regalar " + honoluluFlightSelect.value + " Noches";
        this.buyHonolulu = honoluluFlightSelect.value;
        this.total = cost * honoluluFlightSelect.value;
    }.bind( this );

    honoluluFlightSelectValue.innerText = "Regalar " + honoluluFlightSelect.value + " Noches";

    var honoluluText = document.createElement( 'h5' );
    honoluluText.innerText = "Hotel en Honolulu";

    honoluluFlightList.appendChild( honoluluFlight );
    honoluluFlightList.appendChild( honoluluText );
    honoluluFlightList.appendChild( honoluluFlightUnit );
    honoluluFlightList.appendChild( honoluluFlightAvail );
    honoluluFlightList.appendChild( honoluluFlightSelect );
    honoluluFlightList.appendChild( honoluluFlightSelectValue );

    hotelListTwo.appendChild( honoluluFlightList );
    giftSpace.appendChild( hotelListTwo );

    giftSpace.style.display = "block";

    var giveButton = document.createElement( 'button' );
    var cancelButton = document.createElement( 'button' );

    giveButton.innerText = "Regalar...";
    giveButton.onclick = function() {
      this.displayForm();
    }.bind( this );

    cancelButton.innerText = "Volver...";
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

module.exports = EnglishHotelsView;