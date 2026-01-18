function multiplicationTable() {
    for (let index = 1; index <= 10; index++) {
        for (let number = 1; number <= 10; number += 1) {
            console.log(`${index} * ${number} = ${index * number}`)
        }
    console.log("--------------------")
    }
}
//multiplicationTable()