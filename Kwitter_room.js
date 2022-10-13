var firebaseConfig = {
    apiKey: "AIzaSyCyXCQAgXP5ejAmSKaKWXi9B2SsTgHW0Es",
    authDomain: "kwitter-269e2.firebaseapp.com",
    databaseURL: "https://kwitter-269e2-default-rtdb.firebaseio.com",
    projectId: "kwitter-269e2",
    storageBucket: "kwitter-269e2.appspot.com",
    messagingSenderId: "819031888647",
    appId: "1:819031888647:web:0e3f91ab653bab97a52ba2"
  };

const app = initializeApp(firebaseConfig);

user_name = localStorage.getItem("user_name");
document.getElementById("user_name").innerHTML = "Welcome" + user_name + "!";

function addRoom()
{
room_name= document.getElementById("room_name").value;

firebase.database().ref("/").child(room_name).update({});

localStorage.setItem("room_name", room_name)
window.location = "kwitter_page.html";
}

function getData() {firebase.database().ref("/").on('value', function(snapshot) {document.getElementById("output").innerHTML = "";snapshot.forEach(function(childSnapshot) {childKey  = childSnapshot.key;
       Room_names = childKey;
   
console.log("room name -" + Room_names);
row = "<div class= 'room_name id=" +Room_names+" onclick='redirectToRoomName(this.id)'>#"+Room_names+" </div><hr>";
document.getElementById("output").innerHTML += row;
      });});}
getData();
function redirectToRoomName(name)
{
      console.log(name);
      localStorage.setItem("room_name", name);
window.location = "kwitter_page.html";
      
}
function logout()
{
      localStorage.removeItem("user_name");
      localStorage.removeItem("room_name");
window.location = "kwitter.html";
}
