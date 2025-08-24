const products = [
    '{"id": 1, "name": "Laptop", "price": 1200}',
    '{"id": 2, "name": "Mouse", "price": 20}',
    '{"id": 3, "name": "Keyboard", "price": 100}'
]

const store = {
    getProductById: async function (id) {
        return new Promise((resolve, reject) => {
            for (const string of products) {
                let orders = JSON.parse(string)
            }
            if (orders.id === id) {
                resolve(orders)
            } else {
                reject(new Error("Product not found"))
            }
        })
    }
}

printProduct(product) {
    console.log(`ID: ${product.id} | Name: ${product.name} | Price: ${product.price}`)
}

async function main() {
    try {
await store.getProductById(2)   
store.printProduct(product)

await store.getProductById(10)
store.printProduct()
    }
}
