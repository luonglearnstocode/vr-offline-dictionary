const dict = require('./newInput.json')

let words = []

for (word of dict) {
  if ('fiTerm' in word) {
    words.push({
      word: word.fiTerm.trim(), // remove leading and trailing white spaces 
      language: 'fi'
    })
  }
  if ('enTerm' in word) {
    words.push({
      word: word.enTerm.trim(),
      language: 'en'
    })
  }
  if ('deTerm' in word) {
    words.push({
      word: word.deTerm.trim(),
      language: 'de'
    })
  }
  if ('daTerm' in word) {
    words.push({
      word: word.daTerm.trim(),
      language: 'da'
    })
  }
  if ('noTerm' in word) {
    words.push({
      word: word.noTerm.trim(),
      language: 'no'
    })
  }
  if ('svTerm' in word) {
    words.push({
      word: word.svTerm.trim(),
      language: 'sv'
    })
  }
}

// sort words in ascending order of word
words.sort((a, b) => a.word.toLowerCase() < b.word.toLowerCase() ? -1 : 1) 

var fs = require("fs");
fs.writeFile("./words.json", JSON.stringify(words, null, 4), (err) => {
  if (err) {
      console.error(err);
      return;
  };
  console.log("File has been created");
});