# felid-xml

[![npm version](https://img.shields.io/npm/v/felid-xml.svg)](https://www.npmjs.com/package/felid-xml)
![Node.js CI](https://github.com/felidjs/felid-xml/workflows/Node.js%20CI/badge.svg)
[![JavaScript Style Guide](https://img.shields.io/badge/code_style-standard-brightgreen.svg)](https://standardjs.com)
[![codecov](https://codecov.io/gh/felidjs/felid-xml/branch/master/graph/badge.svg)](https://codecov.io/gh/felidjs/felid-xml)

A [Felid](https://github.com/felidjs/felid) plugin for parsing [XML](https://www.w3.org/XML/) request body.

## Install

```bash
npm install felid-xml
```

or

```bash
yarn add felid-xml
```

## Usage

```javascript
const Felid = require('felid')
const xml = require('felid-xml')

const app = new Felid()
app.plugin(xml, options)
```

## Options

- **types** *String|Array*: The content-type using this parser. Default is `['text/xml', 'application/xml']`.

For more options, please check [fast-xml-parser](https://github.com/NaturalIntelligence/fast-xml-parser).

## License

[MIT](./LICENSE)
