#!/usr/bin/env node

const fs = require('fs')
const path = require('path')
const bCommand = require('./utilityFuncs/b-command')
const nCommand = require('./utilityFuncs/n-command')
const sCommand = require('./utilityFuncs/s-command')
let inputArr = process.argv.slice(2)

if (inputArr.length === 0) {
  console.log('No input mentioned ‼')
  return
}

function containsText (word) {
  return word.includes('.txt')
}

let textfiles = inputArr.filter(containsText)

if (inputArr.includes('-n') && inputArr.includes('-b')) {
  console.log('n and b commands cannot co-exist')
  return
}

textfiles.forEach(textfile => {
  const fileExists = fs.existsSync(textfile)

  if (!fileExists) {
    console.log(textfile + ' File does not exist ⚠\n')
    return
  }

  let result = fs.readFileSync(textfile, 'utf-8')

  if (inputArr.includes('-n')) {
    result = nCommand(result)
  }

  if (inputArr.includes('-b')) {
    result = bCommand(result)
  }

  if (inputArr.includes('-s')) {
    result = sCommand(result)
  }
  console.log('\n[ ' + path.basename(textfile) + ' ]\n' + result)
})
