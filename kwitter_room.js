
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
    
function getData() {firebase.database().ref("/").on('value', function(snapshot) {document.getElementById("output").innerHTML = "";snapshot.forEach(function(childSnapshot) {childKey  = childSnapshot.key;
       Room_names = childKey;
      //Start code

      //End code
      });});}
getData();
