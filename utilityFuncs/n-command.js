function nFunctionality (file) {
    let arr = file.split(/\r?\n/)
  
    for (let i = 0; i < arr.length; i++) {
      arr[i] = (i + 1).toString() + '.' + arr[i] + '\n'
    }
  
    let resultString = ''
    for (const item of arr) {
      resultString += item
    }
    return resultString
  }