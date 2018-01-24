

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

	console.log(name);
	console.log(comment);
	console.log(rating);

  //push elements to firebase
  database.ref().push({
    name: name,
    comment: comment,
    rating: rating,
  });
  //Removed input info
		$('#name').val('');
		$('#comment').val('');

});

//function to retrieve data
function retrieveData(){
  database.ref().on("child_added", function(childSnapshot){
    var sv = childSnapshot.val()
    console.log(sv);
  })
}

database.ref().on('child_added',function render (snap){
					//Testing
					var nameTd = snap.val().name;
					var ratingTd = snap.val().rating;
					var commentTD = snap.val().comment;


					//Data array
					var dataArray = [nameTd, ratingTd, commentTD];
					var newTr = $('<tr>');
					for(var i = 0; i< dataArray.length; i++){
						var newTd = $('<td>');
						newTd.text(dataArray[i]);
						newTd.appendTo(newTr);
					}
					$('.table').prepend(newTr);
        })

        $(function() {

          // Initialize form validation on the registration form.
          // It has the name attribute "registration"
          $("form[name='feedbackForm']").validate({
            // Specify validation rules
            rules: {
              // The key name on the left side is the name attribute
              // of an input field. Validation rules are defined
              // on the right side
              name: "required",
              comment: "required"
            },

            // Specify validation error messages
            messages: {
              name: "Please enter your full name",
              comment: "Please provide your feedback"
              },

            // Make sure the form is submitted to the destination defined
            // in the "action" attribute of the form when valid
            submitHandler: function(form) {
              form.submit();
            }
          });
        });
