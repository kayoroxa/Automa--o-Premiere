
const srtObj = [
  { startTime: 5000, endTime: 10000, text: 'Hello' },
  { startTime: 10000, endTime: 15000, text: 'World' },
  { startTime: 15000, endTime: 20000, text: '!' },
]

function zerarStartTime(srtObj) {
  const numberToSubtract = srtObj[0].startTime
  return srtObj.map(v => ({
    ...v,
    startTime: v.startTime - numberToSubtract,
    endTime: v.endTime - numberToSubtract,
  }))
}

console.log(zerarStartTime(srtObj))