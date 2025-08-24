const numbers = [45, 7, 54, -1254]

function countPositiveNumbers(arr) {
    if (!Array.isArray(arr)) {
        return
    }
    if (!arr.every((item) => {
        return typeof item === "number"
    })) {
        return
    }
    let count = 0
    //let index = 0
    for (let index = 0; index < arr.length; index++) {
        if (arr[index] > -1) {
            count++
        }
        //index++
    }
    console.log("Кол-во положительних чисел:", count)
}
countPositiveNumbers(numbers)



function calcNumberArrSum(arr) {
    if (!Array.isArray(arr)) {
        return
    }
    if (!arr.every((item) => {
        return typeof item === "number"
    })) {
        return
    }
    //let index = 0
    let sum = 0

    for (let index = 0; index < arr.length; index++) {
        sum += arr[index]
        //index++
    }
    return sum
}
console.log(`Сумма всех чисел: ${calcNumberArrSum(numbers)}`)