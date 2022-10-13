var firebaseConfig = {
	apiKey: "AIzaSyCyXCQAgXP5ejAmSKaKWXi9B2SsTgHW0Es",
	authDomain: "kwitter-269e2.firebaseapp.com",
	databaseURL: "https://kwitter-269e2-default-rtdb.firebaseio.com",
	projectId: "kwitter-269e2",
	storageBucket: "kwitter-269e2.appspot.com",
	messagingSenderId: "819031888647",
	appId: "1:819031888647:web:0e3f91ab653bab97a52ba2",
  };
  
  // Initialize Firebase
  firebase.initializeApp(firebaseConfig);
  
 user_name = localStorage.getItem("user_name");

 document.getElementById("user_name").innerHTML = "Welcome " + user_name + "!";
 
 function addUser() {
  user_name = document.getElementById("user_name").value;

localStorage.setItem("user_name", user_name);

window.location = "index.html";

}