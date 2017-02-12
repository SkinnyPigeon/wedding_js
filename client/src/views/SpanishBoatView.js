var EnglishBoatView = function() {

  // this.boatUrl = "http://localhost:1235/boats";
  this.boatUrl = "https://gift-list-database.herokuapp.com/boats";

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
    title.innerText = "Tout en bote";
    title.className = "circleTitle";

    var dotsFour = document.createElement( 'p' );
    dotsFour.innerText = "--------------------------------"

    var text = document.createElement( 'h5' );
    text.innerText = "Hemos leído que la costa Nā Pali es una pasada y nos gustaría pasar una mañana en un bote recorriéndola desde el mar. Os mandaremos fotos! \n\n Si te apetece contribuir a esta parte de la luna de miel pulsa aquí."

    var goButton = document.createElement( 'button' );
    goButton.innerText = "Tout en bote";
    goButton.onclick = function() {
      this.displayBoatPick();
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
    title.innerText = "Gracias!";

    var thankYouText = document.createElement( 'h5' );
    thankYouText.innerText = "Por favor déjanos tus datos y recibirás un email con los detalles."

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
          currency: "€"
        }
      }
      request.send( JSON.stringify( data ));
    }.bind( this )

    var backButton = document.createElement( 'button' );
    backButton.innerText = "Volver";
    backButton.onclick = function() {
      this.displayBoatPick();
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
    thankYou.innerText = "Muchas gracias!";
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
    boatTitle.innerText = "Tout en bote";
    boatTitle.className = "circleTitleRaisedHigher";

    var boatListOne = document.createElement( 'ul' );
    boatListOne.id = "boatListOne";

    var boatList = document.createElement( 'li' );

    var boat = document.createElement( 'img' );
    boat.src = "../css/image/boat.png";
    boat.id = "boatImg";
    boat.className = "giftImage";

    var cost = 175;

    var boatUnit = document.createElement( 'h5' );
    boatUnit.innerText = "€" + cost + "\nCada Entrada";

    var boatAvail = document.createElement( 'h5' );
    boatAvail.innerText = "Disponible: " + this.boat + "/2";

    var boatSelectValue = document.createElement( 'h5' );

    var boatSelect = document.createElement( 'input' );
    boatSelect.type = "range";
    boatSelect.step = 1;
    boatSelect.min = 0;
    boatSelect.max = this.boat;
    boatSelect.value = 0;
    boatSelect.list = "steplist";

    boatSelect.onchange = function() {
        boatSelectValue.innerText = "Regalar " + boatSelect.value + " Entradas";
        this.buyBoats = boatSelect.value;
        this.total = cost * boatSelect.value;
    }.bind( this );

    boatSelectValue.innerText = "Regalar " + boatSelect.value + " Entradas";

    var boatText = document.createElement( 'h5' );
    boatText.innerText = "Tour en bote por la costa Nā Pali";

    giftSpace.appendChild( boatListOne );

    boatList.appendChild( boat );
    boatList.appendChild( boatText );
    boatList.appendChild( boatUnit );
    boatList.appendChild( boatAvail );
    boatList.appendChild( boatSelect );
    boatList.appendChild( boatSelectValue );

    boatListOne.appendChild( boatList );
    giftSpace.appendChild( boatListOne );

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

module.exports = EnglishBoatView;