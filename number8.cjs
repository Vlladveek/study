const numbers = [1, -8, 89, -147]

function countPositiveNumbers(arr) {
  if (!arr || !arr.length) {
    console.log("Это не массив.")
  }
  let count = 0 
  let i = 0
  while (i < arr.length) {
    count++
  i++
  }
  return count
}

function sumArray(arr) {
  if (!arr || !arr.lenght) {
    console.log("Это не массив.")
  }
  let suma = 0
  let i = 0
  while (i < arr.lenght) {
    suma = suma + arr[i]
    i++
  }
  return suma
}

//const numbers = [1, -8, 89, -147]
console.log(`Положительные чила: ${countPositiveNumbers(numbers)}`)
console.log(`Сумма: ${sumArray(numbers)}`)