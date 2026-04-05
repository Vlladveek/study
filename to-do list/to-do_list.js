function main() {
    //Array.from()
    const addButton = document.querySelector(".addButton")
    addButton.addEventListener("click", () => {
        //let checkBox = document.createElement("checkbox")
        //li.appendChild(checkBox)

        /*let checkBox = document.createElement("input")
        checkBox.type = "checkbox"
        li.prepend(checkBox)*/

        let input = document.querySelector(".inputText")
        let textFromInput = input.value
        let ul = document.querySelector(".ul")
        let li = document.createElement("li")
        li.classList.add("list")
        li.textContent = textFromInput
        ul.appendChild(li)

        let button = document.createElement("button")
        button.classList.add("delete-btn")
        button.addEventListener("click", () => {
            li.remove()
        })
        button.textContent = "Удалить"
        li.appendChild(button)

        let checkBox = document.createElement("input")
        checkBox.type = "checkbox"
        checkBox.classList.add("checkbox")
        li.prepend(checkBox)
    })
}
document.addEventListener("DOMContentLoaded", main)