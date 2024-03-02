// const admin = require("firebase-admin");
const firebase = require("firebase-admin");

const serviceAccount = require("../config/firebaseServiceAccountKey.json");


const Admin = firebase.initializeApp({
  credential: firebase.credential.cert(serviceAccount),
});

module.exports = Admin;
