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

const new_object = JSON.parse(JSON.stringify(userInput))


new_object.items = 0

console.log("userInput", userInput)
console.log("new_object", new_object)