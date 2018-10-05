const dict = require('./input.json')

const from = process.argv[2]
const to =  process.argv[3]
const word = process.argv.slice(4, process.argv.length).join(' ')

const argToTerm = (language, addTo) => {
  return language.toUpperCase() + '-' + addTo
}

const input = argToTerm(from, 'term')
const output = [argToTerm(to, 'term'), argToTerm(to, 'usageNote')]

// find the object contain the word to be translated
const result = dict.find(row => row[input] === word)
if (!result) return console.log('word not found!')

const translatedWord = {}
if (result[output[0]]) translatedWord[output[0]] = result[output[0]]
if (result[output[1]]) translatedWord[output[1]] = result[output[1]]

if (Object.getOwnPropertyNames(translatedWord).length !== 0) console.log(translatedWord)
else console.log('No translation for that word!')
  