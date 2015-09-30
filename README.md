iso639-js
=========

ISO 639 is a standardized nomenclature used to classify all known languages. Each language is assigned a two-letter (639-1) and three-letter (639-2 and 639-3), lowercase abbreviation, amended in later versions of the nomenclature.

The system is highly useful for linguists and ethnographers to categorize the languages spoken on a regional basis, and to compute analysis in the field of lexicostatistics. ISO 639 has five code lists.

There is prepared codes for use in your JavaScript applications.

Based on [http://www-01.sil.org/iso639-3](http://www-01.sil.org/iso639-3), Wikipedia and other sources


Main files
-----------

- [Full file with native and all locales names included](iso639.js)
- [English locale and native names only](iso639_enUS.js)
- [Russian locale and native names only](iso639_ruRU.js)


Other files
-----------

- *alpha2to3mappings.json* Mapping from 2-letter codes to 3-letter codes
- *alpha3to2mappings.json* Mapping from 3-letter codes to 2-letter codes
- *alpha3toNativeNameMapping.json* Mapping from 3-letter codes to native and english language names
- *iso639-3_constructed.json* List of constructed languages
- *iso639-3_extinct.json* List of extinct languages
- *iso639-3_historical* List of historical languages (not spoken but used)
- *iso639-3_living* List of living languages


Reference files
---------------

Filename | Last modified | Description
---------|---------------|------------
[iso639-3.json](reference/iso639-3.json) | 2015-01-12 | ISO639-3 to ISO639-2 and ISO639-1 mappings


Reference structures
--------------------

## iso639-3

* *part2B* - equivalent 639-2 identifier of the bibliographic applications code set
* *part2T* - equivalent 639-2 identifier of the terminology applications code
* *part1* - equivalent 639-1 identifier, if there is one    
* *scope* - one of `individual`, `macrolanguage`, `special`
* *type* - one of `ancient`, `constructed`, `extinct`, `historical`, `living`, `special`
* *referenceName* - reference language name 
* *comment* - comment relating to one or more of the columns

### reference/iso639-3_name-index.json

*last modified:* 2015-05-05

ISO639-3 Name Index

#### name
One of the names associated with this identifier

#### invertedName
The inverted form of this name form


### reference/iso639-3_macrolanguages.json

*last modified:* 2015-01-12

ISO639-3 Macrolanguages

#### status
`active` or `retired`


### reference/iso639-3_retirements.json

*last modified:* 2015-01-12

ISO639-3 Retirements

#### referenceName
reference name of language

#### retirementReason
`change`, `duplicate`, `nonExistent`, `split`, `merge`

#### changedTo 
to which all instances of this Id should be changed

#### retirementRemedy
The instructions for updating an instance of the retired (split) identifier

#### effectiveDate
The date the retirement became effective

