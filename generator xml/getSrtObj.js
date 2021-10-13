const fs = require('fs')
const parser = require('subtitles-parser')
const joinPath = require('path').join

function getSrtMovieInFolder(folder) {
  return fs
    .readdirSync(joinPath(__dirname, folder))
    .filter(file => file.endsWith('.srt') && file.length >= 15)[0]
}

function fixId(srtObjects) {
  return srtObjects.map((v, i) => ({
    ...v,
    id: `${i + 1}`,
  }))
}

function sanitizerSrtObj(srtObj) {
  const replaceTxt = srtObj.map(v => ({
    ...v,
    text: v.text.replace(/\<.*\>|\(.*\)|\[.*\]/g, '').replace(/\n/g, ' '),
  }))
  const removeEmptyTextChildren = replaceTxt.filter(v => v.text.length > 0)
  const indexFixed = fixId(removeEmptyTextChildren)

  return indexFixed
}

function splitSentenceByWord(sentence) {
  const words = sentence.split(' ')
  const numberLimit = 36
  const numberDivided = Math.floor(words.length / 2)
  const hasLengthBig = sentence.length > numberLimit

  if (!hasLengthBig) return [sentence]
  else {
    const first = words.slice(0, numberDivided).join(' ')
    const second = words.slice(numberDivided, words.length).join(' ')
    return [first, second]
  }
}

function srtToSec(srtObj) {
  const retornar = {
    ...srtObj,
    startTime: Math.floor(srtObj.startTime / 1000) - 520,
    endTime: Math.floor(srtObj.endTime / 1000) - 520,
  }
  return retornar
}

// const srtObjTemp = [
//   {
//     id: '99',
//     startTime: 521154,
//     endTime: 523668,
//     text: "Lord knows I've tried.",
//   },
//   {
//     id: '100',
//     startTime: 524657,
//     endTime: 529094,
//     text: "I've exhausted every eviI pIan in my fiIing cabinet...",
//   },
// ]

function intercalatedTime2Subtitle(srtObjects) {
  if (srtObjects.length < 2) return srtObjects
  const srtUnq = srtObjects[0]
  const tempoPraCada1 = (srtUnq.endTime - srtUnq.startTime) / 2

  return [
    { ...srtObjects[0], endTime: srtUnq.startTime + tempoPraCada1 },
    { ...srtObjects[1], startTime: srtUnq.startTime + tempoPraCada1 },
  ]
}

function doObjOfSentenceIntercalate(datasSrt) {
  return datasSrt.reduce((acc, dataSrt) => {
    const sentencesSplitted = splitSentenceByWord(dataSrt.text)

    const objForEachSentence = sentencesSplitted.map((sentenceSplitted, i) => ({
      ...dataSrt,
      startTime: dataSrt.startTime + i * 1000,
      endTime: dataSrt.endTime,
      text: sentenceSplitted,
    }))

    return [...acc, ...intercalatedTime2Subtitle(objForEachSentence)]
  }, [])
}

function saveSrt(srtObj, filePath) {
  const srt = parser.toSrt(srtObj)
  return fs.writeFileSync(joinPath(__dirname, filePath), srt)
}

function deleteFile(filePath) {
  return fs.unlinkSync(joinPath(__dirname, filePath))
}

function splitTwoLinesSrt(srtObj) {
  const objOfSentenceIntercalated = doObjOfSentenceIntercalate(srtObj)
  return objOfSentenceIntercalated
}

function zerarStartTime(srtObj) {
  const numberToSubtract = srtObj[0].startTime
  if (typeof numberToSubtract !== 'number')
    throw new Error('numberToSubtract is not a number')
  console.log({ numberToSubtract })
  return srtObj.map(v => ({
    ...v,
    startTime: v.startTime - numberToSubtract,
    endTime: v.endTime - numberToSubtract,
  }))
}

const defaultOptions = {
  sanitizer: true,
  splitTwoLines: true,
  ms: true,
  startInZero: false,
}

function main(srtFilePath, options = defaultOptions) {
  options = { ...defaultOptions, ...options }
  let srt = fs.readFileSync(joinPath(__dirname, srtFilePath), 'utf8')
  let srtObj = parser.fromSrt(srt, options.ms || options.sec)

  if (options.sanitizer) srtObj = sanitizerSrtObj(srtObj)
  if (options.splitTwoLines) srtObj = splitTwoLinesSrt(srtObj)
  if (options.startInZero && options.ms) srtObj = zerarStartTime(srtObj)
  if (options.sec) {
    srtObj = srtObj.map(v => ({
      ...v,
      startTime: v.startTime / 30,
      endTime: v.endTime / 30,
    }))
  }
  return fixId(srtObj)
}

module.exports = main

// async function main() {
//   saveSrt(objOfSentenceIntercalated, './index/output.srt')
//   await deleteFile(srtFilePath)
// }

// main()

// console.log(objOfSentenceIntercalated)

// console.log(dataSanitized)
