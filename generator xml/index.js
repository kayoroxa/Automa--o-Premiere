const parser = require('fast-xml-parser')
const fs = require('fs')
const joinPath = require('path').join
const update = require('immutability-helper')

const xmlData = fs.readFileSync(joinPath(__dirname, 'subtitle.xml'), 'utf-8')

const jsonObj = parser.parse(xmlData)
const clipItemTemplate = jsonObj.xmeml.sequence.media.video.track[0].clipitem[0]

function Foo() {
  this.xmeml.sequence.media.video.track[0].clipitem[0].filter.effect.name =
    'olá'
}

function createClipItem(sentenceEn, sentencePt, timeStart, timeEnd, index) {
  return _.assign({ a: 1 }, new Foo())
}

const myClips = [
  createClipItem('oi', 'olá', 0, 200, 1000),
  createClipItem('bença', 'cadeira', 650, 2000, 10000),
  // createClipItem('apartamento', 'hospital', 3025, 4000, 2),
]
// console.log(myClip)
const newPa = {
  ...jsonObj,
}
newPa.xmeml.sequence.media.video.track[0].clipitem = myClips
console.log(newPa)

var Parser = require('fast-xml-parser').j2xParser
//default options need not to set
var defaultOptions = {
  attributeNamePrefix: '@_',
  attrNodeName: '@', //default is false
  textNodeName: '#text',
  ignoreAttributes: true,
  cdataTagName: '__cdata', //default is false
  cdataPositionChar: '\\c',
  format: false,
  indentBy: '  ',
  supressEmptyNode: false,
  tagValueProcessor: a => he.encode(a, { useNamedReferences: true }), // default is a=>a
  attrValueProcessor: a =>
    he.encode(a, { isAttributeValue: isAttribute, useNamedReferences: true }), // default is a=>a
}
var parserStr = new Parser()
var xml = parserStr.parse(newPa)
fs.writeFileSync(joinPath(__dirname, 'subtitle-output.xml'), xml)
