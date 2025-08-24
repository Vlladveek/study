const users = [
    { name: "Alice", age: 20 },
    { name: "Bob", age: 16 },
    { name: "Charlie", age: 25 }
]

function fiindUserByName(arr, name) {
    
    const finderName = arr.find((element) => {
        if (element.name === name) {
            return true
        }
        else if (element.name !== name) {
            return false
        }

    })
    if (!finderName) {
        console.log("Такого пользователя не существует!")
        return
    }
    console.log(finderName)
    
}
fiindUserByName(users, "Alice")


console.log("\n")





function filterUsersByAge(arr) {
    const filtrick = arr.filter((element) => {
        if (element.age >= 18) {
            return true
        }
        else {
            console.log("Ограничение по возрасту!")
            return false
        }
    })
    console.log(filtrick)
}
filterUsersByAge(users)


console.log("\n")


function getUsersName(arr) {
    const withMap = arr.map((element) => element.name)
    console.log(withMap)
}
getUsersName(users)


console.log("\n")



const iUsePush = users.push({ name: "Poul", age: 18 })
console.log(users)




console.log("\n")


function deleteUser(arr, name) {
    const foundIndex = arr.indexOf((element) => {
        if (element.name === name) {
            return true
        }
        else if (element.name !== name) {
            return false
        }
    })
    if (foundIndex <= -1) {
        return
    }
    arr.splice(foundIndex, 1)
}
