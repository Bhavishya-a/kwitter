
//ADD YOUR FIREBASE LINKS HERE
var firebaseConfig = {
      apiKey: "AIzaSyAF6L0RyDkU60QSfjQwmmY4UYSUSmLV6NQ",
      authDomain: "kwitter-d4532.firebaseapp.com",
      databaseURL: "https://kwitter-d4532-default-rtdb.firebaseio.com",
      projectId: "kwitter-d4532",
      storageBucket: "kwitter-d4532.appspot.com",
      messagingSenderId: "724144984185",
      appId: "1:724144984185:web:408903e8910258d54a84a8",
      measurementId: "G-WMP7Y8E736"
    };
    
    // Initialize Firebase
    firebase.initializeApp(firebaseConfig);
    
user_name = localStorage.getItem("user_name");
document.getElementById("user_name").innerHTML = "welcome"+user_name+"!";
function add_room() {
      room_name  = document.getElementById("room_name").value;
      firebase.database().ref("/").child(room_name).update({
            purpose:"adding room name"
      });
      localStorage.setItem("room_name",room_name);
      window.location = "kwitter_page.html";
}
function getData() {
      firebase.database().ref("/").on('value', function(snapshot) 
{document.getElementById("output").innerHTML = "";
snapshot.forEach(function(childSnapshot) {childKey  = childSnapshot.key;
       Room_names = childKey;
      //Start code
      console.log("room name - "+Room_names);
      row = "<div class='room_name'id = "+ Room_names+"onclick = 'redirectToRoomName(this.id)'>#"+Room_names+"</div><hr>";
      document.getElementById("output").innerHTML += row;
      });});}
      getData();

function redirectToRoomName(name){
      console.log(name);
      localStorage.setItem("room_name",name);
      window.location = "kwitter_page.html";
}
function logout() {
      localStorage.removeItem("user_name");
      localStorage.removeItem("room_name");
      window.location = "index.html";
}