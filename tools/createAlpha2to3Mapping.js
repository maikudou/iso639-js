var fs = require('fs');

var allCodes = fs.readFileSync('reference/iso639-3.json', 'utf8');
var allCodeParsed = JSON.parse(allCodes);
var mapping = {};

for(languageCode in allCodeParsed){
    language = allCodeParsed[languageCode];
    if(language.part1){
        mapping[language.part1]=languageCode;
    }
}

fs.writeFileSync('alpha2to3mapping.json', JSON.stringify(mapping, null, '    '), 'utf8')
