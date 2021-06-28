module.exports = function bFunctionality (file) {
    let arr = file.split(/\r?\n/)
  
    let c = 1
    for (let i = 0; i < arr.length; i++) {
      if (arr[i].length > 0) {
        arr[i] = c.toString() + '.' + arr[i] + '\n'
        c++
      } else {
        arr[i] += '\n'
      }
    }
  
    let resultString = ''
    for (const item of arr) {
      resultString += item
    }
  
    return resultString
  }