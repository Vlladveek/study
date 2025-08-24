const orders = [
    { id: 1, product: "Ноутбук", price: 1200 },
    { id: 2, product: "Мышка", price: 20 },
    { id: 3, product: "Клавиатура", price: 50 }
]

function getTotalPrice(orderList) {
    let total = 0
    for (let index = 0; index < orderList.length; index++) {
        total += orderList[index].price
    }
    return total
}
const total = getTotalPrice(orders);
console.log("Общая сумма заказов:", total)

function addNewOrder(orderData) {
    try {
        const copyOrderData = structuredClone(orderData)
        if (typeof copyOrderData.product !== "string" || copyOrderData.product === "") {
            throw new Error("Product is not valid")
        }

        if (typeof copyOrderData.price !== "number" || copyOrderData.price < 0) {
            throw new Error("How much is it?")
        }
        const lastElement = this[this.length - 1]
        copyOrderData.id = lastElement.id + 1
        return copyOrderData
    } catch (error) {
        console.log("E.r.r.o.r")
        return null
    }
}

orders.push(addNewOrder.call(orders, {
    product: "Геймпад",
    price: 700
}))
console.log("Orders now:", orders)