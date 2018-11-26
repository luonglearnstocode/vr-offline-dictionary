const words = require('./words.json');

const languages = ['fi', 'en', 'de', 'da', 'no', 'sv'];
const counts = {};

languages.forEach((lan) => {
  counts[lan] = words.filter(word => word.language === lan).length;
});

console.log(counts);
