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
    // const val = elements.find(elements.symbol === symbol || null)
    for (let index = 0; index < elements.length; index++) {
        if (elements[index].symbol === symbol) {
            return elements[index]
        }
    }
    return null
    //return val
}

function react(symmbol1, symbol2) {
    for (let react of reactions) {
        if (react.inputs.includes(symmbol1) && react.inputs.includes(symbol2)) {
            return react.result
        }
    }
    return null
}

function labExperiment(sequence) {
    if (sequence.length < 2) {}
}

















console.log(findElement("O"));
// { name: "Вода", formula: "H2O" }
console.log(react("C", "O"));
// { name: "Углекислый газ", formula: "CO2" }
//console.log(labExperiment(["C", "O", "O"]));
// { name: "Углекислый газ", formula: "CO2" }
//console.log(labExperiment(["N", "H", "H", "H"]));
// { name: "Аммиак", formula: "NH3" }
//console.log(labExperiment(["H", "H"]));
// null (нет реакции)