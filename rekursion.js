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

function power(base, exponent) {
    if (exponent === 0) return 1;  
    return base * power(base, exponent - 1);
}
console.log(power(2, 3)); 

function palindrome(string, ) {
    if (string.length <= 1) return true; 
    if (string[0] !== string[string.length - 1]) return false;
    return palindrome(string.slice(1, -1)); 

}
console.log(palindrome("каза")); 