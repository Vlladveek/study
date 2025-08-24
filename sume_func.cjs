let number1
let number2
const input_helper = require('./input_helper.cjs');
input_helper
    .prompt("Enter val:")
    .then(val => {
        number1 = val
        input_helper
            .prompt("Enter val:")
            .then(val => {
                number2 = val
                const sumaval = minus(number1, number2)
                console.log(`Результат сумы равняеться ${sumaval} `)
            })
            .catch(err => {
                console.log(err)
            })
    })
    .catch(err => {
        console.log(err)
    })

function minus(val1, val2) {
    if (Number(val1) < Number(val2)) {
        return Number(val2) - Number(val1)
    }
    return Number(val1) - Number(val2)
}
