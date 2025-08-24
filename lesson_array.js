const numbers = [-1, 5, 9, 2]
function getPositiveNumbers(arr) {
    const filterArr = arr.filter((element) => {
        if (element >= 0) {
            return true
        }
        else {
            return false
        }
    })
    console.log(filterArr)
}
getPositiveNumbers(numbers)

function getNegativeNumbers(arr) {
    const filterArr = arr.filter((element) => {
        if (element <= 0) {
            return true
        }
        else {
            return false
        }
    })
    console.log(filterArr)
}
getNegativeNumbers(numbers)

const find = numbers.find((element) => {
    if (element >= 5) {
        return true
    }
    else {
        return false
    }
})
console.log(find)

const positiveNumbersArrey = numbers.map((element) => {
return Math.abs(element)
})
console.log(getNegativeNumbers(positiveNumbersArrey), "N")
