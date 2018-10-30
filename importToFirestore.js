var firebase = require("firebase");
const dict = require('./newInput.json')

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

dict.forEach(word => {
  db.collection('words').add(word)
  .then(function(docRef) {
    console.log("Document written with ID: ", docRef.id);
  })
  .catch(function(error) {
    console.error("Error adding document: ", error);
  });
});


