let counter = 0

function factorial(n) {
    counter++
    if (n === 1) {
        return 1
    } else if (n <= 0) {
        return 0
    } else {
        return n * factorial(n - 1)
    }
}

function factorial2(n) {
    let number = 1
    for (let index = 1; index <= n; index++) {
        return
    }
    return number
}

console.log(factorial(0))
console.log("counter", counter)
counter = 0
console.log(factorial(3))
console.log("counter", counter)

let list = {
    value: 1,
    next: {
        value: 2,
        next: {
            value: 3,
            next: {
                value: 4,
                next: null
            }
        }
    }
};

const list2 = [

]
function printList(list) {
    list2.push(list["value"])
    if (list.next) {
        printList(list.next)
    }
}
printList(list)
console.log(list2)
