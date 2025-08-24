const userInput = {
    name: "Alice",
    age: 25,
    items: [
        { id: 1, name: "Laptop", price: 1200 },
        { id: 2, name: "Mouse", price: 20 },
        { id: 3, name: "Broken Item", price: 0 }
    ],
    deliveryMethod: 1// 1 — Курьер, 2 — Почта, 3 — Самовывоз
}

function createOrder(inputData) {
    const order = {
        name: inputData.name,
        age: inputData.age,
        items: [],
        totalPrice: 0,
        delivery: -1
    }
    try {
        if (typeof inputData.name !== "string" || inputData.name === "") {
            throw new Error("Неправильное имя пользователя. Кто вы такой?")
        }
        if (typeof inputData.age !== "number") {
            throw new Error("Это не число!")
        }
        if (inputData.age < 18) {
            throw new Error("Ограничение по возрасту!")
        }
        if (!Array.isArray(inputData.items)) {
            throw new Error("Это не масив!")
        }
        if (typeof inputData.deliveryMethod !== "number" || inputData.deliveryMethod < 1 || inputData.deliveryMethod > 3) {
            throw new Error("Некоректно выбран метод доставки")
        }
        //catch (error) {
        // console.error("Ошибки при оформлении заказа:", error.message);
        //return null
        // }

        if (inputData.deliveryMethod === 1) {
            order.delivery = "Доставка курьером"
        } else if (inputData.deliveryMethod === 2) {
            order.delivery = "Доставка почтой"
        } else if (inputData.deliveryMethod === 3) {
            order.delivery = "Самовывоз"
        } else {
            console.log("Такого метода доставки не существует!")
            throw new Error("Такого метода доставки не существует!")
        }



        let totalPrice = 0
        const validateItems = []

        for (let item of inputData.items) {
           // for (let item of inputData.items) {
             //   if (true) {
                  //  return 1000000000000000000000000000
               // }
          //  }
            if (item.price <= 0) {
                continue
            }
            totalPrice += item.price
            validateItems.push(item)
        }
        if (validateItems.length === 0) {
            throw new Error("Нет ни одного валидного товара в заказе!")
        }
        order.items = structuredClone(validateItems)
        order.totalPrice = totalPrice

        //structuredClone(order)

        return structuredClone(order)

    } catch (error) {
        console.error("Ошибка при оформлении заказа:", error.message);
        return null
    }



}
console.log(createOrder(userInput))

