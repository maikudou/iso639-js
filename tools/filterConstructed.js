var fs = require('fs');

var allCodes = fs.readFileSync('reference/iso639-3.json', 'utf8');
var allCodeParsed = JSON.parse(allCodes);
var mapping = {};

for(languageCode in allCodeParsed){
    language = allCodeParsed[languageCode];
    if(language.type == 'constructed'){
        mapping[languageCode]=language;
    }
}

fs.writeFileSync('iso639-3_constructed.json', JSON.stringify(mapping, null, '    '), 'utf8')
