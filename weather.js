
$("#weatherSubmit").on("click", function(){

  var weatherCity = $("#weatherCity").val()
  var weatherCC = $("#weatherCC").val()

  var queryURL = "https://api.openweathermap.org/data/2.5/forecast?q=" + weatherCity + "," + weatherCC + "&appid=a9f634489329fd91f8011bddf4e0890e&units=Imperial&cnt=6"
  console.log("queryURL", queryURL)

  $.ajax({
          url: queryURL,
          method: "GET"
        }).done(function(response) {
          console.log(response)

          var responseArray = response.list
          //log the array to make sure everything is correct
          console.log(responseArray)
          for (var i = 0; i < responseArray.length; i++) {

            var date = response[i].dt_txt
            var minTemp = response[i].main.temp_min
            var maxTemp = response[i].main.temp_max
            var weather = response[i].weather["0"].main
            var detailWeather = response[i].weather["0"].description
            var fullWeather = weather + "-" + detailWeather


            var eachDayDiv = $("<div>")
            var 



          }

      })

})
