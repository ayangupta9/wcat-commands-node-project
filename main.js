const fs = require('fs')
const os = require('os')
let inputArr = process.argv.slice(2)
const commandKeywords = ['-s', '-b', '-n', '-s']

Array.prototype.insert = function (index, item) {
  this.splice(index, 0, item)
}

function sFunctionality (file) {
  let exists = fs.existsSync(file)
  let isFile = fs.lstatSync(file).isFile()

  if (exists === true && isFile === true) {
    let text = fs.readFileSync(file, 'utf-8').toString()
    let arr = text.split(/\r?\n/)
    let i = arr.length
    while (i--) {
      if (arr[i] === '') {
        arr.splice(i, 1)
      }
    }

    for (let i = 0; i < arr.length; i++) {
      if (isOdd(i)) {
        arr.insert(i, '\n\n')
      }
    }
    let result = ''

    for (let i = 0; i < arr.length; i++) {
      result += arr[i]
    }

    console.log(result)
  } else {
    console.log('File does not exist')
  }
}

function containsText (word) {
  return word.includes('.txt')
}

function isOdd (number) {
  return !(number % 2 === 0)
}

let textfile = inputArr.filter(containsText)

textfile.forEach(file => nFunctionality(file))
