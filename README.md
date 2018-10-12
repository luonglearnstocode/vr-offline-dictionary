```
$ node lookUp.js fi en asdafasdfasdfasdfadfs
Word not found!

$ node lookUp.js fi en ajoaika
{ 'EN-term': 'journey time' }

$ node lookUp.js fi de ajoaika
{ 'DE-term': 'Fahrzeit' }

$ node lookUp.js fi sv ajoaika
{ 'SV-term': 'gångtid' }

$ node lookUp.js fi no ajoaika
{ 'NO-term': 'reisetid' }

$ node lookUp.js fi da ajoaika
{ 'DA-term': 'køretid' }

$ node lookUp.js en fi timings
No translation for that word!

$ node lookUp.js fi en aikataulusto: yleisölle tarkoitettu rautatieaikataulusto
{ 'EN-term': 'timetable', 'EN-usageNote': 'railway' }
```
**translate between FI  EN DE SV NO DA**  
`$ node lookup.js {fromLanguage} {toLanguage} {word to lookup}`
