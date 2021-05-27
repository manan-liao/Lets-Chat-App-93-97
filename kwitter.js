function addUser(){
    user_name = document.getElementById("user_name").value;
    localStorage.setItem("user_name",user_name);
    window.location = "kwitter_room.html";
    firebase.database().ref("/").child(user_name).update({
        databasekey : "databasevalue"
    })
}
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