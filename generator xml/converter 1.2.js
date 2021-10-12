var convert = require('xml-js')
const fs = require('fs')
const joinPath = require('path').join
var base64 = require('base-64')
var utf8 = require('utf8')
const generate = require('./base64 to binary')
const objectPath = require('object-path')

function encode(text) {
  console.log(text)
  var bytes = utf8.encode(text)
  var encoded = base64.encode(bytes)
  return encoded
}

function decode(encodedData) {
  // var decoded = base64.decode(str)
  // var decoded_utf8 = utf8.decode(decoded)
  // console.log(base64.decode(encodedData))
  return base64.decode(encodedData)
}

var xml = fs.readFileSync(joinPath(__dirname, 'subitle 1.6.xml'), 'utf8')
var result1 = convert.xml2js(xml, { compact: true, spaces: 4 })

const clipItems = result1.xmeml.sequence.media.video.track[0].clipitem

const time = [
  { start: 0, end: 54, text: 'ááá', translate: 'ola' },
  { start: 80, end: 90, text: 'hi', translate: 'oi' },
  { start: 120, end: 150, text: 'veahicol', translate: 'velocipe' },
]

const newClips = clipItems.slice(0, time.length).map((v, i) => {
  const obj = { ...v }
  objectPath.set(obj, 'start._text', time[i].start)
  objectPath.set(obj, 'end._text', time[i].end)
  objectPath.set(obj, 'filter.0.effect.name._text', time[i].text)
  objectPath.set(
    obj,
    'filter.0.effect.parameter.0.value._text',
    generate(time[i].text, 'en')
  )
  objectPath.set(obj, 'filter.1.effect.name._text', time[i].translate)
  objectPath.set(
    obj,
    'filter.1.effect.parameter.0.value._text',
    generate(time[i].translate, 'pt')
  )
  return obj
})

result1.xmeml.sequence.media.video.track[0].clipitem = newClips

// console.log(
//   result1.xmeml.sequence.media.video.track[0].clipitem[0].filter[0].effect
//     .parameter[0].value._text
// )
// var result2 = convert.xml2json(xml, { compact: false, spaces: 4 })
// console.log(result1)

const newXml = convert.js2xml(result1, { compact: true, spaces: 4 })

fs.writeFileSync(joinPath(__dirname, '1.8 re-renderizado.xml'), newXml)
console.log('pronto')
