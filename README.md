
## **Purple Entertainment**

Purple Entertainment is for the spontaneous traveler to Washington, DC. Whether they're on a business trip, or a leisure family vacation, they'll be able to use this application to find things to do around the city. From restaurants, to museums, to hotels - Purple Entertainment has you covered! For [centuries](https://www.livescience.com/33324-purple-royal-color.html), the color purple has been associated with royalty, power and wealth. Our aim is to convey a sophisticated brand that caters to the a traveler who enjoys the finer things.

## **Motivation**

This project showcases some of the skills that we've gained at George Washington University's Full Stack Web Development Boot Camp. We wanted to create something that was not only dynamic, but also useful. Further, this project supports local businesses, and can even be used by DC residents who want to explore all that this city has to offer.

## **Code Style**

Object-Oriented Programming (OOP).

## **Screenshots**

![Home page](images/index-purple.jpg?raw=true "Home Page")

![Weather Page](images/weather-purple.jpg?raw=true "Weather Page")

## **Technologies and frameworks used**

**Built with**

- [Bootstrap](https://getbootstrap.com/) and Custom CSS
- Vanilla [JavaScript](https://www.javascript.com/)
- [jQuery](https://jquery.com/)
- [Firebase](https://firebase.google.com/)
- [Foursquare](https://foursquare.com/) API
- [Google Maps](https://maps.google.com/) API
- [Open Weather Map](https://openweathermap.org/) API

## **Features**

- Dynamic Google Maps updates to page, and allows user to stay on the web app, and switch to other features for other information.
- Foursquare integrations offers information about the venue's popularity.
- Users can also check weather forecast to plan their day to day activities while in the city. For example, if it's a rainy day, travelers can plan to spend time in nearby museums instead of visiting the Reflecting Pool.
- Responsive web application design allows different types of devices to access information.

## **Code Example**

When a Google Marker is clicked, the place’s details are added to a modul:

    google.maps.event.addListener(marker, 'click', function() {
        var placeDetailsTitle = (place.name)
        var placeDetailsModal = ('<div><img src="' + place.photos["0"].getUrl({
            'maxWidth': 200,
            'maxHeight': 200
            }) + '">' + '<br>' + place.formatted_address + '<br>' + 'Average User Rating: ' + place.rating + '/5' + '<br>' + 'Price Level: ' + place.price_level + '/5' + '<br>' + 'Phone Number: ' + place.international_phone_number + '<br>' + 'Official site: ' + '<a href="' + place.website + '">' + place.website + '</a>' + '<br>' + 'User Feedback: ' + place.reviews["0"].author_name + '<br>' + 'Comments: ' + place.reviews["0"].text + '<br>' + '<br>' + 'Checkins: ' + popularity + '</div>');

    $("#markerName").text(placeDetailsTitle)
    $("#markerCheckins").append(placeDetailsModal)

    jQuery.noConflict();
    $("#markerModal").modal()

## **Installation**

**Prerequisites:**

- Fork and/or clone repository to your local environment.

**Requirements:**

- Web Browser
- Web Developer Tools
- Text Editor

## **API Reference**

_Open Weather API:_

[https://openweathermap.org/forecast5](https://openweathermap.org/forecast5)

_Google Maps API:_

[https://developers.google.com/maps/documentation/javascript/3.exp/reference](https://developers.google.com/maps/documentation/javascript/3.exp/reference)

_FourSquare API:_

[https://developer.foursquare.com/docs/api/getting-started](https://developer.foursquare.com/docs/api/getting-started)

## **Tests**

Most tests for this application are rune with a simple console.log()method. If the correct/expected information returns, then the team knows that the program is functioning.

    var queryURL3 = "https://api.foursquare.com/v2/venues/" + idArray[i] + "?v=" + date + "&clientSecret=" + clientSecret + "&client_id=" + clientID;

    $.ajax({
    url: queryURL3,
    method: "GET"
    }).done(function(checkins) {

    **console.log(checkins);**

    popularity = checkins.response.venue.stats.checkinsCount
    $("#markerCheckins1").text(popularity)

    //document.getElementById("#markerCheckins").innerHTML = popularity;
    **console.log("checkins:", popularity);**

    });

## **How to use?**

The Website is divided into three main sections:

1.    __Google Maps API__

- Dynamic search box to navigate desired locations and places of interest &amp; D.C. Recommended Locations for Restaurants, Museums, Hotels, and, Bars &amp; Clubs included in the navigation bar.
- Each will provide markers based on the current viewport.
- The markers that are generated can be clicked to provide a modul with a plethora of information about the desired location.

2.    __Weather__

- A table is generated with the following 24-hours @ 3-hour intervals
- To generate the table two criteria are needed:
- The city name should be typed as accurate as possible
- The country should entered as 2-or-3 digit Country Code
- Example: Baltimore, US
- The table will display information for the Date &amp; Time(in Military Time), Weather Temperature at that time of day, and the Weather description for that time of day
- Example: 2018-01-24 03:00:00      44.85 F     Clear - clear sky

3.    __Site Feedback__

- A form that provides the user with a outlet to display their experience with the website's information
- Name, Rating, Comments
- The information is displayed using firebase, in table format and the information is used by the Website to provide a better user experience and to help guide future development

## **Credits**

This application was built by [Athina](https://github.com/Coolaide), [Dan](https://github.com/DanYee92), [Mehvish](https://github.com/mqamar1), [Sean](https://github.com/andersensm), and [Taqwa](https://github.com/TaqwaR) -- Full Stack Web Development Students at George Washington University's Coding Boot Camp.

## **License**

Attribution-NonCommercial 4.0

International (CC BY-NC 4.0)

![CC Logo](images/CCby-nc.png?raw=true "Weather Page")

Purple Entertainment (CC) Athina, Dan, Mehvish, Sean, and Taqwa.

