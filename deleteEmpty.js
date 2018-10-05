const dict = require('./dict.json')

newDict = dict.filter(row => Object.getOwnPropertyNames(row).length !== 0)
// console.log(newDict)
const fs = require('fs')
fs.writeFile ("input.json", JSON.stringify(newDict), function(err) {
  if (err) throw err
  console.log('complete')
  }
)