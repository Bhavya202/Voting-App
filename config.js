import firebase from 'firebase';

// add SDK Firebase
var firebaseConfig = {
  apiKey: "AIzaSyCoJjMCQ6i0IdK3xtV5tcGUALDFU7bWlF0",
  authDomain: "team-voting-app-29029.firebaseapp.com",
  databaseURL: "https://team-voting-app-29029-default-rtdb.firebaseio.com",
  projectId: "team-voting-app-29029",
  storageBucket: "team-voting-app-29029.appspot.com",
  messagingSenderId: "140019972521",
  appId: "1:140019972521:web:c1bc2bcd57a8ea4f2facb8"
};
// Initialize Firebase
firebase.initializeApp(firebaseConfig);

export default firebase.database();