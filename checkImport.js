const dict = require('./input.json')
var firebase = require("firebase");

console.log('number of words:', dict.length)

var config = {
  apiKey: "AIzaSyAvDep8RmCoR8xabSQRXY6_LGa3BHBiPfU",
  authDomain: "vr-dict.firebaseapp.com",
  databaseURL: "https://vr-dict.firebaseio.com",
  projectId: "vr-dict",
  storageBucket: "vr-dict.appspot.com",
  messagingSenderId: "971156516516"
};
firebase.initializeApp(config);
const db = firebase.firestore()
db.settings({ timestampsInSnapshots: true });

db.collection('words').get()
  .then((snapshot) => {
    console.log('number of documents from firestore: ', snapshot.size)
  })
  .catch((err) => {
    console.log('Error getting documents', err);
  });
