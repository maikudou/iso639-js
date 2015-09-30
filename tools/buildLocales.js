var fs = require('fs');

var alpha2to3mapping = fs.readFileSync('alpha2to3mapping.json', 'utf8');
var alpha2to3mappingParsed = JSON.parse(alpha2to3mapping);

var alpha3to2mapping = fs.readFileSync('alpha3to2mapping.json', 'utf8');
var alpha3to2mappingParsed = JSON.parse(alpha3to2mapping);

var alpha3toNativeNameMapping = fs.readFileSync('alpha3toNativeNameMapping.json', 'utf8');
var alpha3toNativeNameMappingParsed = JSON.parse(alpha3toNativeNameMapping);

var localeFilenames = fs.readdirSync('locales');

for(index in localeFilenames){
    var dataString = 'this.iso639=';
    var data = {};
    data.alpha2to3mapping = alpha2to3mappingParsed
    data.alpha3to2mapping = alpha3to2mappingParsed

    var localeFilename = localeFilenames[index];
    var localeName = localeFilename.substr(0, localeFilename.search('.json'));
    var locale = fs.readFileSync('locales/'+localeFilename, 'utf8');
    var localeParsed = JSON.parse(locale);
    
    data.names = {};
    
    for(languageCode in localeParsed){
        var language = localeParsed[languageCode];
        data.names[languageCode] = {};
        data.names[languageCode].name = language.localeName;
        if(alpha3toNativeNameMappingParsed[languageCode] && alpha3toNativeNameMappingParsed[languageCode].nativeName){
            data.names[languageCode].nativeName = alpha3toNativeNameMappingParsed[languageCode].nativeName;
        }
    }

    dataString += JSON.stringify(data);
    dataString += ';'

    fs.writeFileSync('iso639_'+localeName+'.js', dataString, 'utf8')

}
