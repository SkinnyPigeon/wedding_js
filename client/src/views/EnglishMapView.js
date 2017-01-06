var EnglishMapView = function() {
  this.display();
}

EnglishMapView.prototype = {

  display: function() {
    var hotelSpace = document.getElementById( 'hotel-space' );
    hotelSpace.innerText = "";

    var title = document.createElement( 'h1' );
    title.className = "circleTitleRaised";
    title.innerText = "Hotels";

    var dotsOne = document.createElement( 'p' );
    dotsOne.innerText = "--------------------------------"

    var text = document.createElement( 'h5' );
    // text.innerText = "For those of you who are travelling in from out of town or just looking for somewhere a bit closer to the venue we have picked a couple places that you might be interested in. \n\n Orihuela is a large and lovely town that's home to Laura's family and has got a great selection of places to eat, drink and enjoy. It's also got the Hotel Palacio de Tudemir that's happy to give us a discount if we block book 10 rooms so let us know if you fancy booking there and we'll get it all set up. \n\n For those looking for an even easier life on the day of the wedding there are a couple that are very close to the venue. The venue is marked as green on the map below";

    text.innerText = "For those of you who are travelling in from out of town or just looking for somewhere a bit closer to the venue we have picked a couple places that you might be interested in. \n\n To see where these are just give the names below a click.";

    var palacioDeTudemir = document.createElement( 'a' );
    palacioDeTudemir.innerText = "Palacio de Tudemir";
    palacioDeTudemir.href = "https://www.google.co.uk/maps/dir/Hotel+Boutique+Palacio+de+Tudemir,+Calle+Alfonso+XIII,+1,+03300+Orihuela,+Alicante,+Spain/Salones+Canario,+Calle+Constituci%C3%B3n,+Rojales,+Spain/@38.0596435,-0.9071404,12z/data=!3m1!4b1!4m13!4m12!1m5!1m1!1s0xd63991de05ee827:0x7aefcd1fad58759!2m2!1d-0.9447066!2d38.0859664!1m5!1m1!1s0xd63af14268fcecf:0xe8048d44d8dd442f!2m2!1d-0.7294402!2d38.085104";
    palacioDeTudemir.target = "_blank";

    var hostalReyTeodomiro = document.createElement( 'a' );
    hostalReyTeodomiro.innerText = "Hostal Rey Teodomiro";
    hostalReyTeodomiro.href = "https://www.google.co.uk/maps/dir/Hostal+Rey+Teodomiro,+Avenida+Teodomiro,+Orihuela,+Spain/Salones+Canario,+Calle+Constituci%C3%B3n,+Rojales,+Spain/@38.1662726,-0.9575739,11z/data=!3m1!4b1!4m13!4m12!1m5!1m1!1s0xd63991fbca946ff:0xef0498debb46c0e4!2m2!1d-0.9456179!2d38.0818869!1m5!1m1!1s0xd63af14268fcecf:0xe8048d44d8dd442f!2m2!1d-0.7294402!2d38.085104"
    hostalReyTeodomiro.target = "_blank";

    var losPalacios = document.createElement( 'a' );
    losPalacios.innerText = "Los Palacios";
    losPalacios.href = "https://www.google.co.uk/maps/dir/Los+Palacios,+Avenida+Vega+Baja,+Formentera+del+Segura,+Spain/Salones+Canario,+Calle+Constituci%C3%B3n,+Rojales,+Spain/@38.0864439,-0.7298043,17z/data=!3m1!4b1!4m13!4m12!1m5!1m1!1s0xd63af138e9be99f:0x28ebfd508ffa70e4!2m2!1d-0.7269625!2d38.0880189!1m5!1m1!1s0xd63af14268fcecf:0xe8048d44d8dd442f!2m2!1d-0.7294402!2d38.085104";
    losPalacios.target = "_blank";

    var laLaguna = document.createElement( 'a' );
    laLaguna.innerText = "La Laguna";
    laLaguna.href = "https://www.google.co.uk/maps/dir/Hotel+La+Laguna+Spa+%26+Golf,+Avenida+Antonio+Quesada,+Quesada,+Spain/Salones+Canario,+Calle+Constituci%C3%B3n,+Rojales,+Spain/@38.0629029,-0.7429271,14z/data=!3m1!4b1!4m13!4m12!1m5!1m1!1s0xd63a92611432135:0x69d8fece45c999fa!2m2!1d-0.7111099!2d38.0494862!1m5!1m1!1s0xd63af14268fcecf:0xe8048d44d8dd442f!2m2!1d-0.7294402!2d38.085104";
    laLaguna.target = "_blank";

    var brOne = document.createElement( 'br' );
    var brTwo = document.createElement( 'br' );
    var brThree = document.createElement( 'br' );

    var orihuela = document.createElement( 'h1' );
    orihuela.innerText = "Hotels in Orihuela";

    var rojales = document.createElement( 'h1' );
    rojales.innerText = "Hotels in Rojales";

    hotelSpace.appendChild( title );
    hotelSpace.appendChild( dotsOne );
    hotelSpace.appendChild( text );

    hotelSpace.appendChild( orihuela );
    hotelSpace.appendChild( palacioDeTudemir );
    hotelSpace.appendChild( brOne );
    hotelSpace.appendChild( hostalReyTeodomiro );

    hotelSpace.appendChild( rojales );
    hotelSpace.appendChild( losPalacios );
    hotelSpace.appendChild( brTwo );
    hotelSpace.appendChild( laLaguna );
  },
}

module.exports = EnglishMapView;