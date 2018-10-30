const dict = require('./input.json')

// https://stackoverflow.com/questions/2218999/remove-duplicates-from-an-array-of-objects-in-javascript
// in reversed order, so that the latest data will be kept
const newDict = [...dict].reverse().filter((thing, index, self) =>
  index === self.findIndex((t) => (
    t.RailLexicID === thing.RailLexicID 
)))

// sort words in ascending order of RailLexicID
newDict.sort((a, b) => a.RailLexicID < b.RailLexicID ? -1 : 1) 
console.log(newDict.length)

var fs = require("fs");
fs.writeFile("./newInput.json", JSON.stringify(newDict, null, 4), (err) => {
  if (err) {
      console.error(err);
      return;
  };
  console.log("File has been created");
});