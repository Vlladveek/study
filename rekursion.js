const arr = [1, 2, 3, 4, 5]
let sum = 0

function calc_sum(arr, index = 0) {
    if (!arr || !arr.length) return 0

    if (index < arr.length) {
        sum += arr[index]
        calc_sum(arr, index + 1)
    }
}

calc_sum(arr)
console.log(sum)


function factorial(n) {
    if (n === 0) return 1;
    return n * factorial(n - 1);
}
console.log(factorial(5));

function factorial2(n) {
    if (n === 0) {
        return 1
    }
    let results = 1
    for (; n > 0; n--) {
        results *= n
    }
    return results
}
console.log(factorial2(5));

function power(base, exponent) {
    if (exponent === 0) return 1;
    // console.log(base, power(base, exponent - 1))

    return base * power(base, exponent - 1);
}
console.log(power(2, 30));

const words = ["заказ", "казак", "комок", "потоп", "эхо", "книга", "око", "дата", "жизнь"]

function palindrome(wordList) {
    /*if (string.length <= 1) return true;
    if (string[0] !== string[string.length - 1]) return false;
    return palindrome(string.slice(1, -1));*/
    return wordList.filter((item, index, self_array) => {
        return item === reverseString(item)
    })
}
console.log(palindrome(words));

function reverseString(str) {
    let result = ""
    for (let index = str.length - 1; index >= 0; index--) {
        result += str[index]
    }
    return result
}
console.log(reverseString("Hello"))

function reverseString2 (str) {
    return str.split('').reverse().join('')
}
console.log(reverseString2("samsung"))