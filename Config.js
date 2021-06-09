import firebase from "firebase"
require("@firebase/firestore")
var firebaseConfig = {
  apiKey: "AIzaSyCSYNy-n_6ZWGluKIX8HOuABqVpv9l1xlM",
  authDomain: "knishkbooksanta.firebaseapp.com",
  projectId: "knishkbooksanta",
  storageBucket: "knishkbooksanta.appspot.com",
  messagingSenderId: "568301731004",
  appId: "1:568301731004:web:db713a09cef4f88d3c64b9"
};
// Initialize Firebase
firebase.initializeApp(firebaseConfig);
export default firebase.firestore()