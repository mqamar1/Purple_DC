$("#pac-input").keypress(function(e) {
    if(e.which == 13) {
        testAPICall();
    }
});

var idArray = [];

function testAPICall() {

  var userVariable = $("#pac-input").val();
  var clientID = "0G2KKVAECBPFBYBT4SQU4MUCMF5IHQDVGCM1M4XK0EKJWQ53";
  var clientSecret = "NXG25YHZAHDRIGFZ3W2ZHPM3MZVL3CPWXPEKTP3V11WT5A5V";
  var location = "Washington+DC"
  var date = "20180113"
  var queryURL = "https://api.foursquare.com/v2/venues/search?near=" + location + "&query=" + userVariable + "&v=" +
    date + "&m=foursquare" + "&client_secret=" + clientSecret + "&client_id=" + clientID;

  $.ajax({
    url: queryURL,
    method: "GET"
  }).done(function(response) {
    // $(".json").text(JSON.stringify(response));
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

    var queryURL2 = "https://api.foursquare.com/v2/venues/" + idArray[i] + "/photos?" + "&v=" +
      date + "&client_secret=" + clientSecret + "&client_id=" + clientID;
    $.ajax({
      url: queryURL2,
      method: "GET"
    }).done(function(photo) {
      console.log(photo);
      var dataTwo = photo.response.photos.items;
      for (var i=0; i < dataTwo.length; i++) {
        var prefix1 = dataTwo[i].prefix;
        // var width1 = dataTwo[i].width;
        // var height1 = dataTwo[i].height;
        var width1 = "200";
        var height1 = "200";
        var suffix1 = dataTwo[i].suffix;
        var wholeIMG = prefix1 + width1 + "x" + height1 + suffix1;
        console.log(prefix1+width1+height1+suffix1)
        console.log(wholeIMG);

        $("#api-photos").append('<img src=" ' + wholeIMG + '" alt="image of venue">')
      }

    });
  });

};
