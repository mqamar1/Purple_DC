$(document).ready(function() {

// Initialize Firebase
var config = {
  apiKey: "AIzaSyCtsDm5GsyKrjmpWmEhK4agCmBuRCLOMQk",
  authDomain: "purple-dc-comments.firebaseapp.com",
  databaseURL: "https://purple-dc-comments.firebaseio.com",
  projectId: "purple-dc-comments",
  storageBucket: "",
  messagingSenderId: "1074994668304"
};
firebase.initializeApp(config);

//Reference database
var database = firebase.database();



$(".pure-button").on("click", function(event){
	event.preventDefault();

	var name = $("#name").val();
	var comment = $("#comment").val();
	var rating = $("#rating_simple1").val();

  validateForm(name, comment, rating)

	console.log(name);
	console.log(comment);
	console.log(rating);

});

//function to retrieve data
function retrieveData(){
  database.ref().on('child_added',function (snapshot){
      var tBody = $("#userTable")
      var tRow = $("<tr>")

      var childSnapShot = snapshot.val()
      //Testing
      var nameTd = $("<td class='tdform'>").text(childSnapShot.name)
      var ratingTd = $("<td class='tdform'>").text(childSnapShot.rating)
      var commentTD = $("<td class='tdform'>").text(childSnapShot.comment)

      tRow.append(nameTd,ratingTd,commentTD)
      tBody.prepend(tRow)

    })
}

function validateForm(name, comment, rating) {
    if (name === "" || comment === "" || rating === "0") {
        $("#submitFeedback").text("Please Answer All Fields")
        jQuery.noConflict();
        $("#feedbackModal").modal()
        return false;
    } else {
        database.ref().push({
          name: name,
          comment: comment,
          rating: rating,
          });
        }
        $('#name').val('');
        $('#comment').val('');
      }

retrieveData()

})
