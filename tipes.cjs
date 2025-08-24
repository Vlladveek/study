const arr = ["house", 75, 89]
function test(val) {
    if (typeof val === "object") {
        val[0] = null
        console.log(val)
        val = []
        return
    }
    console.log("Это приметивный тип данных", val)
}
test(structuredClone(arr)) 
console.log(arr)
test(12)
let index = 0
while (index < arr.length) {
    console.log(arr[index++])
    //index++
}