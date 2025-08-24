async function sleep(seconds) {
    await new Promise((resolve, reject) => {
        setTimeout(() => {
            resolve()
        }, seconds * 1000)
    })
}

async function test() {
    console.log(1)
     sleep(1)
    console.log(2)
    await sleep(1)
    console.log(3)
    await sleep(1)
    console.log(4)
    await sleep(1)
    console.log(5)
}
test()