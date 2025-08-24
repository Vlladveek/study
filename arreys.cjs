const input_helper = require('./input_helper.cjs');
const numberArr = []
function safeNumberPush(arr, val) {
    if (!Array.isArray(arr)) {
        return
    }
    if (!arr.every((item) => {
        return typeof item === "number"
    })) {
        return
    }
    arr.push(val)
}
function safeNumberUnshift(arr, val) {
    if (!Array.isArray(arr)) {
        return
    }
    if (!arr.every((item) => {
        return typeof item === "number"
    })) {
        return
    }
    arr.unshift(val)
}
let inputVal
input_helper
    .prompt__loop("Enter val:")
    .then(val => {
       
        console.log(numberArr)
    })
    .catch(err => {
        console.log(err)
    })