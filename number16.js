function buyProduct(product) {
    return new Promise((resolve, reject) => {
        console.log(`Товар: ${product} ожидает оплату.`)

        setTimeout(() => {
       console.log(`Товар: ${product} куплен`)
            if (product === "laptop") {
            resolve("Товар: laptop куплен")
        } else if (product === "phone") {
            resolve("Товар: phone куплен")
        } else if (product === "headphones") {
            resolve("Товар: headphones куплен")
        } else {
            reject("Такого товара нет в магазине")
        }
       }, 1000)
    })
}

 buyProduct("phone")
 .then((result) => {
    console.log(result)
    return buyProduct("laptop")
 })
 .then((result) => {
    console.log(result)
    return buyProduct("TV")
 })
 .then((result) => {
    console.log(result)
 })
 .catch((err) => {
    console.log("Ошибка", err.message)
 })
 .finally(() => {
    console.log("Магазин закрылся")
 })