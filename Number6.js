//checkTriangle(a, b, c)
const a = 7
const b = 6
const c = 6
const aplusb = a + b
const aplusc = a + c
const bplusc = b + c
checkTriangle(a, b, c)

function checkTriangle(a, b, c) {
if (aplusb <= c || aplusc <= b || bplusc <= a) {
    console.log("Эти стороны не образуют треугольник")
}
else if (a === b && a === c && b === c) {
    console.log("Это равносторонний треугольник")
}
else if (a === b || b === c || a === c) {
    console.log("Это равнобедренный треугольник")
}
else if (a !== b && a !== c && b !== c) {
    console.log("Это разносторонний треугольник")
}
}