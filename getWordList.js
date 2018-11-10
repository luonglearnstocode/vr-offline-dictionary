const dict = require('./newInput.json')

let words = []

for (word of dict) {
  if ('fiTerm' in word) {
    words.push({
      word: word.fiTerm,
      language: 'fi'
    })
  }
  if ('enTerm' in word) {
    words.push({
      word: word.enTerm,
      language: 'en'
    })
  }
  if ('deTerm' in word) {
    words.push({
      word: word.deTerm,
      language: 'de'
    })
  }
  if ('daTerm' in word) {
    words.push({
      word: word.daTerm,
      language: 'da'
    })
  }
  if ('noTerm' in word) {
    words.push({
      word: word.noTerm,
      language: 'no'
    })
  }
  if ('svTerm' in word) {
    words.push({
      word: word.svTerm,
      language: 'sv'
    })
  }
}


var fs = require("fs");
fs.writeFile("./words.json", JSON.stringify(words, null, 4), (err) => {
  if (err) {
      console.error(err);
      return;
  };
  console.log("File has been created");
});