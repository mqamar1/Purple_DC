

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
	var email = $("#emailinput").val();

	console.log(name);
	console.log(comment);
	console.log(email);

  //push elements to firebase
  database.ref().push({
    name: name,
    comment: comment,
    email: email,
  });
	retrieveData();



});

//function to retrieve data
function retrieveData(){
  database.ref().on("child_added", function(childSnapshot){
    var sv = childSnapshot.val()
    console.log(sv);
    renderRows(sv)
  })
}


//function to render new rows
function renderRows(sv){
  var tBody = $("#userTable")
  var tRow2 = $("<tr>")

  var nameTd = $("<td>").text(sv.name);
  var emailTd = $("<td>").text(sv.email);
  var commentTD = $("<td>").text(sv.comment)


  tRow2.append(nameTd, emailTd, commentTD);
  tBody.append(tRow2);
}
