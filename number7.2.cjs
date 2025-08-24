let products = [
    { name: "Burger", quantity: 2, price: 50 },
    { name: "Cola", quantity: 3, price: 15 },
    { name: "Pizza", quantity: 1, price: 25 },
    { name: "Fries", quantity: 1, price: 30 }
]

function printReceipt(items) {
    let i = 0
    let total = 0
    while (i < items.length) {
        let item = items[i]

        if (
            typeof item.name !== "string" || item.name === "" ||
            typeof item.quantity !== "number" || item.quantity <= 0 ||
            typeof item.price !== "number" || item.price <= 0
        ) {
            console.log("Заказ отменяеться.")
            i++
            //continue
        }

        let itemTotal = item.quantity * item.price
        total += itemTotal

        console.log(`${item.name}  ${item.quantity} = ${itemTotal} грн`)
        i++
    }

    let tip = total * 0.1
    let finalTotal = total + tip

    console.log(`Сумма: ${total.toFixed(2)} `)
    console.log(`Чаевые (10%): ${tip.toFixed(2)} `)
    console.log(`Итого к оплате: ${finalTotal.toFixed(2)} `)
}

printReceipt(products)