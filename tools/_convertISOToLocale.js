var fs = require('fs');

var ISO = fs.readFileSync('reference/iso639-3.json', 'utf8');
var ISOParsed = JSON.parse(ISO);
var mapping = {};

for(languageCode in ISOParsed){
    language = ISOParsed[languageCode];
    mapping[languageCode] = {
        localeName: language.referenceName
    }
}

fs.writeFileSync('locales/enUS.json', JSON.stringify(mapping, null, '    '), 'utf8');