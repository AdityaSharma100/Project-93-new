//ADD YOUR FIREBASE LINKS HERE
// Your web app's Firebase configuration
var firebaseConfig = {
    apiKey: "AIzaSyD4d2FJcYdtKiV_s38QWCOY4gNw49qPYWI",
    authDomain: "project---93.firebaseapp.com",
    databaseURL: "https://project---93-default-rtdb.firebaseio.com",
    projectId: "project---93",
    storageBucket: "project---93.appspot.com",
    messagingSenderId: "1086813906313",
    appId: "1:1086813906313:web:bec2b5d4c0d3231897ad58"
  };
  
  // Initialize Firebase
  firebase.initializeApp(firebaseConfig);

  function getData() {firebase.database().ref("/").on('value', function(snapshot) {document.getElementById("output").innerHTML = "";snapshot.forEach(function(childSnapshot) {childKey  = childSnapshot.key;
    Room_names = childKey;
   //Start code

   //End code
   });});}
getData();
