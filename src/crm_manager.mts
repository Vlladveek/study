import { order } from "./crm_manager_types.mts"

function createOrderManager() {

    let orders: order[] = [];

    return {
        // добавляет новый заказ в массив
        addOrder(order: order) {
            orders.push(order);
        },
        //удаляет заказ по id
        removeOrder(id) {
            let index = orders.findIndex(function (order) {
                return order.id === id;
            });
            // ищем индекс заказа с нужным id
            //если заказ найден удаляем его
            if (index !== -1) {
                orders.splice(index, 1);
            }
        },
        //возвращаем закакз по id
        getOrder(id) {
            return orders.find(function (order) {
                return order.id === id;
            });
        },
        // считает общую суму оплаченых заказов
        getTotalRevenue() {

            let total = 0;
            // перебираем все заказы в массиве orders
            for (let index = 0; index < orders.length; index++) {
                // const order = orders[index]
                // проверяем: если заказ оплачен
                if (orders[index].status === "paid") {
                    // перебираем все товары внутри заказа
                    for (let index2 = 0; index2 < orders[index].items.length; index2++) {
                        // считаем стоимость товара:
                        // price — цена за 1 штуку
                        // qty — количество
                        // и добавляем к общей сумме
                        total += orders[index].items[index2].price * orders[index].items[index2].qty;

                    }

                }

            }

            return total;
        },

        getOrdersByCustome(customer) {
            return orders.filter(function (order) {
                return order.customer === customer;
            })
        },

        getSummary() {
            return orders.reduce(function (acc, order) {
                const found = acc.find(function (item) {
                    return item.customer === order.customer;
                });
                if (found) {
                    found.total_orders++;
                } else {
                    acc.push({
                        customer: order.customer,
                        total_orders: 1
                    });
                }
                return acc;
            },);
        },

        updateOrderStatus(id, newStatus) {

            const order = orders.find(function (order) {
                return order.id === id;
            });

            if (order) {
                order.status = newStatus;
            }

        },

        getLastNOrders(n) {
            return orders.slice(-n);
        }
    }
}

/*
{
  id: number,
  customer: string,
  items: [
    { name: string, price: number, qty: number }
  ],
  status: "new" | "paid" | "shipped"
}
*/

const finiishPart = createOrderManager()
finiishPart.addOrder({
    id: 1,
    customer: "John",
    items: [
        { name: "Phone", price: 1000, qty: 1 }
    ],
    status: "new"
})

finiishPart.addOrder({
    id: 2,
    customer: "Adan",
    items: [
        { name: "Laptop", price: 5000, qty: 3 }
    ],
    status: "paid"
})

finiishPart.addOrder({
    id: 3,
    customer: "Ivan",
    items: [
        { name: "Phone", price: 500, qty: 5 }
    ],
    status: "shipped"
})

finiishPart.addOrder({
    id: 4,
    customer: "Bob",
    items: [
        { name: "Phone", price: 1000, qty: 2 }
    ],
    status: "paid"
})


console.log(finiishPart.getOrder(1));
console.log(finiishPart.getOrdersByCustome("Bob"));
console.log(finiishPart.getTotalRevenue());
console.log(finiishPart.getSummary());
console.log(finiishPart.getLastNOrders(1));
finiishPart.updateOrderStatus(2, "paid");