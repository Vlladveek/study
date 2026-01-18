/*function main() {
    const SNOWFLAKE_COUNT = 1000
    const template = new DocumentFragment()
    for (let index = 0; index < SNOWFLAKE_COUNT; index += 1) { // index++
        const randomDelay = Math.floor(2 + Math.random() * 3)
        const img = document.createElement("img")
        img.src = "./../images/snowflake.svg"
        img.alt = "Snowflake" + index
        img.classList.add("snowflake")
        img.style.left = 50 * index + 'px'
        img.style.animationDelay = `${randomDelay}s`
        template.appendChild(img)
    }
    document.body.appendChild(template)
}
document.addEventListener("DOMContentLoaded", main)
*/

const navButton = document.querySelector('.nav-button');
const controlPanel = document.querySelector('.control-panel');

navButton.addEventListener('click', () => {
    controlPanel.classList.toggle('show');
    /* if (controlPanel.classList.contains("show")) {
         controlPanel.classList.remove('show')
     } else {
         controlPanel.classList.add('show')
     }*/
});


const users = [
    {
        id: 1,
        name: "Alex",
        age: 20,
    },
    {
        id: 2,
        name: "Maria",
        age: 22,
    },
    {
        id: 3,
        name: "John",
        age: 19,
    },

    {
        id: 4,
        name: "John1",
        age: 199,
    }
];

function init_users_table(users) {
    const table = document.getElementById("users-table");
    if (!table) {
        return;
    }
    const tr = document.createElement("tr");
    Object.keys(users[0]).forEach(key => {
        const th = document.createElement("th");
        th.textContent = key;
        tr.appendChild(th);
    });
    table.appendChild(tr);
    for (let i = 0; i < users.length; i++) {
        const row = document.createElement("tr");
        const values = Object.values(users[i]);
        for (let j = 0; j < values.length; j++) {
            const td = document.createElement("td");
            td.textContent = values[j];
            row.appendChild(td);
        }

        table.appendChild(row);
    }

    /* users.forEach(user => {
         const row = document.createElement("tr");
         Object.values(user).forEach(values => {
             const td = document.createElement("td");
             td.textContent = values;
             row.appendChild(td);
         });
         table.appendChild(row);
 });*/
}
init_users_table(users);

function get_keys_values(obj) {
    const keys = []
    const values = []
    for (const [key, value] of Object.entries(obj)) {
        keys.push(key)
        values.push(value)
    }
    return { keys, values }

}

const object1 = {
    a: "somestring",
    b: 42,
};
const { a: var1 } = object1
console.log(Object.entries(object1))