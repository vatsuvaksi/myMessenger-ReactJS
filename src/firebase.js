import firebase from "firebase";

const firebaseApp = firebase.initializeApp({
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
 
    apiKey: "AIzaSyAt6blSW9NtNTFvT5zZyMUt7SFMKn8kFvM",
    authDomain: "mymessenger-27abe.firebaseapp.com",
    databaseURL: "https://mymessenger-27abe.firebaseio.com",
    projectId: "mymessenger-27abe",
    storageBucket: "mymessenger-27abe.appspot.com",
    messagingSenderId: "443993565607",
    appId: "1:443993565607:web:07e0bfd6b3fbbe54f3ae82",
    measurementId: "G-40NHD4S86G"
  }
)
const db= firebase.firestore();
export default db;