const Felid = require('felid')
const injectar = require('injectar')
const xmlParser = require('../src')

test('Should parse text/xml type body correctly', (done) => {
  const instance = new Felid()
  instance.plugin(xmlParser)
  instance.post('/test', (req, res) => {
    res.send(req.body)
  })

  injectar(instance.lookup())
    .post('/test')
    .header('content-type', 'text/xml')
    .body('<a><b>XML</b></a>')
    .end((err, res) => {
      expect(err).toBe(null)
      expect(res.statusCode).toBe(200)
      expect(res.json()).toStrictEqual({ a: { b: 'XML' } })
      done()
    })
})

test('Should parse application/xml type body correctly', (done) => {
  const instance = new Felid()
  instance.plugin(xmlParser)
  instance.post('/test', (req, res) => {
    res.send(req.body)
  })

  injectar(instance.lookup())
    .post('/test')
    .header('content-type', 'application/xml')
    .body('<a><b>XML</b></a>')
    .end((err, res) => {
      expect(err).toBe(null)
      expect(res.statusCode).toBe(200)
      expect(res.json()).toStrictEqual({ a: { b: 'XML' } })
      done()
    })
})

test('Should parse custom content-type body correctly', (done) => {
  const instance = new Felid()
  instance.plugin(xmlParser, {
    types: 'custom'
  })
  instance.post('/test', (req, res) => {
    res.send(req.body)
  })

  injectar(instance.lookup())
    .post('/test')
    .header('content-type', 'custom')
    .body('<a><b>XML</b></a>')
    .end((err, res) => {
      expect(err).toBe(null)
      expect(res.statusCode).toBe(200)
      expect(res.json()).toStrictEqual({ a: { b: 'XML' } })
      done()
    })
})

test('Should handle error correctly', (done) => {
  const instance = new Felid()
  instance.plugin(xmlParser)
  instance.post('/test', (req, res) => {
    res.send(req.body)
  })

  injectar(instance.lookup())
    .post('/test')
    .header('content-type', 'text/xml')
    .body('<invalid </xml>')
    .end((err, res) => {
      expect(err).toBe(null)
      expect(res.statusCode).toBe(500)
      done()
    })
})
