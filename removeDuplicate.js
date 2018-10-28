const dict = require('./input.json')

// https://stackoverflow.com/questions/2218999/remove-duplicates-from-an-array-of-objects-in-javascript
newDict = dict.filter((thing, index, self) =>
  index === self.findIndex((t) => (
    t.RailLexicID === thing.RailLexicID 
)))

console.log(newDict.length)

var fs = require("fs");
fs.writeFile("./newInput.json", JSON.stringify(newDict, null, 4), (err) => {
  if (err) {
      console.error(err);
      return;
  };
  console.log("File has been created");
});