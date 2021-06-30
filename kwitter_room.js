
//ADD YOUR FIREBASE LINKS HERE
var firebaseConfig = {
      apiKey: "AIzaSyBBMa_DCEkcAKpSfJyBTt6ilXQu5p7JD94",
      authDomain: "kwitter-45d64.firebaseapp.com",
      databaseURL: "https://kwitter-45d64-default-rtdb.firebaseio.com",
      projectId: "kwitter-45d64",
      storageBucket: "kwitter-45d64.appspot.com",
      messagingSenderId: "107003278167",
      appId: "1:107003278167:web:932e3565540f9092bd4412"
    };
    // Initialize Firebase
    firebase.initializeApp(firebaseConfig);

user_name = localStorage.getItem("user_name");

document.getElementById("user_name").innerHTML = "Welcome " + user_name + "!";
    
function addRoom(){
      room_name = document.getElementById("room_name").value;
      firebase.database().ref("/").child(room_name).update({
            key:"add room name"
      });
      localStorage.setItem("room_name",room_name);
      
      window.location = "kwitter_page.html";
}

function getData() {firebase.database().ref("/").on('value', function(snapshot) {document.getElementById("output").innerHTML = "";snapshot.forEach(function(childSnapshot) {childKey  = childSnapshot.key;
       Room_names = childKey;
      //Start code
      console.log("Room_Name "+Room_names);
      row = "<div class='room_name' id='+Room_names+' onclick='redirecttoroom(this.id)' >#" + Room_names + "</div><hr>";
      document.getElementById("output").innerHTML += row; 
      //End code
      });});}
getData();

function redirectroom(name){
      console.log(name);
      localStorage.setItem("room_name",name)
      window.location = "kwitter_page.html";
}
function logout(){
      localStorage.removeItem("user_name");
      localStorage.removeItem("room_name");
      window.location="index.html";
}