const fs = require('fs')
const os = require('os')
let inputArr = process.argv.slice(2)
const commandKeywords = ['-s', '-b', '-n', '-s']

Array.prototype.insert = function (index, item) {
  this.splice(index, 0, item)
}


function containsText (word) {
  return word.includes('.txt')
}

let textfile = inputArr.filter(containsText)

let arg = fs.readFileSync(textfile[0], 'utf-8')

result = sFunctionality(arg)
result = nFunctionality(result)

console.log(result)
