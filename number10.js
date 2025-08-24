const someNumbers = [1, -8, 4, -6, 5, -7, 2, 9, -3]
//et index = 0
function deleteArrayElement(arr, index) {
    //let index = 0
    arr.splice(3, 1)
    console.log(arr)
}
deleteArrayElement(someNumbers)



function repleceArrayElement(arr, index, newElementValue) {
    arr.splice(8, 1, "Hello")
    console.log(arr)
}
repleceArrayElement(someNumbers)