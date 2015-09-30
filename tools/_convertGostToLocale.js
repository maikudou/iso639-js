var fs = require('fs');

var gost = fs.readFileSync('reference/gost7.75-97.json', 'utf8');
var gostParsed = JSON.parse(gost);

var retirements = fs.readFileSync('reference/iso639-3_retirements.json', 'utf8');
var retirementsParsed = JSON.parse(retirements);

var mapping = {};

for(languageCode in gostParsed){
    language = gostParsed[languageCode];

    if(retirementsParsed[languageCode] && retirementsParsed[languageCode].changedTo){
        languageCode = retirementsParsed[languageCode].changedTo;
        if(gostParsed[languageCode]){
            language = gostParsed[languageCode];
        }
    }
    
    mapping[languageCode] = {
        localeName: language.gostName
    }
}

fs.writeFileSync('locales/ruRu.json', JSON.stringify(mapping, null, '    '), 'utf8');