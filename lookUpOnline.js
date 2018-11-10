//
// This file is used to query the word from firestore
//

// args to query
const from = process.argv[2]
const to =  process.argv[3]
const word = process.argv.slice(4, process.argv.length).join(' ')

const argToTerm = (language, addTo) => {
  return language + addTo
}

const input = argToTerm(from, 'Term')
const output = [argToTerm(to, 'Term'), argToTerm(to, 'UsageNote')]

console.log(input, word)

// connect to firestore
var firebase = require("firebase");

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

// query from firestore
db.collection('words').where(input, '==', word).get()
  .then(snapshot => {
    snapshot.forEach(doc => {
      console.log(doc.id, '=>', doc.data());
    });
  })
  .catch(err => {
    console.log('Error getting documents', err);
  });

  