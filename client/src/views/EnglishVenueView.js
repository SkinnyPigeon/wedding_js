var EnglishVenueView = function() {
  this.display();
}

EnglishVenueView.prototype = {

  display: function() {
    var venueSpace = document.getElementById( 'venue-space' );
    venueSpace.innerText = "";

    var title = document.createElement( 'h1' );
    title.className = "circleTitleRaised";
    title.innerText = "Salones Canario";

    var dotsOne = document.createElement( 'p' );
    dotsOne.innerText = "--------------------------------"

    var dotsTwo = document.createElement( 'p' );
    dotsTwo.innerText = "--------------------------------"

    var text = document.createElement( 'h5' );
    text.id = "venueText";
    text.innerText = "We hope to see you all there for the ceremony at 12.30 which will be held in the garden. Afterwards there will be drinks and nibbles. Following that will be a sit down meal inside the venue before the day finishes with a DJ and open bar."

    var address = document.createElement( 'a' );
    address.innerText = "Salones Canarios, Calle Constitución, 03170 Rojales, Alicante, Spain \n (click me)";
    address.href = "https://www.google.co.uk/maps/place/Salones+Canario/@38.085104,-0.7316289,17z/data=!3m1!4b1!4m5!3m4!1s0xd63af14268fcecf:0xe8048d44d8dd442f!8m2!3d38.085104!4d-0.7294402";
    address.target = "_blank";
    address.id = "address";

    var slackTitle = document.createElement( 'h1' );
    slackTitle.innerText = "How To Share Your Photos"

    var slackText = document.createElement( 'h5' );
    slackText.innerText = "We would love for you to share your pictures of the ceremony and party with all of us. \n If you'd like to join in then send us your email address and we'll invite you to join a group in an app called Slack. It's free and private. All you have to do is post \n the photos you take to the channel in Slack and we'll all get to see \n them on the big screen in the venue."

    var contact = document.createElement( 'ul' );

    var email = document.createElement( 'li' );
    email.innerHTML = "<img src='./css/image/email.png' >";

    var emailAddress = document.createElement( 'a' );
    emailAddress.href = "mailto:euanandlaura@gmail.com";
    emailAddress.innerText = "euanandlaura@gmail.com";

    contact.appendChild( email );
    contact.appendChild( emailAddress );

    venueSpace.appendChild( title );
    venueSpace.appendChild( dotsOne );
    venueSpace.appendChild( text );
    venueSpace.appendChild( address );
    venueSpace.appendChild( slackTitle );
    venueSpace.appendChild( dotsTwo );
    venueSpace.appendChild( slackText );
    venueSpace.appendChild( contact );
  },
}

module.exports = EnglishVenueView;