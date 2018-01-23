

var markerName = ""
console.log("global-markerName", markerName)
var map;
var markers = []
var hotMarker = []
var restMarker = []
var barMarker = []
var musMarker = []
var input = ""
var popularity = ""
var veryBestPic = ""
var placeId = ""
var placeMarker = []

function googleMaps() {

  //creates map in HTML centered on Washington, D.C.
  map = new google.maps.Map(document.getElementById('map'), {
    center: {
      lat: 38.9072,
      lng: -77.0369
    },
    zoom: 13,
    gestureHandling: 'greedy',
    styles: [{
        "elementType": "geometry",
        "stylers": [{
          "color": "#f5f5f5"
        }]
      },
      {
        "elementType": "labels.icon",
        "stylers": [{
          "visibility": "off"
        }]
      },
      {
        "elementType": "labels.text.fill",
        "stylers": [{
          "color": "#616161"
        }]
      },
      {
        "elementType": "labels.text.stroke",
        "stylers": [{
          "color": "#f5f5f5"
        }]
      },
      {
        "featureType": "administrative.land_parcel",
        "elementType": "labels",

        "stylers": [{
          "visibility": "off"
        }]

      },
      {
        "featureType": "administrative.land_parcel",
        "elementType": "labels.text.fill",

        "stylers": [{
          "color": "#bdbdbd"
        }]

      },
      {
        "featureType": "administrative.locality",
        "elementType": "labels.text.fill",

        "stylers": [{
          "color": "#5500aa"
        }]
      },
      {
        "featureType": "administrative.neighborhood",
        "elementType": "labels.text.fill",

        "stylers": [{
          "color": "#a74fff"
        }]
      },
      {
        "featureType": "landscape.man_made",
        "elementType": "geometry.stroke",

        "stylers": [{
          "color": "#5500aa"
        }]
      },
      {
        "featureType": "poi",
        "stylers": [{
          "visibility": "on"
        }]
      },
      {
        "featureType": "poi",
        "elementType": "geometry",

        "stylers": [{
          "color": "#eeeeee"
        }]
      },
      {
        "featureType": "poi",
        "elementType": "labels.text",

        "stylers": [{
          "visibility": "off"
        }]
      },
      {
        "featureType": "poi",
        "elementType": "labels.text.fill",

        "stylers": [{
          "color": "#757575"
        }]
      },
      {
        "featureType": "poi.park",
        "elementType": "geometry",

        "stylers": [{
          "color": "#e5e5e5"
        }]
      },
      {
        "featureType": "poi.park",
        "elementType": "geometry.fill",

        "stylers": [{
          "color": "#a6d89e"
        }]
      },
      {
        "featureType": "poi.park",
        "elementType": "labels.text.fill",

        "stylers": [{
          "color": "#9e9e9e"
        }]
      },
      {
        "featureType": "road",
        "stylers": [{
          "visibility": "on"
        }]
      },
      {
        "featureType": "road",
        "elementType": "geometry",
        "stylers": [{
          "color": "#ffffff"
        }]
      },
      {
        "featureType": "road.arterial",
        "elementType": "labels.text.fill",
        "stylers": [{
          "color": "#757575"
        }]
      },
      {
        "featureType": "road.highway",
        "elementType": "geometry",
        "stylers": [{
          "color": "#dadada"
        }]
      },
      {
        "featureType": "road.highway",
        "elementType": "labels.text.fill",
        "stylers": [{
          "color": "#616161"
        }]
      },
      {
        "featureType": "road.local",
        "elementType": "labels",
        "stylers": [{
          "visibility": "off"
        }]
      },
      {
        "featureType": "road.local",
        "elementType": "labels.text.fill",
        "stylers": [{
          "color": "#9e9e9e"
        }]
      },
      {
        "featureType": "transit.line",
        "elementType": "geometry",

        "stylers": [{
          "color": "#e5e5e5"
        }]
      },
      {
        "featureType": "transit.station",
        "elementType": "geometry",

        "stylers": [{
          "color": "#eeeeee"
        }]

      },
      {
        "featureType": "water",
        "elementType": "geometry",

        "stylers": [{
          "color": "#c9c9c9"
        }]
      },
      {
        "featureType": "water",
        "elementType": "geometry.fill",

        "stylers": [{
          "color": "#b0d8ff"
        }]
      },
      {
        "featureType": "water",
        "elementType": "labels.text.fill",

        "stylers": [{
          "color": "#9e9e9e"
        }]
      }
    ]
  });
  // Create the search box and link it to the UI element.
  input = document.getElementById('pac-input');
  var searchBox = new google.maps.places.SearchBox(input);
  map.controls[google.maps.ControlPosition.TOP_LEFT].push(input);
  // Bias the SearchBox results towards current map's viewport.
  map.addListener('bounds_changed', function() {
    searchBox.setBounds(map.getBounds());
    //when bounds change, reset marker names and array
    markerName = ""
    markersNameArray = []
  });;
  //Add Recommended Restaurants to Map
  $("#Restaurant").on("click", function() {
    map.setZoom(13)

    if (this.checked === true) {
      var restaurants = [{
          position: new google.maps.LatLng(38.909773, -77.045214),
          type: 'restaurant',
          title: 'Pizzeria Paradiso',
          placeId: 'ChIJ6Qlpfsi3t4kR-nqXfMcBTlQ'
        }, {
          position: new google.maps.LatLng(38.900952, -77.017797),
          type: 'restaurant',
          title: 'Texas de Brazil',
          placeId: 'ChIJCZVfQ4y3t4kRbW8-rOCd6O8'
        }, {
          position: new google.maps.LatLng(38.901601, -77.044244),
          type: 'restaurant',
          title: 'Kaz Sushi Bistro',
          placeId: 'ChIJ36o9Bbq3t4kR66FGn7eZBwI'
        }, {
          position: new google.maps.LatLng(38.902141, -77.02519),
          type: 'restaurant',
          title: 'Acadiana',
          placeId: 'ChIJt4IBrJO3t4kRXcbDiwauWYE'
        }, {
          position: new google.maps.LatLng(38.899542, -77.02038),
          type: 'restaurant',
          title: 'Wok & Roll',
          placeId: 'ChIJXyx03o23t4kR4yjB3SO7mC8'
        }, {
          position: new google.maps.LatLng(38.902257, -77.00222),
          type: 'restaurant',
          title: 'Indigo',
          placeId: 'ChIJ2TkEeSK4t4kRKfH6lYpF8m4'
        }, {
          position: new google.maps.LatLng(38.895274, -76.983337),
          type: 'restaurant',
          title: 'Far East Tacos Grille',
          placeId: 'ChIJBd1Ty0a4t4kRPdKhDLq52aw'
        }, {
          position: new google.maps.LatLng(38.899836, -76.98705),
          type: 'restaurant',
          title: 'H Street Country Club',
          placeId: 'ChIJE5FcCUC4t4kRKkuhQvsRpmc'
        }, {
          position: new google.maps.LatLng(38.929405, -76.991024),
          type: 'restaurant',
          title: "Brookland's Finest Bar and Kitchen",
          placeId: 'ChIJYw5VrfPHt4kRCvZTX1soQYk'
        }, {
          position: new google.maps.LatLng(38.914631, -76.985541),
          type: 'restaurant',
          title: 'Ivy City Smokehouse, 1356 Okie St NE, Washington, DC 20002)',
          placeId: 'ChIJCRSgFHO4t4kR-LVTtPHfsAI'

      }];
      console.log(restaurants)

      restaurants.forEach(function(place, x) {
        var icon = {
            url: "https://maps.gstatic.com/mapfiles/place_api/icons/restaurant-71.png",
            size: new google.maps.Size(50, 50),
            origin: new google.maps.Point(0, 0),
            anchor: new google.maps.Point(17, 34),
            scaledSize: new google.maps.Size(25, 25)
        }
        var marker = new google.maps.Marker({
          map: map,
          position: place.position,
          icon: icon,
          title: place.title,
          placeId: restaurants[x].placeId
        });
        restMarker.push(marker)
        google.maps.event.addListener(marker, 'click', function(location) {
          placeId = marker.placeId
          console.log("placeID", placeId)
          console.log(this)
          map.setZoom(18);
          map.setCenter(location.latLng)
          markerName = marker.title
          placeDetails(placeId)
          /*
          testAPICall()
          foursquareHTML()
          */

        })
      });
    } else {
      // Clear out the old markers.
      restMarker.forEach(function(marker) {
        marker.setMap(null);
      })
      restMarker = [];
    }
    markers.forEach(function(marker) {
      marker.setMap(null);
    })
    markers = [];

  })
  //Add Recommended Museums to Map
  $("#Museums").on("click", function() {
    map.setZoom(13)
    if (this.checked === true) {
      var museums = [{
          position: new google.maps.LatLng(38.896909, -77.023485),
          type: 'museum',
          title: 'International Spy Museum',
          placeId: 'ChIJ7Y9_SpC3t4kRNidcpxFnLy0'
          }, {
          position: new google.maps.LatLng(38.887568, -77.019905),
          type: 'museum',
          title: 'National Air and Space Museum',
          placeId: 'ChIJISQme4O3t4kRG-iM3TfJ5_g'
        }, {
          position: new google.maps.LatLng(38.893138, -77.019235),
          type: 'museum',
          title: 'Newseum',
          placeId: 'ChIJh6P0dIW3t4kRms-j-mPoCNY'
        }, {
          position: new google.maps.LatLng(38.891064, -77.032614),
          type: 'museum',
          title: 'National Museum of African American History and Culture',
          placeId: 'ChIJF4Mpspi3t4kRBi9jWNebAZg'
        }, {
          position: new google.maps.LatLng(38.888758, -77.025939),
          type: 'museum',
          title: 'Smithsonian Institution Building',
          placeId: 'ChIJ71-la5y3t4kRQkpvV3YxbYI'
        }, {
          position: new google.maps.LatLng(38.897668, -77.026328),
          type: 'museum',
          title: 'Madame Tussauds DC',
          placeId: 'ChIJ16xT35C3t4kR9LWKEG9Jqi0'
        }, {
          position: new google.maps.LatLng(38.892077, -77.019912),
          type: 'museum',
          title: 'National Gallery of Art',
          placeId: 'ChIJSYxSO5u3t4kRm4eyKw_Y7Kg'
        }, {
          position: new google.maps.LatLng(38.891338, -77.029941),
          type: 'museum',
          title: 'National Museum of American History',
          placeId: 'ChIJx7K17Ji3t4kR6h3neQYXsjI'
        }, {
          position: new google.maps.LatLng(38.905122, -77.03798),
          type: 'museum',
          title: "National Geographic Museum",
          placeId: 'ChIJPQA-Fb-3t4kR-kEEP3W1kN4'
        }, {
          position: new google.maps.LatLng(38.886701, -77.032672),
          type: 'museum',
          title: 'U.S. Holocaust Memorial Museum',
          placeId: 'ChIJZaAQK6C3t4kRsx10rk51z3M'
      }];

      museums.forEach(function (place, x) {
          var icon = {
              url: "https://maps.gstatic.com/mapfiles/place_api/icons/museum-71.png",
              size: new google.maps.Size(50, 50),
              origin: new google.maps.Point(0, 0),
              anchor: new google.maps.Point(17, 34),
              scaledSize: new google.maps.Size(25, 25)
          }
          var marker = new google.maps.Marker({
              map: map,
              position: place.position,
              icon: icon,
              title: place.title,
              placeId: museums[x].placeId

          });
          musMarker.push(marker)
          google.maps.event.addListener(marker, 'click', function(location) {
            placeId = marker.placeId
            console.log("placeID", placeId)
            console.log(this)
            map.setZoom(18);
            map.setCenter(location.latLng)
            markerName = marker.title
            placeDetails(placeId)
            /*
            testAPICall()
            foursquareHTML()
            */
          })
        });
    } else {
      // Clear out the old markers.
      musMarker.forEach(function(marker) {
        marker.setMap(null);
      })
      musMarker = [];
    }
    markers.forEach(function(marker) {
      marker.setMap(null);
    })
    markers = [];
  })
  //Add Recommended Hotels to Map
  $("#Hotels").on("click", function() {
    map.setZoom(13)
    if (this.checked === true) {
      var hotels = [{
          position: new google.maps.LatLng(38.905920, -77.048547),
          type: 'hotel',
          title: 'Washington Marriott Georgetown',
          placeId: 'ChIJNajBRLa3t4kRhkEO8UoSZZ0'
        }, {
          position: new google.maps.LatLng(38.899418, -77.055645),
          type: 'hotel',
          title: 'The Watergate Hotel Georgetown',
          placeId: 'ChIJbTuat7K3t4kRUJdMXLSNdMc'
        }, {
          position: new google.maps.LatLng(38.910644, -77.042995),
          type: 'hotel',
          title: 'The Dupont Circle',
          placeId: 'ChIJl-57Rsa3t4kRSyUVymKgvEU'
        }, {
          position: new google.maps.LatLng(38.900519, -77.03695),
          type: 'hotel',
          title: 'The Hay-Adams',
          placeId: 'ChIJkSF0MLy3t4kR1xSE-Mb6QRE'
        }, {
          position: new google.maps.LatLng(38.906068, -77.005074),
          type: 'hotel',
          title: 'Hilton Garden Inn Washington DC/US Capitol',
          placeId: 'ChIJLZ7Q3B64t4kRcjOcbfehD-k'
        }, {
          position: new google.maps.LatLng(38.907498, -77.007796),
          type: 'hotel',
          title: 'Hyatt Place Washington DC/US Capitol',
          placeId: 'ChIJ2SRofR64t4kRCwnqnvpYMqk'
        }, {
          position: new google.maps.LatLng(38.911125, -76.996839),
          type: 'hotel',
          title: 'Hampton Inn Washington DC NoMa Union Station',
          placeId: 'ChIJ5XntORC4t4kRGmih_SefOQI'
        }, {
          position: new google.maps.LatLng(38.878516, -77.023533),
          type: 'hotel',
          title: 'Canopy by Hilton Washington DC The Wharf',
          placeId: 'ChIJ7_FByHC3t4kRMtEWb5krqqw'
        },
        {
          position: new google.maps.LatLng(38.916355, -77.0469),
          type: 'hotel',
          title: 'Churchill Hotel',
          placeId: 'ChIJjSCWuM-3t4kRjc3OKUoZ2js'
        },
        {
          position: new google.maps.LatLng(38.876652, -77.007101),
          type: 'hotel',
          title: 'Homewood Suites By Hilton Washington DC Capitol-Navy Yard',
          placeId: 'ChIJu1khkNa5t4kR2E5wUPunvLU'
        }

      ];

      hotels.forEach(function(place, x) {
        var icon = {
            url: "https://maps.gstatic.com/mapfiles/place_api/icons/lodging-71.png",
            size: new google.maps.Size(50, 50),
            origin: new google.maps.Point(0, 0),
            anchor: new google.maps.Point(17, 34),
            scaledSize: new google.maps.Size(25, 25)
        }
        var marker = new google.maps.Marker({
          map: map,
          position: place.position,
          icon: icon,
          title: place.title,
          placeId: hotels[x].placeId
        });
        hotMarker.push(marker)
        google.maps.event.addListener(marker, 'click', function(location) {
          placeId = marker.placeId
          console.log("placeID", placeId)
          console.log(this)
          map.setZoom(18);
          map.setCenter(location.latLng)
          markerName = marker.title
          placeDetails(placeId)
        })
      });
    } else {
      // Clear out the old markers.
      hotMarker.forEach(function(marker) {
        marker.setMap(null);
      })
      hotMarker = [];
    }
    markers.forEach(function(marker) {
      marker.setMap(null);
    })
    markers = [];
  })
  //Add Recommended Bars to Map
  $("#Clubs-Bars").on("click", function() {
    map.setZoom(13)
    if (this.checked === true) {
      var bars = [
        {
          position: new google.maps.LatLng(38.896455, -77.023434),
          type: 'bar',
          title: 'Penn Social',
          placeId: 'ChIJPU9VOZC3t4kR3MoQpD-q830'
        }, {
          position: new google.maps.LatLng(38.899006, -77.022273),
          type: 'bar',
          title: 'Rocket Bar',
          placeId: 'ChIJwd4e_ZG3t4kRZyhiqUfIXQM'
        }, {
          position: new google.maps.LatLng(38.905326, -77.065664),
          type: 'bar',
          title:'Georgetown Piano Bar',
          placeId: 'ChIJAwHJ2Ui2t4kRWnehalqGX0k'
        }, {
          position: new google.maps.LatLng(38.904078, -77.037995),
          type: 'bar',
          title: 'Barcode',
          placeId: 'ChIJtZtGJ7-3t4kR4_v7WdDfvFQ'
        }, {
          position: new google.maps.LatLng(38.917642, -77.031593),
          type: 'bar',
          title: 'Quarter Glory',
          placeId: 'ChIJNzeivue3t4kR3j-ZPLZzqXg'
        }, {
          position: new google.maps.LatLng(38.916731, -77.037183),
          type: 'bar',
          title: 'Local 16',
          placeId: 'ChIJAb66zdy3t4kRmADgbA-AMQo'
        }, {
          position: new google.maps.LatLng(38.909830, -77.048592),
          type: 'bar',
          title: 'The Fireplace',
          placeId: 'ChIJ4Yh3pcm3t4kRLSFiblnrwvY'
        }, {
          position: new google.maps.LatLng(38.897577, -77.024745),
          type: 'bar',
          title: 'Ultrabar',
          placeId: 'ChIJLd5HqpG3t4kR7SE4iLL4rKk'
        }, {
          position: new google.maps.LatLng(38.904645, -77.062472),
          type: 'bar',
          title: 'Blues Alley',
          placeId: 'ChIJ6bJ4V0m2t4kRFm0ia824sLg'
        }, {
          position: new google.maps.LatLng(38.922091, -77.042144),
          type: 'bar',
          title: 'Bossa Bistro & Lounge',
          placeId: 'ChIJs_CFK9q3t4kRj-NN5ekQYUE'
        }, {
          position: new google.maps.LatLng(38.920389, -77.041619),
          type: 'bar',
          title: 'Columbia Station Inc',
          placeId: 'ChIJO-z9rdu3t4kRJjR2EBpY2Fc'
        }
      ]
      var icon = {
          url: "https://maps.gstatic.com/mapfiles/place_api/icons/bar-71.png",
          size: new google.maps.Size(50, 50),
          origin: new google.maps.Point(0, 0),
          anchor: new google.maps.Point(17, 34),
          scaledSize: new google.maps.Size(25, 25)
      }
      bars.forEach(function(place, x) {
        var marker = new google.maps.Marker({
          map: map,
          position: place.position,
          icon: icon,
          title: place.title,
          placeId: bars[x].placeId
        });
        barMarker.push(marker)
        google.maps.event.addListener(marker, 'click', function(location) {
          placeId = marker.placeId
          console.log("placeID", placeId)
          console.log(this)
          map.setZoom(18);
          map.setCenter(location.latLng)
          markerName = marker.title
          placeDetails(placeId)
        })
      });
    } else {
      // Clear out the old markers.
      barMarker.forEach(function(marker) {
        marker.setMap(null);
      })
      barMarker = [];
    }
    markers.forEach(function(marker) {
      marker.setMap(null);
    })
    markers = [];
  })


  // Listen for the event fired when the user selects a prediction and retrieve
  // more details for that place.
  searchBox.addListener('places_changed', function() {
    var places = searchBox.getPlaces();
    if (places.length == 0) {
      return;
    }
    // Clear out the old markers.
    markers.forEach(function(marker) {
      marker.setMap(null);
    })
    markers = [];
    // Clear out the Restaurant markers.
    restMarker.forEach(function(marker) {
      marker.setMap(null);
    })
    restMarker = [];
    // Clear out the Museum markers.
    musMarker.forEach(function(marker) {
      marker.setMap(null);
    })
    musMarker = [];
    // Clear out the Hotel markers.
    hotMarker.forEach(function(marker) {
      marker.setMap(null);
    })
    hotMarker = [];
    // Clear out the Bar markers.
    barMarker.forEach(function(marker) {
      marker.setMap(null);
    })
    barMarker = [];
    //store the bounds when panning around
    var bounds = new google.maps.LatLngBounds();
    searchBox.setBounds(bounds)

    // For each place, get the icon, name and location.

    places.forEach(function(place) {
      if (!place.geometry) {
        console.log("Returned place contains no geometry");
        return;
      }
      var icon = {
        url: place.icon,
        size: new google.maps.Size(50, 50),
        origin: new google.maps.Point(0, 0),
        anchor: new google.maps.Point(17, 34),
        scaledSize: new google.maps.Size(25, 25)
      };
      // Create a marker for each place.
      var marker = new google.maps.Marker({
        map: map,
        icon: icon,
        title: place.name,
        position: place.geometry.location
      })
      //Push marker to markers array
      markers.push(marker);
      console.log(markers)
      //Click event to add Marker name to array to link with FourSquare
      google.maps.event.addListener(marker, 'click', function(location) {
        placeId = place.place_id
        console.log("placeID", placeId)
        map.setZoom(18);
        map.setCenter(location.latLng)
        markerName = marker.title
        placeDetails(placeId)
        /*
        testAPICall()
        foursquareHTML()
        */
        location = location.latLng
        console.log("location name: ", markerName)

      })
      if (place.geometry.viewport) {
        // Only geocodes have viewport.
        bounds.union(place.geometry.viewport);
      } else {
        bounds.extend(place.geometry.location);
      }
    });
    map.fitBounds(bounds);
  });
}



//FOURSQUARE-API---------------------------------------------------------------
var idArray = [];

function testAPICall() {
  idArray = [];
  var userVariable = markerName

  console.log("userVariable", userVariable)

  var clientID = "0G2KKVAECBPFBYBT4SQU4MUCMF5IHQDVGCM1M4XK0EKJWQ53";
  var clientSecret = "NXG25YHZAHDRIGFZ3W2ZHPM3MZVL3CPWXPEKTP3V11WT5A5V";
  var location = "Washington+DC"
  var date = "20180113"


  var queryURL = "https://api.foursquare.com/v2/venues/search?near=" + location + "&query=" + userVariable + "&v=" +
    date + "&m=foursquare" + "&client_secret=" + clientSecret + "&client_id=" + clientID;

    console.log("queryURL", queryURL)

  ///THIS URL WORKS
  //https://api.foursquare.com/v2/venues/search?near=seattle,wa&query=coffee&v=20150214&m=foursquare&client_secret=NXG25YHZAHDRIGFZ3W2ZHPM3MZVL3CPWXPEKTP3V11WT5A5V&client_id=0G2KKVAECBPFBYBT4SQU4MUCMF5IHQDVGCM1M4XK0EKJWQ53


  $.ajax({
    url: queryURL,
    method: "GET"
  }).done(function(response) {
    $(".json").text(JSON.stringify(response));

    var data = response.response.venues;
    for (var i = 0; i < data.length; i++) {
      var picId = data[i].id;
      idArray.push(picId)

    };
    console.log("response", response);

    console.log(data);
    console.log(picId)
    console.log(idArray.push(picId));
    console.log(idArray)






    //});


      var queryURL3 = "https://api.foursquare.com/v2/venues/" +idArray[i] + "?v=" +
        date + "&client_secret=" + clientSecret + "&client_id=" + clientID;

      $.ajax({
      url: queryURL3,
      method: "GET"
    }).done(function(description) {
      console.log(description);
      var bestPic = description.response.venue.bestPhoto
      console.log(bestPic);
      //for (var i=0; i<bestPic.length; i++){
      var prefix2 = bestPic.prefix;
      var width2 = bestPic.width;
      var height2 = bestPic.height;
      var suffix2 = bestPic.suffix;
      veryBestPic = prefix2+width2+height2+suffix2
      console.log("veryBestPic", veryBestPic)


    });

    var queryURL3 = "https://api.foursquare.com/v2/venues/" +idArray[i] + "?v=" +
      date + "&client_secret=" + clientSecret + "&client_id=" + clientID;
    $.ajax({
    url: queryURL3,
    method: "GET"
  }).done(function(checkins) {
    console.log(checkins);
    popularity = checkins.response.venue.stats.checkinsCount
    console.log("checkins:",popularity);


  });
  //  console.log(prefix2)

      // console.log(photo);
      // console.log(dataTwo)

    })
};

function foursquareHTML(){
  $("#markerCheckins").append(placeDetailsModal)
  jQuery.noConflict();
  $("#markerModal").modal()
}

//FOURSQUARE-API---------------------------------------------------------------

//Google Maps Place Details//
function placeDetails(placeId){
        $("#markerName").empty()
        $("#markerCheckins").empty()
        // Clear out the old markers.
        placeMarker.forEach(function(marker) {
          marker.setMap(null);
        })

        var infowindow = new google.maps.InfoWindow();
        var service = new google.maps.places.PlacesService(map);

        service.getDetails({
          placeId: placeId
        }, function(place, status) {
          if (status === google.maps.places.PlacesServiceStatus.OK) {

            var icon = {
              url: place.icon,
              size: new google.maps.Size(50, 50),
              origin: new google.maps.Point(0, 0),
              anchor: new google.maps.Point(17, 34),
              scaledSize: new google.maps.Size(25, 25)
            };
            marker = new google.maps.Marker({
              map: map,
              icon: icon,
              position: place.geometry.location
            });

            placeMarker.push(marker)

            google.maps.event.addListener(marker, 'click', function() {
              var placeDetailsTitle = (place.name)
              var placeDetailsModal = ('<div><img src="' +  place.photos["0"].getUrl({'maxWidth': 200, 'maxHeight': 200}) + '">' + '<br>' +
                place.formatted_address + '<br>' + 'Average User Rating: '+ place.rating +'/5'+ '<br>' + 'Price Level: '+ place.price_level +'/5' + '<br>' + 'Phone Number: ' + place.international_phone_number + '<br>' + 'Official site: ' + '<a href="' + place.website + '">' + place.website + '</a>' + '<br>' + 'User Feedback: ' +  place.reviews["0"].author_name + '<br>' + 'Comments: ' + place.reviews["0"].text + '</div>');

                $("#markerName").text(placeDetailsTitle)
                $("#markerCheckins").append(placeDetailsModal)
                jQuery.noConflict();
                $("#markerModal").modal()
            });
          }
          /*console.log('<img src="' + place.photos["0"].getUrl({'maxWidth': 200, 'maxHeight': 200}) + '">')*/
          console.log(place.reviews)
        });
}
