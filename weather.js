
//24-Hour Weather Forecast/ 3 Hour Interval
$("#weatherSubmit").on("click", function(){
  //Clears table if the query is run again during same session
  $("#forecastDisplay").empty()
  //Collect City and Country from form
  var weatherCity = $("#weatherCity").val()
  var weatherCC = $("#weatherCC").val()
  //URL plugs in City/Country
  var queryURL = "https://api.openweathermap.org/data/2.5/forecast?q=" + weatherCity + "," + weatherCC + "&appid=a9f634489329fd91f8011bddf4e0890e&units=Imperial&cnt=8"
  console.log("queryURL", queryURL)
  //Ajax to reach data and provide response
  $.ajax({
          url: queryURL,
          method: "GET"
        }).done(function(response) {
          console.log(response)
          //Array for 24-Hour Forecast at 3 hour Intervals
          responseArray = response.list
          //Log the array to make sure everything is correct
          console.log(responseArray)
          for (var i = 0; i < responseArray.length; i++) {
            //Holds data of interest in variables
            var date = responseArray[i].dt_txt
            var temp = responseArray[i].main.temp
            var weatherMain = responseArray[i].weather["0"].main
            var weatherDesc = responseArray[i].weather["0"].description
            var icon = responseArray[i].weather["0"].icon
            //Logs values for verification
            console.log(date, temp, weatherMain, icon)
            //Add City/Country to table
            $("#weatherLocation").text(weatherCity + ", " + weatherCC)
            //Variables created to hold data and append into table
            var tBody = $("#forecastDisplay")
            var tRow = $("<tr>")
            var weatherTD = $("<td>")
            weatherTD.text(date)
            var tempTD = $("<td>")
            tempTD.text(temp + " F")
            var weatherDescTD = $("<td>")
            weatherDescTD.text(weatherMain + " - " + weatherDesc)
            var weatherTimeTD = $("<td>")
            var weatherTime = $("<img>")
            var imgSrc = "https://openweathermap.org/img/w/" + icon + ".png"
            weatherTime.attr("src", imgSrc)
            //Add to HTML
            weatherTimeTD.append(weatherTime)
            tBody.append(tRow)
            tRow.append(weatherTD)
            tRow.append(tempTD)
            tRow.append(weatherDescTD)
            tRow.append(weatherTimeTD)
          }
      })
})
