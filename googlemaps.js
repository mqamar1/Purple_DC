function googleMaps() {
  //MarkerName and Array used to link with FourSquare
  var markerName = ""
  /*
  var markersNameArray = []
  */
  //creates map in HTML centered on Washington, D.C.
  var map = new google.maps.Map(document.getElementById('map'), {
    center: {lat: 38.9072,lng: -77.0369},
    zoom: 11,
    mapTypeId: 'roadmap'
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
            scaledSize: new google.maps.Size(15, 15)
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
          google.maps.event.addListener(marker, 'click', function() {
            markerName = marker.title
            console.log(markerName)
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
