
var admin = require("firebase-admin");

var serviceAccount = require("../alb-pic-firebase-adminsdk-pn7as-2230e8682e.json");

admin.initializeApp({
  credential: admin.credential.cert(serviceAccount),
  databaseURL: "https://alb-pic.firebaseio.com"
});


var db = admin.database();

module.exports = db;