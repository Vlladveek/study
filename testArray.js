const users = [
    { name: "Alice", age: 20 },
    { name: "Bob", age: 16 },
    { name: "Charlie", age: 25 }
]

const arr = users.find((element) => {
    if (element.age >= 18) {
        return true
    } else {
        return false
    }
})

console.log("Adult user:", arr)

const arr2 = users.map((element) => {
    return element.name
})

console.log("Users name:", arr2)

users.splice(1, 1)

console.log(users)