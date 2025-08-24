const ONE_MINUTE = 1000 * 60
const type_pizza = {
    margarita: "margarita",
    peperoni: "peperoni",
    clasik: "clasik"
}
const timeCook = {
    margarita: ONE_MINUTE * 7, //7 min
    peperoni: ONE_MINUTE * 10,
    clasik: ONE_MINUTE * 5
}
const price_pizza = {
    margarita: 70,
    peperoni: 100,
    clasik: 50
}

const orderList = [
    {
        userMoney: 1000,
        type: "margarita"
    },

    {
        userMoney: 1000,
        type: "clasik"
    },

    {
        userMoney: 1000,
        type: "peperoni"
    }
]

function orderPizza(userMoney, type, callback) {
    try {
        if (!(type in type_pizza)) {
            throw new Error("There is no like this type pizza")
        }
        if (userMoney < price_pizza[type]) {
            throw new Error("User doesn't have enough money")
        }
        console.log(`Type of pizza: ${type} accepted`)

        setTimeout(() => {
            callback(`Your ${type} is cooked`)
        }, timeCook[type] / 60)
    } catch (err) {
        console.log(err)
        callback(null, err)
    }
}

function orderPizza2(userMoney, type) {
    return new Promise((resolve, reject) => {
        if (!(type in type_pizza)) {
            reject(new Error("There is no like this type pizza"))
        }
        if (userMoney < price_pizza[type]) {
            reject(new Error("User doesn't have enough money"))
        }
        console.log(`Type of pizza: ${type} accepted`)

        setTimeout(() => {
            resolve(`Your ${type} is cooked`)
        }, timeCook[type] / 60)
    })


}
if (false) {
    orderPizza2(orderList[0].userMoney, orderList[0].type)
    .then((result) => {
        console.log(result)
        return orderPizza2(orderList[1].userMoney, orderList[1].type)
    })
    .then((result) => {
        console.log(result)
    })
    .catch((result) => {
        console.log(result)
    })
}



if (true) {
    orderPizza(orderList[0].userMoney, orderList[0].type, (result, err) => {
        if (err) {
            return
        } else {
            console.log(result)
        }
        orderPizza(orderList[1].userMoney, orderList[1].type, (result, err) => {
            if (err) {
                return
            } else {
                console.log(result)
            }
            orderPizza(orderList[2].userMoney, orderList[2].type, (result, err) => {
                if (err) {
                    return
                } else {
                    console.log(result)
                }
            })
        })
    })
}