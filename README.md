iso639-js
=========

ISO639 language codes processed and ready to use in javaScript applications

Based on [http://www-01.sil.org/iso639-3](http://www-01.sil.org/iso639-3), Wikipedia and other sources


Main files:
-----------

- **iso639.js** — Full file with native and all locales names included
- **iso639_enUS.js** — English locale and native names only
- **iso639_ruRU.js** — Russian locale and native names only

The main file is quite large, and will become larger with every added locale, so I suggest to use only required locale(s) in production apps.


Other generated files:
----------------------    

- *alpha2to3mappings.json* — Mapping from 2-letter codes to 3-letter codes
- *alpha3to2mappings.json* — Mapping from 3-letter codes to 2-letter codes
- *alpha3toNativeNameMapping.json* — Mapping from 3-letter codes to native and english language names
- *iso639-3_constructed.json* — List of constructed languages
- *iso639-3_extinct.json* — List of extinct languages
- *iso639-3_historical* — List of historical languages (not spoken but used)
- *iso639-3_living* — List of currently living languages


Reference files:
----------------
|Filename|Last modified date|Description|
|--------|------------------|-----------|
|[iso639-3.json](reference/iso639-3.json)|2015-01-12|ISO639-3 to ISO639-2 and ISO639-1 mappings|
|[iso639-3_name-index.json](reference/iso639-3_name-index.json)|2015-05-05|ISO639-3 Name Index|
|[iso639-3_macrolanguages.json](reference/iso639-3_macrolanguages.json)|2015-01-12|ISO639-3 Macrolanguages|
|[iso639-3_retirements.json](reference/iso639-3_retirements.json)|2015-01-12|ISO639-3 Retirements|

### Key to reference files field names

- **`part2B`** — Equivalent 639-2 identifier of the bibliographic applications code set
- **`part2T`** — Equivalent 639-2 identifier of the terminology applications code
- **`part1`** — Equivalent 639-1 identifier, if there is one    
- **`scope`** — Language scope, on of `individual`, `macrolanguage`, `special`
- **`type`** — Language type, on of `ancient`, `constructed`, `extinct`, `historical`, `living`, `special`
- **`referenceName`** — English reference language name (not necesserily a standart)
- **`comment`** — Comment relating to one or more of the columns
- **`name`** — One of the names associated with this identifier
- **`invertedName`** — The inverted form of this name form
- **`status`** — Macrolanguage status, `active` or `retired`
- **`retirementReason`** — Reason for language code retirement, one of `change`, `duplicate`, `nonExistent`, `split`, `merge`
- **`changedTo`** — to which all instances of retired code should be changed
- **`retirementRemedy`** — The instructions for updating an instance of the retired (split) identifier
- **`effectiveDate`** — The date the retirement became effective
