const object = {
    name: "Alice"
}
function sayHi() {
    console.log(`Hello ${this.name}`)
}
sayHi.call(object)