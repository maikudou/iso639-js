var fs = require('fs');

var dataString = '(function (root, iso639) {';
dataString += 'if (typeof define === "function" && define.amd) {'
dataString += '    define(["iso639"], iso639);'
dataString += '} else if (typeof module === "object" && module.exports) {'
dataString += '    module.exports = iso639;'
dataString += '} else {'
dataString += '    root.iso639 = iso639;'
dataString += '}'
dataString += '})(this, ';

var data = {};

var alpha2to3mapping = fs.readFileSync('alpha2to3mapping.json', 'utf8');
var alpha2to3mappingParsed = JSON.parse(alpha2to3mapping);

data.alpha2to3mapping = alpha2to3mappingParsed


var alpha3to2mapping = fs.readFileSync('alpha3to2mapping.json', 'utf8');
var alpha3to2mappingParsed = JSON.parse(alpha3to2mapping);

data.alpha3to2mapping = alpha3to2mappingParsed


var alpha3toNativeNameMapping = fs.readFileSync('alpha3toNativeNameMapping.json', 'utf8');
var alpha3toNativeNameMappingParsed = JSON.parse(alpha3toNativeNameMapping);

data.names = {}

for(languageCode in alpha3toNativeNameMappingParsed){
    var language = alpha3toNativeNameMappingParsed[languageCode];
    if(data.names[languageCode] == undefined){
        data.names[languageCode] = {};
    }
    data.names[languageCode].native = language.nativeName;
}

var localeFilenames = fs.readdirSync('locales');
var localeNames = [];

for(index in localeFilenames){
    var localeFilename = localeFilenames[index];
    var localeName = localeFilename.substr(0, localeFilename.search('.json'));
    var locale = fs.readFileSync('locales/'+localeFilename, 'utf8');
    localeNames.push(localeName);
    var localeParsed = JSON.parse(locale);
    for(languageCode in localeParsed){
        var language = localeParsed[languageCode];
        if(data.names[languageCode] == undefined){
            data.names[languageCode] = {};
        }
        data.names[languageCode][localeName] = language.localeName;
    }
}

dataString += JSON.stringify(data);
dataString += ');'

fs.writeFileSync('iso639.js', dataString, 'utf8')
