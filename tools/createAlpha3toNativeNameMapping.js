var fs = require('fs');

var allCodes = fs.readFileSync('reference/iso639-3.json', 'utf8');
var allCodeParsed = JSON.parse(allCodes);

var allNativeNameCodes = fs.readFileSync('reference/iso639-3_native-name_partial.json', 'utf8');
var allNativeNameCodesParsed = JSON.parse(allNativeNameCodes);

var mapping = {};

for(languageCode in allCodeParsed){
    if(allNativeNameCodesParsed[languageCode]){
        mapping[languageCode] = {};
        mapping[languageCode].nativeName = allNativeNameCodesParsed[languageCode].nativeName;
    }
}

fs.writeFileSync('alpha3toNativeNameMapping.json', JSON.stringify(mapping, null, '    '), 'utf8');
