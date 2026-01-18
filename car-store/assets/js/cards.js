export const cardData = [
    {
        name: "Card1",
        number: 45893178,
        expireData: 12 / 10,
        cvv: 465
    },
    {
        name: "Card2",
        number: 78932149,
        expireData: 10 / 19,
        cvv: 783
    },
    {
        name: "Card3",
        number: 56413290,
        expireData: 11 / 30,
        cvv: 569
    }
]

/*
<div class="bank-card hidden">
        <h4 class="name">Name</h4>
        <div class="bank-card__number">
            2314235252532
        </div>

        <div class="bank-card__last-part">
            <div class="bank-card__date">
                11/29
            </div>
            <div class="bank-card__code">
                432
            </div>
        </div>
    </div>
*/
export function createCardHTML(cardData) {
    const card = document.createElement("div")
    card.classList.add("bank-card")
    const cardName = document.createElement("h4")
    cardName.classList.add("name")
    const cardNumber = document.createElement("div")
    cardNumber.classList.add("bank-card__number")
    
    const cardLastPart = document.createElement("div")
    cardLastPart.classList.add("bank-card__last-part")
    const cardDate = document.createElement("div")
    cardDate.classList.add("bank-card__date")
    const cardCode = document.createElement("div")
    cardCode.classList.add("bank-card__code")

    cardLastPart.append(cardDate)
    cardLastPart.append(cardCode)
    card.append(cardName)
    card.append(cardNumber)
    card.append(cardLastPart)

    cardName.textContent = cardData["name"]
    cardNumber.textContent = cardData.number
    cardDate.textContent = cardData["expireData"]
    cardCode.textContent = cardData.cvv

    return card
}
