var idArray = [];

function testAPICall() {

  var userVariable = markerName

  var clientID = "0G2KKVAECBPFBYBT4SQU4MUCMF5IHQDVGCM1M4XK0EKJWQ53";
  var clientSecret = "NXG25YHZAHDRIGFZ3W2ZHPM3MZVL3CPWXPEKTP3V11WT5A5V";
  var location = "Washington+DC"
  var date = "20180113"


  var queryURL = "https://api.foursquare.com/v2/venues/search?near=" + location + "&query=" + userVariable + "&v=" +
    date + "&m=foursquare" + "&client_secret=" + clientSecret + "&client_id=" + clientID;

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
    console.log(response);
    console.log(data);
    console.log(picId)
    console.log(idArray.push(picId));
    console.log(idArray)



    // //});
    // var queryURL2 = "https://api.foursquare.com/v2/venues/" + idArray[i] + "/photos" + "?v=" +
    //   date + "&client_secret=" + clientSecret + "&client_id=" + clientID;
    //
    // $.ajax({
    //   url: queryURL2,
    //   method: "GET"
    // }).done(function(photo) {
    //   //console.log(photo);
    //   var dataTwo = photo.response.photos.items;
    //   for (var i=0; i<dataTwo.length; i++){
    //     var prefix1 = dataTwo[i].prefix;
    //     var width1 = dataTwo[i].width;
    //     var height1 = dataTwo[i].height;
    //     var suffix1 = dataTwo[i].suffix;
    //     console.log(prefix1+width1+height1+suffix1)
    //
    //   }




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
      console.log(prefix2+width2+height2+suffix2)
//}

    });

    var queryURL3 = "https://api.foursquare.com/v2/venues/" +idArray[i] + "?v=" +
      date + "&client_secret=" + clientSecret + "&client_id=" + clientID;
    $.ajax({
    url: queryURL3,
    method: "GET"
  }).done(function(checkins) {
    console.log(checkins);
    var popularity = checkins.response.venue.stats.checkinsCount
    console.log(popularity);


  });
  //  console.log(prefix2)

      // console.log(photo);
      // console.log(dataTwo)
    });


};
