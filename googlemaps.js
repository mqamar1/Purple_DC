function googleMaps() {
  //MarkerName and Array used to link with FourSquare
  var markerName = ""
  var location = ""
  /*
  var markersNameArray = []
  */
  //creates map in HTML centered on Washington, D.C.
  var map = new google.maps.Map(document.getElementById('map'), {
    center: {lat: 38.9072,lng: -77.0369},
    zoom: 10,
    gestureHandling: 'greedy',
    styles: [
      {
        "elementType": "geometry",
        "stylers": [{"color": "#f5f5f5"}]
      },
      {
        "elementType": "labels.icon",
        "stylers": [{"visibility": "off"}]
      },
      {
        "elementType": "labels.text.fill",
        "stylers": [{"color": "#616161"}]
      },
      {
        "elementType": "labels.text.stroke",
        "stylers": [{"color": "#f5f5f5"}]
      },
      {
        "featureType": "administrative.land_parcel",
        "elementType": "labels",
        "stylers": [{"visibility": "off"}]
      },
      {
        "featureType": "administrative.land_parcel",
        "elementType": "labels.text.fill",
        "stylers": [{"color": "#bdbdbd"}]
      },
      {
        "featureType": "administrative.locality",
        "elementType": "labels.text.fill",
        "stylers": [{"color": "#5500aa"}]
      },
      {
        "featureType": "administrative.neighborhood",
        "elementType": "labels.text.fill",
        "stylers": [{"color": "#a74fff"}]
      },
      {
        "featureType": "landscape.man_made",
        "elementType": "geometry.stroke",
        "stylers": [{"color": "#5500aa"}]
      },
      {
        "featureType": "poi",
        "stylers": [{"visibility": "on"}]
      },
      {
        "featureType": "poi",
        "elementType": "geometry",
        "stylers": [{"color": "#eeeeee"}]
      },
      {
        "featureType": "poi",
        "elementType": "labels.text",
        "stylers": [{"visibility": "off"}]
      },
      {
        "featureType": "poi",
        "elementType": "labels.text.fill",
        "stylers": [{"color": "#757575"}]
      },
      {
        "featureType": "poi.park",
        "elementType": "geometry",
        "stylers": [{"color": "#e5e5e5"}]
      },
      {
        "featureType": "poi.park",
        "elementType": "geometry.fill",
        "stylers": [{"color": "#a6d89e"}]
      },
      {
        "featureType": "poi.park",
        "elementType": "labels.text.fill",
        "stylers": [{"color": "#9e9e9e"}]
      },
      {
        "featureType": "road",
        "stylers": [{"visibility": "on"}]
      },
      {
        "featureType": "road",
        "elementType": "geometry",
        "stylers": [{"color": "#ffffff"}]
      },
      {
        "featureType": "road.arterial",
        "elementType": "labels.text.fill",
        "stylers": [{"color": "#757575"}]
      },
      {
        "featureType": "road.highway",
        "elementType": "geometry",
        "stylers": [{"color": "#dadada"}]
      },
      {
        "featureType": "road.highway",
        "elementType": "labels.text.fill",
        "stylers": [{"color": "#616161"}]
      },
      {
        "featureType": "road.local",
        "elementType": "labels",
        "stylers": [{"visibility": "off"}]
      },
      {
        "featureType": "road.local",
        "elementType": "labels.text.fill",
        "stylers": [{"color": "#9e9e9e"}]
      },
      {
        "featureType": "transit.line",
        "elementType": "geometry",
        "stylers": [{"color": "#e5e5e5"}]
      },
      {
        "featureType": "transit.station",
        "elementType": "geometry",
        "stylers": [{"color": "#eeeeee"}]
      },
      {
        "featureType": "water",
        "elementType": "geometry",
        "stylers": [{"color": "#c9c9c9"}]
      },
      {
        "featureType": "water",
        "elementType": "geometry.fill",
        "stylers": [{"color": "#b0d8ff"}]
      },
      {
        "featureType": "water",
        "elementType": "labels.text.fill",
        "stylers": [{"color": "#9e9e9e"}]
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
  });
  var markers = [];
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
        });
        markers = [];
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
        /*
  new AutocompleteDirectionsHandler(map)
        function AutocompleteDirectionsHandler(map) {
          this.map = map;
          this.originPlaceId = null;
          this.destinationPlaceId = null;
          this.travelMode = 'DRIVING';
          var originInput = document.getElementById('origin-input');
          var destinationInput = document.getElementById('destination-input');
          this.directionsService = new google.maps.DirectionsService;
          this.directionsDisplay = new google.maps.DirectionsRenderer;
          this.directionsDisplay.setMap(map);

          var originAutocomplete = new google.maps.places.Autocomplete(
              originInput, {placeIdOnly: true});
          var destinationAutocomplete = new google.maps.places.Autocomplete(
              destinationInput, {placeIdOnly: true});

          this.setupPlaceChangedListener(originAutocomplete, 'ORIG');
          this.setupPlaceChangedListener(destinationAutocomplete, 'DEST');

          this.map.controls[google.maps.ControlPosition.TOP_LEFT].push(originInput);
          this.map.controls[google.maps.ControlPosition.TOP_LEFT].push(destinationInput);
        }

        // Sets a listener on a radio button to change the filter type on Places
        // Autocomplete.
        AutocompleteDirectionsHandler.prototype.setupClickListener = function(id, mode) {
          var radioButton = document.getElementById(id);
          var me = this;
          radioButton.addEventListener('click', function() {
            me.travelMode = mode;
            me.route();
          });
        };

        AutocompleteDirectionsHandler.prototype.setupPlaceChangedListener = function(autocomplete, mode) {
          var me = this;
          autocomplete.bindTo('bounds', this.map);
          autocomplete.addListener('place_changed', function() {
            var place = autocomplete.getPlace();
            if (!place.place_id) {
              window.alert("Please select an option from the dropdown list.");
              return;
            }
            if (mode === 'ORIG') {
              me.originPlaceId = place.place_id;
            } else {
              me.destinationPlaceId = place.place_id;
            }
            me.route();
          });

        };

        AutocompleteDirectionsHandler.prototype.route = function() {
          if (!this.originPlaceId || !this.destinationPlaceId) {
            return;
          }
          var me = this;

          this.directionsService.route({
            origin: {'placeId': this.originPlaceId},
            destination: {'placeId': this.destinationPlaceId},
            travelMode: this.travelMode
          }, function(response, status) {
            if (status === 'OK') {
              me.directionsDisplay.setDirections(response);
            } else {
              window.alert('Directions request failed due to ' + status);
            }
          });
        };
        */
}
function initMap() {
          map = new google.maps.Map(document.getElementById('map'), {
            zoom: 16,
            center: new google.maps.LatLng(-33.91722, 151.23064),
            mapTypeId: 'roadmap'
          });

          var iconBase = 'https://maps.google.com/mapfiles/kml/shapes/';
          var icons = {
            parking: {
              icon: iconBase + 'parking_lot_maps.png'
            },
            library: {
              icon: iconBase + 'library_maps.png'
            },
            info: {
              icon: iconBase + 'info-i_maps.png'
            }
          };

          var features = [
            {
              position: new google.maps.LatLng(-33.91721, 151.22630),
              type: 'info'
            }, {
              position: new google.maps.LatLng(-33.91539, 151.22820),
              type: 'info'
            }, {
              position: new google.maps.LatLng(-33.91747, 151.22912),
              type: 'info'
            }, {
              position: new google.maps.LatLng(-33.91910, 151.22907),
              type: 'info'
            }, {
              position: new google.maps.LatLng(-33.91725, 151.23011),
              type: 'info'
            }, {
              position: new google.maps.LatLng(-33.91872, 151.23089),
              type: 'info'
            }, {
              position: new google.maps.LatLng(-33.91784, 151.23094),
              type: 'info'
            }, {
              position: new google.maps.LatLng(-33.91682, 151.23149),
              type: 'info'
            }, {
              position: new google.maps.LatLng(-33.91790, 151.23463),
              type: 'info'
            }, {
              position: new google.maps.LatLng(-33.91666, 151.23468),
              type: 'info'
            }, {
              position: new google.maps.LatLng(-33.916988, 151.233640),
              type: 'info'
            }, {
              position: new google.maps.LatLng(-33.91662347903106, 151.22879464019775),
              type: 'parking'
            }, {
              position: new google.maps.LatLng(-33.916365282092855, 151.22937399734496),
              type: 'parking'
            }, {
              position: new google.maps.LatLng(-33.91665018901448, 151.2282474695587),
              type: 'parking'
            }, {
              position: new google.maps.LatLng(-33.919543720969806, 151.23112279762267),
              type: 'parking'
            }, {
              position: new google.maps.LatLng(-33.91608037421864, 151.23288232673644),
              type: 'parking'
            }, {
              position: new google.maps.LatLng(-33.91851096391805, 151.2344058214569),
              type: 'parking'
            }, {
              position: new google.maps.LatLng(-33.91818154739766, 151.2346203981781),
              type: 'parking'
            }, {
              position: new google.maps.LatLng(-33.91727341958453, 151.23348314155578),
              type: 'library'
            }
          ];

          // Create markers.
          features.forEach(function(feature) {
            var marker = new google.maps.Marker({
              position: feature.position,
              icon: icons[feature.type].icon,
              map: map
            });
          });

}
