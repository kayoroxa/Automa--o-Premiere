function trySplitByPunctuation(sentence) {
  const splitted = sentence.split(/[\!\?\.\,]/)
  const result = splitted.reduce((acc, curr, index) => {
    const last = acc[acc.length - 1]
    if (index === 0) return acc.concat(curr)
    else if (curr.length < 3) {
      acc[acc.length - 1] = last + curr
      return acc
    }

    if (last.length + curr.length > 36) {
      acc.push(curr)
    } else {
      acc[acc.length - 1] = last + curr
    }
    return acc
  }, [])
  return result.map(v => v.trim())
}

function splitSentenceByWord(sentence) {
  const splittedByPunctuation = trySplitByPunctuation(sentence)
  const maiorLength = splittedByPunctuation.reduce((acc, curr) => {
    return acc > curr.length ? acc : curr.length
  }, 0)
  if (maiorLength <= 36) {
    return splittedByPunctuation
  }

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
const result = splitSentenceByWord('Okay. Do whatever you did last night,')
console.log(result)
