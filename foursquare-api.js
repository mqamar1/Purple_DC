//When the user presses 'enter' key, testAPICall function will run
$("#pac-input").keypress(function(e) {
    if(e.which == 13) {
        testAPICall();
    }
});



//API call function
function testAPICall() {

  var userVariable = $("#pac-input").val().trim()

  var clientID = "0G2KKVAECBPFBYBT4SQU4MUCMF5IHQDVGCM1M4XK0EKJWQ53";
  var clientSecret = "NXG25YHZAHDRIGFZ3W2ZHPM3MZVL3CPWXPEKTP3V11WT5A5V";
  var location = "Washington+DC";
  var date = "20180113";
  var imgIDs = [];
  var numberLimit = 10;

  var queryURL = "https://api.foursquare.com/v2/venues/search?near=" + location + "&query=" + userVariable + "&v=" + date + "&limit=" + numberLimit + "&m=foursquare&client_secret=" + clientSecret + "&client_id=" + clientID;

  //Make sure to add [i] to imgIDs before using. Will need to put this in a loop and concatenate
  var imageURL = "https://api.foursquare.com/v2/venues/" + imgIDs + "/photos?group=venue&limit=" + numberLimit + "&v=" + date + "&m=foursquare&client_secret=" + clientSecret + "&client_id=" + clientID;



  //Begin of URL reference
  //===============================================


  ///----> VENUE API URL
    //https://api.foursquare.com/v2/venues/search? + near=seattle,wa + &query=coffee + &v=20150214 + &m=foursquare + &client_secret=NXG25YHZAHDRIGFZ3W2ZHPM3MZVL3CPWXPEKTP3V11WT5A5V + &client_id=0G2KKVAECBPFBYBT4SQU4MUCMF5IHQDVGCM1M4XK0EKJWQ53

  ///----> PHOTO API URL
  //                                               (VENUE ID)
  //                                                    ^
  //                                                    |
    //https://api.foursquare.com/v2/venues/ + 4b26d9c7f964a520f48124e3/photos? +  group=venue + &limit=30 + &v=20180116 + &m=foursquare + &client_secret=NXG25YHZAHDRIGFZ3W2ZHPM3MZVL3CPWXPEKTP3V11WT5A5V + &client_id=0G2KKVAECBPFBYBT4SQU4MUCMF5IHQDVGCM1M4XK0EKJWQ53

  ///----> Formula for getting individual images returned from PHOTO API URL
    //      (PREFFIX)                            + (SIZE) +                        (SUFFIX)
    //          ^                                     ^                                 ^
    //          |                                     |                                 |
    //https://igx.4sqi.net/img/general/          + 300x500 +    /1339875_aoQDtwv6XbQS2fw6b-0uZOtahcdww7YSp7akES-lrCs.jpg


  //===============================================
  //End of URL reference


  //URL for images formula. Similar to queryURL and imageURL
  var preffix = "https://igx.4sqi.net/img/general/";
  var size = "300x500";
  var suffix = imgIDs; //will need to add [i] to this


  //AJAX API call
  $.ajax({
    url: queryURL,
    method: "GET"
  }).done(function(response) {
    //$(".json").text(JSON.stringify(response)); //<----- commented out until we figure out how to properly place in HTML
    console.log(response);

    for (var i = 0; i < response.response.venues.length; i++) {
      var imageID = response.response.venues[i].id;
      imgIDs.push(imageID);
      // console.log(response.response.venues[i].id); //<----- commented out until needed
      console.log(imgIDs);
    }
  })

};
