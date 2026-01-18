import { cardData, createCardHTML } from "./cards.js"
function main() {
  console.log("Hello, I am Javascript in your browser.");
  renderMenu()
  createCardList()
}

document.addEventListener("DOMContentLoaded", main)

const menu = [
  {
    link: "about.html",
    textLink: "About us"
  },
  {
    link: "index.html",
    textLink: "Home"
  },

  {
    link: "#",
    textLink: "contacts"
  }

]

function renderMenu() {
  const nav = document.querySelector(".navigation-panel__nav")
  if (!nav) {
    return
  }
  const list = document.createElement("ul")
  list.classList.add("navigation-panel__list")

  menu.forEach((item) => {
    const listItem = document.createElement("li")
    listItem.classList.add("navigation-panel__item")
    const itemLink = document.createElement("a")
    listItem.append(itemLink)
    itemLink.href = item.link
    itemLink.textContent = item.textLink
    list.append(listItem)
  })

  nav.append(list)
}


function createCardList() {
  const container = document.querySelector("#someCards")
  if (!container) {
    return
  }
  cardData.forEach((element) => {
    container.append(createCardHTML( element) )
  })
}
