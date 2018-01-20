var markerName = ""
var map;
var markers = []
var hotMarker = []
var restMarker = []
var barMarker = []
var musMarker = []

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
  var input = document.getElementById('pac-input');
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
    if (this.checked === true) {
      var restaurants = [{
          position: new google.maps.LatLng(38.909773, -77.045214),
          type: 'restaurant',
          title: '1. (Pizzeria Paradiso, 2003 P St NW, Dupont Circle, Washington DC, DC 20036)'
        }, {
          position: new google.maps.LatLng(38.900952, -77.017797),
          type: 'restaurant',
          title: '2. (Texas de Brazil, 455 Massachusetts Ave NW, Ste 100, Washington DC, DC 20001)'
        }, {
          position: new google.maps.LatLng(38.901601, -77.044244),
          type: 'restaurant',
          title: '3. (Kaz Sushi Bistro, 1915 I St NW, Washington DC, DC 20006)'
        }, {
          position: new google.maps.LatLng(38.902141, -77.02519),
          type: 'restaurant',
          title: '4. (Acadiana, 901 New York Ave NW, Ste 200A, Washington DC, DC 20001)'
        }, {
          position: new google.maps.LatLng(38.899542, -77.02038),
          type: 'restaurant',
          title: '5. (Wok & Roll, 604 H St NW, Washington DC, DC 20001)'
        }, {
          position: new google.maps.LatLng(38.902257, -77.00222),
          type: 'restaurant',
          title: '6. (Indigo, 243 K St NE, Washington DC, DC 20002)'
        }, {
          position: new google.maps.LatLng(38.895274, -76.983337),
          type: 'restaurant',
          title: '7. (Far East Tacos Grille, 409 15th St NE, Washington, DC 20002)'
        }, {
          position: new google.maps.LatLng(38.899836, -76.98705),
          type: 'restaurant',
          title: '8. (H Street Country Club, 1335 H St NE, Washington, DC 20002)'
        }, {
          position: new google.maps.LatLng(38.929405, -76.991024),
          type: 'restaurant',
          title: "9. (Brookland's Finest Bar and Kitchen, 3126 12th St NE, Washington, DC 20017)"
        }, {
          position: new google.maps.LatLng(38.914631, -76.985541),
          type: 'restaurant',
          title: '10. (Ivy City Smokehouse, 1356 Okie St NE, Washington, DC 20002)'
      }];
      var icon = {
        restaurant: {
          icon: "https://maps.gstatic.com/mapfiles/place_api/icons/restaurant-71.png",
          size: new google.maps.Size(1, 1),
          origin: new google.maps.Point(0, 0),
          anchor: new google.maps.Point(17, 34),
          scaledSize: new google.maps.Size(5, 5)
        }
      }
      restaurants.forEach(function(feature) {
        var marker = new google.maps.Marker({
          position: feature.position,
          icon: icon[feature.type].icon,
          size: icon[feature.type].size,
          title: feature.title,
          map: map
        });

        restMarker.push(marker)
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
    if (this.checked === true) {
      var museums = [{
          position: new google.maps.LatLng(38.896909, -77.023485),
          type: 'museum',
          title: '(International Spy Museum, 800 F St NW, Washington DC, DC 20004)'
          }, {
          position: new google.maps.LatLng(38.887568, -77.019905),
          type: 'museum',
          title: '(National Air and Space Museum, 6th and Independence Ave., SW, Washington DC, DC 20560)'
        }, {
          position: new google.maps.LatLng(38.893138, -77.019235),
          type: 'museum',
          title: '(Newseum, 555 Pennsylvania Ave NW, Washington DC, DC 20001)'
        }, {
          position: new google.maps.LatLng(38.891064, -77.032614),
          type: 'museum',
          title: '(National Museum of African American History and Culture, 1400 Constitution Ave NW, Washington DC, DC 20560)'
        }, {
          position: new google.maps.LatLng(38.888758, -77.025939),
          type: 'museum',
          title: '(Smithsonian Institution Building, 1000 Jefferson Dr SW, Washington DC, DC 20560)'
        }, {
          position: new google.maps.LatLng(38.897668, -77.026328),
          type: 'museum',
          title: '(Madame Tussauds DC, 1001 F St NW, Washington DC, DC 20004-1409)'
        }, {
          position: new google.maps.LatLng(38.892077, -77.019912),
          type: 'museum',
          title: '(National Gallery of Art, 6th & Constitution Ave NW, Washington, DC 20565)'
        }, {
          position: new google.maps.LatLng(38.891338, -77.029941),
          type: 'museum',
          title: '(National Museum of American History, 1300 Constitution Ave NW, Washington, DC 20560)'
        }, {
          position: new google.maps.LatLng(38.905122, -77.03798),
          type: 'museum',
          title: "(National Geographic Museum, 1145 17th St NW, Washington, DC 20036)"
        }, {
          position: new google.maps.LatLng(38.886701, -77.032672),
          type: 'museum',
          title: '(U.S. Holocaust Memorial Museum, 100 Raoul Wallenberg Pl SW, Washington, DC 20024)'
      }];
      var icon = {
        museum: {
          icon: "https://maps.gstatic.com/mapfiles/place_api/icons/museum-71.png",
          size: new google.maps.Size(10, 10),
          origin: new google.maps.Point(0, 0),
          anchor: new google.maps.Point(17, 34),
          scaledSize: new google.maps.Size(5, 5)
        }
      }
      museums.forEach(function (feature) {
          var marker = new google.maps.Marker({
              position: feature.position,
              icon: icon[feature.type].icon,
              title: feature.title,
              map: map

          });
          musMarker.push(marker)
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
    if (this.checked === true) {
      var hotels = [{
          position: new google.maps.LatLng(38.905920, -77.048547),
          type: 'hotel',
          title: '(Washington Marriott Georgetown, 1221 22nd Street NW, Washington DC, DC 20037)'
        }, {
          position: new google.maps.LatLng(38.899418, -77.055645),
          type: 'hotel',
          title: '(The Watergate Hotel Georgetown, 2650 Virginia Ave NW, Washington DC, DC 20037)'
        }, {
          position: new google.maps.LatLng(38.910644, -77.042995),
          type: 'hotel',
          title: '(The Dupont Circle, 1500 New Hampshire Ave NW, Washington DC, DC 20036)'
        }, {
          position: new google.maps.LatLng(38.900519, -77.03695),
          type: 'hotel',
          title: '(The Hay-Adams, 16th & H Sts. NW, One Lafayette Square, Washington DC, DC 20006)'
        }, {
          position: new google.maps.LatLng(38.906068, -77.005074),
          type: 'hotel',
          title: '(Hilton Garden Inn Washington DC/US Capitol, 1225 First St NE, Washington, DC 20002)'
        }, {
          position: new google.maps.LatLng(38.907498, -77.007796),
          type: 'hotel',
          title: '(Hyatt Place Washington DC/US Capitol, 33 New York Ave NE, Washington, DC 20002)'
        }, {
          position: new google.maps.LatLng(38.911125, -76.996839),
          type: 'hotel',
          title: '(Hampton Inn Washington DC NoMa Union Station, 501 New York Ave NE A, Washington, DC 20002)'
        }, {
          position: new google.maps.LatLng(38.878516, -77.023533),
          type: 'hotel',
          title: '(Canopy by Hilton Washington DC The Wharf, 975 7th St SW, Washington, DC 20024)'
        },
        {
          position: new google.maps.LatLng(38.916355, -77.0469),
          type: 'hotel',
          title: '(Churchill Hotel, 1914 Connecticut Ave NW, Washington, DC 20009)'
        },
        {
          position: new google.maps.LatLng(38.876652, -77.007101),
          type: 'hotel',
          title: '(Homewood Suites By Hilton Washington DC Capitol-Navy Yard, 50 M St SE, Washington, DC 20003)'
        }

      ];
      var icon = {
        hotel: {
          icon: "https://maps.gstatic.com/mapfiles/place_api/icons/lodging-71.png",
          size: new google.maps.Size(10, 10),
          origin: new google.maps.Point(0, 0),
          anchor: new google.maps.Point(17, 34),
          scaledSize: new google.maps.Size(5, 5)
        }
      }
      hotels.forEach(function(feature) {
        var marker = new google.maps.Marker({
          position: feature.position,
          icon: icon[feature.type].icon,
          title: feature.title,
          map: map
        });
        hotMarker.push(marker)
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
    if (this.checked === true) {
      var bars = [
        {
            position: new google.maps.LatLng(38.896455, -77.023434),
          type: 'bar',
          title: '(Penn Social, 801 E St NW, Washington, DC 20004)'
        }, {
            position: new google.maps.LatLng(38.899006, -77.022273),
            type: 'bar',
          title: '(Rocket Bar, 714 7th St NW, Washington, DC 20001)'
        }, {
            position: new google.maps.LatLng(38.905326, -77.065664),
            type: 'bar',
          title:'(Georgetown Piano Bar, 3287 M St NW, Washington, DC 20007)'
        }, {
            position: new google.maps.LatLng(38.904078, -77.037995),
            type: 'bar',
          title: '(Barcode, 1101 17th St NW, Washington, DC 20036)'
        }, {
            position: new google.maps.LatLng(38.917642, -77.031593),
            type: 'bar',
          title: '(Quarter+Glory, 2017 14th St NW, Washington, DC 20009)'
        }, {
            position: new google.maps.LatLng(38.916731, -77.037183),
            type: 'bar',
          title: '(Local 16, 1602 U St NW, Washington, DC 20009)'
        }, {
            position: new google.maps.LatLng(38.909830, -77.048592),
            type: 'bar',
            title: '(The Fireplace, 2161 P St NW, Washington, DC 20037)'
        }, {
            position: new google.maps.LatLng(38.897577, -77.024745),
            type: 'bar',
            title: '(Ultrabar, 911 F St NW, Washington, DC 20004)'
        }, {
            position: new google.maps.LatLng(38.904645, -77.062472),
            type: 'bar',
          title: '(Blues Alley, 1073 Wisconsin Ave NW, Washington, DC 20007)'
        }, {
            position: new google.maps.LatLng(38.922091, -77.042144),
            type: 'bar',
          title: '(Bossa Bistro & Lounge, 2463 18 St NW, Washington, DC 20009)'
        }, {
            position: new google.maps.LatLng(38.920389, -77.041619),
            type: 'bar',
            title: '(Columbia Station Inc, 2325 18 St NW, Washington, DC 20009)'
        }
      ]
      var icon = {
        bar: {
          icon: "https://maps.gstatic.com/mapfiles/place_api/icons/bar-71.png",
          size: new google.maps.Size(10, 10),
          origin: new google.maps.Point(0, 0),
          anchor: new google.maps.Point(17, 34),
          scaledSize: new google.maps.Size(5, 5)
        }
      }
      bars.forEach(function(feature) {
        var marker = new google.maps.Marker({
          position: feature.position,
          icon: icon[feature.type].icon,
          title: feature.title,
          map: map
        });

        barMarker.push(marker)
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
    // For each place, get the icon, name and location.
    var bounds = new google.maps.LatLngBounds();
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
        map.setZoom(18);
        map.setCenter(location.latLng)
        markerName = marker.title
        location = location.latLng
        console.log(markerName)
        console.log(location)
        /*
        markersNameArray.push(markerName)
        console.log(markersNameArray)
        */
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
