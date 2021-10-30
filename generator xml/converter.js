var convert = require('xml-js')
const fs = require('fs')
const joinPath = require('path').join
const generate = require('./base64 to binary')
const objectPath = require('object-path')
// console.log(
//   result1.xmeml.sequence.media.video.track[0].clipitem[0].filter[0].effect
//     .parameter[0].value._text
// )
// var result2 = convert.xml2json(xml, { compact: false, spaces: 4 })
// console.log(result1)

const { translate } = require('free-translate')

function createMyXml(srtObj) {
  var xmlBase = fs.readFileSync(joinPath(__dirname, 'notDelete.xml'), 'utf8')
  const result1 = convert.xml2js(xmlBase, { compact: true, spaces: 4 })
  const clipItems = result1.xmeml.sequence.media.video.track[0].clipitem

  const newClips = clipItems.slice(0, srtObj.length).map((v, i) => {
    const obj = { ...v }
    objectPath.set(obj, 'start._text', srtObj[i].startTime)
    objectPath.set(obj, 'end._text', srtObj[i].endTime)
    objectPath.set(obj, 'filter.0.effect.name._text', srtObj[i].text)
    objectPath.set(
      obj,
      'filter.0.effect.parameter.0.value._text',
      generate(srtObj[i].text, 'en')
    )
    objectPath.set(obj, 'filter.1.effect.name._text', srtObj[i].pt)
    objectPath.set(
      obj,
      'filter.1.effect.parameter.0.value._text',
      generate(srtObj[i].pt, 'pt')
    )
    return obj
  })
  result1.xmeml.sequence.media.video.track[0].clipitem = newClips

  return convert.js2xml(result1, { compact: true, spaces: 4 })
}

async function translateSrt(srtObj, notFake = true) {
  const srtObjPromise = srtObj.map(async (v, i) => {
    return {
      ...v,
      pt: notFake ? await translate(v.text, { from: 'en', to: 'pt' }) : 'teste',
    }
  })
  return await Promise.all(srtObjPromise)
}

const getSrtFileInFolder = async folder => {
  const files = await fs.readdirSync(folder)
  const srtFiles = files.filter(v => v.includes('.srt'))
  return srtFiles[0]
}
///////////////////////////////////////////

const getSrtObj = require('./getSrtObj')

// const mySrtFile = fs.readFileSync(
//   joinPath(__dirname, './subtitle.srt'),
//   'utf-8'
// )

async function main() {
  const translationFile = fs.readFileSync(
    joinPath(__dirname, 'translation.txt'),
    'utf-8'
  )
  const translation = translationFile.split('\r\n')
  const pathSrt = await getSrtFileInFolder(joinPath(__dirname, './'))

  const srtObj = await getSrtObj(`./${pathSrt}`, {
    startInZero: true,
    // sec: true,
    frame: true,
    round: true,
  })

  console.log(srtObj.map(v => v.text).join('\n'))

  // return

  console.log(`traduzindo... ${srtObj.length}, ${srtObj.map(v => v.text)}`)
  const srtTranslated = srtObj.map((v, i) => ({ ...v, pt: translation[i] })) //await translateSrt(srtObj)
  console.log('Criando xml...')
  const myXml = createMyXml(srtTranslated)

  await fs.writeFileSync(joinPath(__dirname, 'mySubtitle.xml'), myXml)
  console.log('pronto')
}

main()
