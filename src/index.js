const xml = require('fast-xml-parser')

function xmlParser (options) {
  return function parseXML (req) {
    return new Promise((resolve, reject) => {
      let body = ''
      req.on('data', chunk => {
        body += chunk
      })
      req.on('end', () => {
        const result = xml.validate(body)
        if (result.err) {
          // Adapt to Felid's default error hander.
          result.err.message = result.err.msg
          reject(result.err)
          return
        }
        resolve(xml.parse(body, options))
      })
      req.on('error', err => {
        reject(err)
      })
    })
  }
}

function plugin (felid, options) {
  const opt = {
    types: ['text/xml', 'application/xml'],
    ...options
  }

  felid.addParser(opt.types, xmlParser(opt))
}

module.exports = plugin
