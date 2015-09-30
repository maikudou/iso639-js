var fs = require('fs');

var dataString = 'this.iso639=';
var data = {};


var alpha2to3mapping = fs.readFileSync('alpha2to3mapping.json', 'utf8');
var alpha2to3mappingParsed = JSON.parse(alpha2to3mapping);

data.alpha2to3mapping = alpha2to3mappingParsed


var alpha3to2mapping = fs.readFileSync('alpha3to2mapping.json', 'utf8');
var alpha3to2mappingParsed = JSON.parse(alpha3to2mapping);

data.alpha3to2mapping = alpha3to2mappingParsed


var alpha3toNativeNameMapping = fs.readFileSync('alpha3toNativeNameMapping.json', 'utf8');
var alpha3toNativeNameMappingParsed = JSON.parse(alpha3toNativeNameMapping);

data.alpha3toNativeNameMapping = alpha3toNativeNameMappingParsed


dataString += JSON.stringify(data);
dataString += ';'

fs.writeFileSync('iso639.js', dataString, 'utf8')
