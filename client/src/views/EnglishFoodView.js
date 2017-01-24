var EnglishFoodView = function() {

  this.foodUrl = "http://localhost:1235/foods";

  this.foodObject = [];
  this.food = 0;

  this.buyFoods = 0;

  this.total = 0;

  this.getFoods();
}

EnglishFoodView.prototype = {

  getFoods: function() {
    setInterval( function() {
      if( this.foodObject.length === 0 ) {
        this.displayLoading()
      }
    }.bind( this ), 10 );

    var request = new XMLHttpRequest();
    request.open( 'GET', this.foodUrl );
    request.setRequestHeader("Content-Type", "application/json")

    request.onload = () => {
      if( request.status === 200 ) {
        var foodObject = JSON.parse( request.responseText );
        this.foodObject = foodObject;
        for( var i = 0; i < foodObject.length; i++ ) {
            if( this.foodObject[i].id === 1 ) {
                this.food = foodObject[i].food;
            }
        }
        this.hideLoading();
        this.displayFoods();
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

  updateFoods: function() {
    var newFood = this.food + this.buyFoods;

    var url = this.foodUrl + "/1";
    var request = new XMLHttpRequest();
    request.open( 'PUT', url );
    request.setRequestHeader( "Content-type", "application/json" );
    request.onload = () => {
        console.log( "Loaded" );
    }
    var data = {
      food : {
        food: newFood
      }
    }
    request.send( JSON.stringify( data ));
    console.log( data );
  },

  displayFoods: function() {
    var giftSpace = document.getElementById( 'gift-space' );
    giftSpace.style.display = "none";

    var giftList = document.getElementById( 'gift-list' );

    while( giftList.hasChildNodes() ) {
      giftList.removeChild( giftList.lastChild );
    }

    var title = document.createElement( 'h1' );
    title.innerText = "Foods";
    title.className = "circleTitle";

    var dotsFour = document.createElement( 'p' );
    dotsFour.innerText = "--------------------------------"

    var text = document.createElement( 'h5' );
    text.innerText = "What would be the point in travelling half way around the world without sampling as much delicious food as possible? \n\n If you'd like to help with this then give this a click."

    var goButton = document.createElement( 'button' );
    goButton.innerText = "Food";
    goButton.onclick = function() {
      this.displayFoodPick();
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
    message.placeholder = "Message...";

    var button = document.createElement( 'button' );
    button.innerText = "Click";

    button.onclick = function() {
      this.updateFoods();
      var request = new XMLHttpRequest();
      request.open( 'POST', this.foodUrl );
      request.setRequestHeader("Content-Type", "application/json");
      request.onload = () => {
        this.displayThankYou();
      }
      var data = {
        food: {
          name: name.value,
          email: email.value,
          total: this.total,
          comment: message.value,
          food: this.buyFoods,
          currency: "£"
        }
      }
      request.send( JSON.stringify( data ));
    }.bind( this )

    var backButton = document.createElement( 'button' );
    backButton.innerText = "Back";
    backButton.onclick = function() {
      this.displayFoodPick();
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

  displayFoodPick: function() {

    var giftSpaced = document.getElementById( 'gift-space' );
    giftSpaced.style.display = "none";

    var giftSpace = document.getElementById( 'gift-list' );
    giftSpace.style.display = "block";

    while( giftSpace.hasChildNodes() ) {
      giftSpace.removeChild( giftSpace.lastChild );
    }

    var foodTitle = document.createElement( 'h1' );
    foodTitle.innerText = "Foods";
    foodTitle.className = "circleTitleRaisedHigher";

    var foodListOne = document.createElement( 'ul' );
    foodListOne.id = "foodListOne";

    // ####################################################

    var foodList = document.createElement( 'li' );

    var food = document.createElement( 'img' );
    food.src = "../css/image/pineapple.png";
    food.id = "foodImg";
    food.className = "giftImage";

    var cost = 40;

    var foodUnit = document.createElement( 'h5' );
    foodUnit.innerText = "£" + cost + "\nPer Unit";

    var foodAvail = document.createElement( 'h5' );
    foodAvail.innerText = "Available: " + String.fromCharCode( 8734 ) + "/" + String.fromCharCode( 8734 );

    var foodSelectValue = document.createElement( 'h5' );

    var foodSelect = document.createElement( 'input' );
    foodSelect.type = "range";
    foodSelect.step = 1;
    foodSelect.min = 0;
    foodSelect.max = 10;
    foodSelect.value = 0;
    foodSelect.list = "steplist";

    foodSelect.onchange = function() {
        foodSelectValue.innerText = "Give " + foodSelect.value + " Units";
        this.buyFoods = foodSelect.value;
        this.total = cost * foodSelect.value;
    }.bind( this );

    foodSelectValue.innerText = "Give " + foodSelect.value + " Units";

    var foodText = document.createElement( 'h5' );
    foodText.innerText = "Food on the Beach";

    giftSpace.appendChild( foodListOne );

    foodList.appendChild( food );
    foodList.appendChild( foodText );
    foodList.appendChild( foodUnit );
    foodList.appendChild( foodAvail );
    foodList.appendChild( foodSelect );
    foodList.appendChild( foodSelectValue );

    // #######################################################

    var romanticList = document.createElement( 'li' );

    var romantic = document.createElement( 'img' );
    romantic.src = "../css/image/romantic.png";
    romantic.id = "foodImg";
    romantic.className = "giftImage";

    var cost = 60;

    var romanticUnit = document.createElement( 'h5' );
    romanticUnit.innerText = "£" + cost + "\nPer Unit";

    var romanticAvail = document.createElement( 'h5' );
    romanticAvail.innerText = "Available: " + String.fromCharCode( 8734 ) + "/" + String.fromCharCode( 8734 );

    var romanticSelectValue = document.createElement( 'h5' );

    var romanticSelect = document.createElement( 'input' );
    romanticSelect.type = "range";
    romanticSelect.step = 1;
    romanticSelect.min = 0;
    romanticSelect.max = 10;
    romanticSelect.value = 0;
    romanticSelect.list = "steplist";

    romanticSelect.onchange = function() {
        romanticSelectValue.innerText = "Give " + romanticSelect.value + " Units";
        this.buyFoods = romanticSelect.value;
        this.total = cost * romanticSelect.value;
    }.bind( this );

    romanticSelectValue.innerText = "Give " + romanticSelect.value + " Units";

    var romanticText = document.createElement( 'h5' );
    romanticText.innerText = "Romantic Dinner";

    giftSpace.appendChild( foodListOne );

    romanticList.appendChild( romantic );
    romanticList.appendChild( romanticText );
    romanticList.appendChild( romanticUnit );
    romanticList.appendChild( romanticAvail );
    romanticList.appendChild( romanticSelect );
    romanticList.appendChild( romanticSelectValue );

    foodListOne.appendChild( foodList );
    foodListOne.appendChild( romanticList );
    giftSpace.appendChild( foodListOne );

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

module.exports = EnglishFoodView;