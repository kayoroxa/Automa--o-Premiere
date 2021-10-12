const fs = require('fs')
const joinPath = require('path').join
function methods(name) {
  return {
    setFile: async function (content, callback) {
      fs.writeFileSync(`./${name}.ahk`, content, callback)
    },
    run: async function (callback) {
      console.log(`run ${name}.ahk`)
      const exec = require('child_process').exec
      exec(`${name}.ahk`, callback)
    },
  }
}

const bot = name => {
  return {
    methods: methods(name),
    print: v => console.log('print', v),
  }
}

function sanitizarJs(line) {
  const result = line.replace(/.*bot\.print\(['|"](.*)['|"]\)/gi, 'MsgBox $1')
  console.log(result)
  return result
}

function main(fileNameJs) {
  const fileName = joinPath(__dirname, fileNameJs + '.js')
  const jsString = fs
    .readFileSync(fileName, 'utf8')
    .split('\n')
    .filter(line => line.trim().length > 0 && line.match(/bot\./gi))
    .map(v => sanitizarJs(v))
    .join('\n')

  const myBot = bot(fileNameJs)
  myBot.methods.setFile(jsString)
  myBot.methods.run(v => console.log(v))
  return bot(fileNameJs)
}

module.exports = main
