
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


            var date = responseArray[i].dt_txt

            var minTemp = responseArray[i].main.temp_min
            var maxTemp = responseArray[i].main.temp_max
            var weather = responseArray[i].weather["0"].main

            console.log(date, minTemp, maxTemp, weather)

            //create containers tmrw

          }

      })

})
