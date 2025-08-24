const User1 = { name: "Paul" }
const User2 = { name: "Bill" }
const User3 = { name: "Anna" }
const test = {}


function printName() {
    try {
        console.log(this)
        if (!("name" in this)) {
            throw new Error("Who are you?")

        } else {
            console.log(this.name)
        }
    } catch (err) {
        console.log(err)
    }
}
test.test = printName
test.test()
printName()
printName.call(User2)