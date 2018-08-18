
var firebase = require('firebase');

  // Initialize Firebase
  var config = {
    apiKey: "AIzaSyBif5dTJDZz_UKy9MCHMJm6A51nzqTcV90",
    authDomain: "alb-pic.firebaseapp.com",
    databaseURL: "https://alb-pic.firebaseio.com",
    projectId: "alb-pic",
    storageBucket: "alb-pic.appspot.com",
    messagingSenderId: "192700653518"
  };
  firebase.initializeApp(config);

  module.exports = firebase ;
