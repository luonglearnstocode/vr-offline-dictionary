![Data flow diagram](https://trello-attachments.s3.amazonaws.com/5b98c1c09508907c56856286/5c10a4be1b8810413132f6c2/4b951cb9f6c6a7ddde03d701456d5744/dataFlow.jpg)
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

$ node findDuplicates.js
1760 => 1760 duplicate words

$ node removeDuplicate.js
1902 => only 1902 words left

$ node checkImport.js
number of words: 1902
number of documents from firestore:  1902

$ node lookUpOnline.js fi en ajoaika
fiTerm ajoaika
8MtQLoRhqowcftwXSbDo => { RailLexicID: 'ID029640',
  daTerm: 'køretid',
  deTerm: 'Fahrzeit',
  enTerm: 'journey time',
  fiTerm: 'ajoaika',
  noTerm: 'reisetid',
  svTerm: 'gångtid' }

```
**translate between FI  EN DE SV NO DA**  
`$ node lookup.js {fromLanguage} {toLanguage} {word to lookup}`  
`$ node lookUpOnline.js {fromLanguage} {toLanguage} {word to lookup}`
