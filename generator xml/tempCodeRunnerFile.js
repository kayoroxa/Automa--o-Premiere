var convert = require('xml-js')
const fs = require('fs')
const joinPath = require('path').join
var base64 = require('base-64')
var utf8 = require('utf8')

function encode(text) {
  var bytes = utf8.encode(text)
  var encoded = base64.encode(bytes)
  return encoded
}

function decode(encodedData) {
  // var decoded = base64.decode(str)
  // var decoded_utf8 = utf8.decode(decoded)
  console.log(base64.decode(encodedData))
  return base64.decode(encodedData)
}

const strEncoded =
  'pAEAAAAAAABEMyIRBAAAAE7///9MAAAASABGAAwACAAAAAAAQAA8AAAAAAAAAAAAOAA3ADAALAAoACQAIAAcAAAAGAAUAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAQAAQASAAAAEwAAACMAAAApAAAAEgAAAAAACBBAAAAAGgAAACyPyxBjsyJQCwcmUBA8fTCjf0xQgAAAAFUAAAAAgAAAAIAAAAAAAoACAAAAAAABAAKAAAAAAAAvgEAAAAMAAAAAAAGAAgABAAGAAAABAAAAA0AAABBbmltYXRpb25UeXBlAAAAUv///wAAAABa////AAAAAAEAAAAEAAAADgAAAEFyZXRoYS1SZWd1bGFyAAABAAAADAAAAAgADAAEAAgACAAAAIAAAAA0AAAAMAAYAAAAFAAQAAAADAAAAAgAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAQAMAAAABgAAAAAAAAAIAAAADAAAAAAAKpCBAAGAAQAAAAAAAoACgAHAAgACQAKAAAAAAAAAAAACgAIAAUABgAHAAoAAAAA8PDwBwAAAA10cmFuczEAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAA'

console.log(encode(decode(strEncoded).replace('trans1', 'babado')))