var EnglishLavaView = function() {

  this.lavaUrl = "http://localhost:1235/lavas";

  this.lavaObject = [];
  this.lava = 0;

  this.buyLavas = 0;

  this.total = 0;

  this.getLavas();
}

EnglishLavaView.prototype = {

  getLavas: function() {
    setInterval( function() {
      if( this.lavaObject.length === 0 ) {
        this.displayLoading()
      }
    }.bind( this ), 10 );

    var request = new XMLHttpRequest();
    request.open( 'GET', this.lavaUrl );
    request.setRequestHeader("Content-Type", "application/json")

    request.onload = () => {
      if( request.status === 200 ) {
        var lavaObject = JSON.parse( request.responseText );
        this.lavaObject = lavaObject;
        for( var i = 0; i < lavaObject.length; i++ ) {
            if( this.lavaObject[i].id === 1 ) {
                this.lava = lavaObject[i].lava;
            }
        }
        this.hideLoading();
        this.displayLavas();
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

  updateLavas: function() {
    // var newLava = 1;
    var newLava = this.lava -= this.buyLavas;

    var url = this.lavaUrl + "/1";
    var request = new XMLHttpRequest();
    request.open( 'PUT', url );
    request.setRequestHeader( "Content-type", "application/json" );
    request.onload = () => {
        // console.log( "Loaded" );
        // console.log( newLava );
    }
    var data = {
      lava : {
        lava: newLava
      }
    }
    request.send( JSON.stringify( data ));
    console.log( data );
  },

  displayLavas: function() {
    var giftSpace = document.getElementById( 'gift-space' );
    giftSpace.style.display = "none";

    var giftList = document.getElementById( 'gift-list' );

    while( giftList.hasChildNodes() ) {
      giftList.removeChild( giftList.lastChild );
    }

    var title = document.createElement( 'h1' );
    title.innerText = "Tour de lava";
    title.className = "circleTitle";

    var dotsFour = document.createElement( 'p' );
    dotsFour.innerText = "--------------------------------"

    var text = document.createElement( 'h5' );
    text.innerText = "Una de las partes del viaje que nos hace más ilusión es ir al Parque de los Volcanes y poder ver lava caer al océano. ¿Os lo imagináis? \n\n Si te apetece contribuir a esta parte de la luna de miel pulsa aquí."

    var goButton = document.createElement( 'button' );
    goButton.innerText = "Tour de lava";
    goButton.onclick = function() {
      this.displayLavaPick();
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
      this.updateLavas();
      var request = new XMLHttpRequest();
      request.open( 'POST', this.lavaUrl );
      request.setRequestHeader("Content-Type", "application/json");
      request.onload = () => {
        this.displayThankYou();
      }
      var data = {
        lava: {
          name: name.value,
          email: email.value,
          total: this.total,
          comment: message.value,
          lava: this.buyLavas,
          currency: "€"
        }
      }
      request.send( JSON.stringify( data ));
    }.bind( this )

    var backButton = document.createElement( 'button' );
    backButton.innerText = "Volver";
    backButton.onclick = function() {
      this.displayLavaPick();
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

  displayLavaPick: function() {

    var giftSpaced = document.getElementById( 'gift-space' );
    giftSpaced.style.display = "none";

    var giftSpace = document.getElementById( 'gift-list' );
    giftSpace.style.display = "block";

    while( giftSpace.hasChildNodes() ) {
      giftSpace.removeChild( giftSpace.lastChild );
    }

    var lavaTitle = document.createElement( 'h1' );
    lavaTitle.innerText = "Tour de lava";
    lavaTitle.className = "circleTitleRaisedHigher";

    var lavaListOne = document.createElement( 'ul' );
    lavaListOne.id = "lavaListOne";

    var lavaList = document.createElement( 'li' );

    var lava = document.createElement( 'img' );
    lava.src = "../css/image/volcano.png";
    lava.id = "lavaImg";
    lava.className = "giftImage";

    var cost = 250;

    var lavaUnit = document.createElement( 'h5' );
    lavaUnit.innerText = "€" + cost + "\nPer Unit";

    var lavaAvail = document.createElement( 'h5' );
    lavaAvail.innerText = "Disponible: " + this.lava + "/1";

    var lavaSelectValue = document.createElement( 'h5' );

    var lavaSelect = document.createElement( 'input' );
    lavaSelect.type = "range";
    lavaSelect.step = 1;
    lavaSelect.min = 0;
    lavaSelect.max = this.lava;
    lavaSelect.value = 0;
    lavaSelect.list = "steplist";

    lavaSelect.onchange = function() {
        lavaSelectValue.innerText = "Regalar " + lavaSelect.value + " Unidades";
        this.buyLavas = lavaSelect.value;
        this.total = cost * lavaSelect.value;
    }.bind( this );

    lavaSelectValue.innerText = "Regalar " + lavaSelect.value + " Unidades";

    var lavaText = document.createElement( 'h5' );
    lavaText.innerText = "Tour para ver lava en el parque de los volcanes.";

    giftSpace.appendChild( lavaListOne );

    lavaList.appendChild( lava );
    lavaList.appendChild( lavaText );
    lavaList.appendChild( lavaUnit );
    lavaList.appendChild( lavaAvail );
    lavaList.appendChild( lavaSelect );
    lavaList.appendChild( lavaSelectValue );

    lavaListOne.appendChild( lavaList );
    giftSpace.appendChild( lavaListOne );

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

module.exports = EnglishLavaView;