const user = {
    name: "Jhon",
    last_name: "Poul"
}

user.name = "Jack"
console.log(user)

delete user.name
console.log(user)

function clearObjectKeys(object) {
    for (const arr of Object.entries(object)) {
        delete object[arr[0]]
    }
}
clearObjectKeys(user)

function isEmpty(object) {
    const keys_count = Object.keys(object).length
    if (keys_count > 0) {
        return false
    }
    else {
        return true
    }
}
console.log("Is object empty?", isEmpty(user))

const sotrudniki = [
    {
        salary: 2500
    },
    { salary: 1000 },
    { salary: 5000 },
    {},
    { salary: true },
    { name: "" }
]
console.log(sotrudniki[1000])


function calculateSalary(arr) {
    let sum = 0
    if (arr.length === 0) {
        return sum
    }
    for (let index = 0; index < arr.length; index++) {
        if (isEmpty(arr[index]) || !("salary" in arr[index]) || ("salary" in arr[index] && typeof arr[index].salary !== "number")) {
            continue
        }
        console.log(arr[index])
        sum += arr[index].salary
    }
    return sum
}
let total = calculateSalary(sotrudniki)
console.log("Наши расходы на зарплаты", total)
