console.clear()
const users = {
    "Alice": {
        age: 25,
        orders: [
            { id: 1, item: "Laptop", price: 1200 },
            { id: 2, item: "Mouse", price: 20 }
        ]
    },
    "Bob": {
        age: 17,
        orders: [
            { id: 3, item: "Keyboard", price: 50 }
        ]
    },
    "Charlie": {
        age: 30,
        orders: []
    }
}

function outPutOfUsers(arr) {
    const adultUsers = []
    for (const username in arr) {
        const user = arr[username]

        console.log(`Пользователь: ${username}`)
        console.log(`Возраст: ${user.age}`)
        if (!("orders" in user) && typeof user.orders !== "number")
        if (user.orders.length === 0) {
            console.log("Нет заказов\n")
        } else {
            console.log("Заказы:")
            let total = 0
            for (let order of user.orders) {
                console.log(`[${order.id}], ${order.item}, ($${order.price}))`)
                total += order.price
            }
            
            console.log(`Общая сумма: $${total}\n`)
        }

        if (user.age > 18 && user.orders.length > 0) {
            adultUsers.push(username)
        }
    }
    console.log(`Пользователи старше 18 лет с хотя бы одним заказом:`)
    console.log(adultUsers)
}
outPutOfUsers(users)