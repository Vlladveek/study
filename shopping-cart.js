const cart = [
    { name: "Apple", price: 30 },
    { name: "Banana", price: 20 },
    { name: "Orange", price: 25 }
];

let itemsCount = cart.length;

function add_item(cart, item) {
    cart.push(item)
}
add_item(cart, { name: "Pineapple", price: 35 })
console.log(cart)
console.log(itemsCount)

console.log("----------------------------")

function remove_item(cart, item_name) {
    for (let index = 0; index < cart.length; index++) {
        if (cart[index].name === item_name) {
            return cart.splice(index, 1)
        }
    }
    return []
}
console.log(remove_item(cart, "Apple"))
console.log(cart)

console.log("----------------------------")

function clone_cart(cart) {
    const clone = [...cart]
    //const clone = structuredClone(cart)
    return clone
}
clone_cart(cart)
console.log(cart)

console.log("----------------------------")

function replace_item(cart, item_name, item) {
    for (let index = 0; index < cart.length; index++) {
        if (cart[index].name === item_name) {
            cart.splice(index, 1, item)
            return cart
        } else {
            return console.log(`The product ${item_name} has not found`)
        }
    }
}
console.log(replace_item(cart, "Pineapple", {name: "Kivi", price: 50 }))
console.log(cart)