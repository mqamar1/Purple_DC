
$("#weatherSubmit").on("click", function(){

  var weatherCity = $("#weatherCity").val()
  var weatherCC = $("#weatherCC").val()

  var queryURL = "https://api.openweathermap.org/data/2.5/forecast?q=" + weatherCity + "," + weatherCC + "&appid=a9f634489329fd91f8011bddf4e0890e&units=Imperial&cnt=40"
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

            var temp = responseArray[i].main.temp
            var weatherMain = responseArray[i].weather["0"].main
            var weatherDesc = responseArray[i].weather["0"].description
            var icon = responseArray[i].weather["0"].icon

            console.log(date, temp, weatherMain, icon)

            //create containers tmrw
            var weatherDiv = $("<div>")
            weatherDiv.addClass('card text-white bg-primary mb-3 margin col-md-4')
            var weatherLocationDate = $("<div>")
            weatherLocationDate.addClass('card-header')
            weatherLocationDate.text(weatherCity + ", " + weatherCC + " : " + date)
            var weatherBody = $("<div>")
            weatherBody.addClass('card-body')

            var tempDiv = $("<div class='bg-secondary'>")
            var tempDisplay = tempDiv.text(temp)
            var weatherTime = $("<img>")
            var imgSrc = "https://openweathermap.org/img/w/" + icon + ".png"
            weatherTime.attr("src", imgSrc)
            var weatherDisplay = weatherTime.text(weatherMain + " - " + weatherDesc)


              $("#weatherDisplay").append(weatherDiv)
              $(weatherDiv).append(weatherLocationDate)
              $(weatherDiv).append(weatherBody)
              $(weatherBody).append(tempDiv)
              $(weatherBody).append(weatherTime)


              //--------Test------//



          }

      })

})
