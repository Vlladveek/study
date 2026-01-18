const elements = [
  { name: "Водород", symbol: "H" },
  { name: "Кислород", symbol: "O" },
  { name: "Углерод", symbol: "C" },
  { name: "Азот", symbol: "N" }
]

const reactions = [
  { inputs: ["H", "O"], result: { name: "Вода", formula: "H2O" } },
  { inputs: ["C", "O"], result: { name: "Углекислый газ", formula: "CO2" } },
  { inputs: ["N", "H"], result: { name: "Аммиак", formula: "NH3" } }
]

function findElement(symbol) {
    for (const index = 0; index < elements.length; index++) {
        if (elements[index].symbol === symbol) {
            return elements[index]
        }
    }
    return null
}