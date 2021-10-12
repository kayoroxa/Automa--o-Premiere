const joinPath = require('path').join
const fs = require('fs')

function getFilePath() {
  const variables = process.argv.slice(2)
  const splitted = variables[0]
    .split('*')
    .map(v => v.trim().replace(/"/g, ''))
    .filter(v => v.length > 0)
  const path = joinPath(splitted[0], splitted[1])
  return path
}

const catalogar = {
  print: 'console.log',
  imprimir: 'console.log',
}

let strFile = fs.readFileSync(getFilePath(), 'utf8')

Object.keys(catalogar).forEach(catalogo => {
  strFile = strFile.replace(catalogo, catalogar[catalogo])
})

function evalFileJs(strFile) {
  return eval(strFile)
}

evalFileJs(strFile)
