function sFunctionality (file) {
  let arr = file.split(/\r?\n/)
  let i = arr.length
  while (i--) {
    if (arr[i] === '') {
      arr.splice(i, 1)
    }
  }

  let result = ''

  for (let i = 0; i < arr.length; i++) {
    result += arr[i] + '\n\n'
  }

  return result
}
