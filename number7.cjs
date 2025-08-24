const arrProducts = [
    {
        name: "Burger",
        price: 2,
        quantity: 50
    },
    {
        name: "Burger",
        price: 2,
        quantity: 50
    },
    {
        name: "Burger",
        price: 2,
        quantity: 50
    }
]

function printReceiptList(listProducts) {
   // let index = 0
    if (Array.isArray(listProducts)) {
        //3
        for (let index = 0; index < listProducts.length; index++) {
            console.log(`Чек номер: ${index + 1}`)
            printReceipt(listProducts[index].name, listProducts[index].quantity, listProducts[index].price)
            console.log("\n") // Это служебный символ для вывода новой строки
            //index++
        }
    }
}
printReceiptList(arrProducts)
function validateItemName(name) {
    return typeof name === "string" && name.length > 0
}

function validatePositivNumber(namber) {
    return typeof namber === "number" && namber > 0
}

function calculatePrice(quantity, price) {
    return quantity * price
}

function calculateTip(price, tipPercent = 10) {
    return (price * tipPercent) / 100
}

function printReceipt(name, quantity, price) {
    if (!validateItemName(name) || !validatePositivNumber(quantity) || !validatePositivNumber(price)) {
        console.log("Заказ не может быть обработан.")
        return
    }
    const priceProduct = calculatePrice(quantity, price)
    const priceTip = calculateTip(price, tipPercent = 10)
    const priceTotal = priceProduct + priceTip

    console.log(`Заказ: ${name}`);
    console.log(`Количество: ${quantity}`);
    console.log(`Цена за единицу: ${price}`);
    console.log(`Промежуточная сумма: ${priceProduct.toFixed(2)}`);
    console.log(`Чаевые (10%): ${priceTip.toFixed(2)}`);
    console.log(`Общая сумма к оплате: ${priceTotal.toFixed(2)}`)
}