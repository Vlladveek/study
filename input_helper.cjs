const readline = require('readline');

function createInputInterface() {
    return readline.createInterface({
        input: process.stdin,
        output: process.stdout
    });
}

async function prompt(message, validator = null) {
    const rl = createInputInterface();

    return new Promise((resolve) => {
        rl.question(message, answer => {
            rl.close();

            if (validator && !validator(answer)) {
                console.log("Invalid input. Try again.");
                resolve(prompt(message, validator)); // retry
            } else {
                resolve(answer);
            }
        });
    });
}
async function prompt__loop(message, validator = null) {
    const rl = createInputInterface();

    return new Promise((resolve) => {
        rl.question(message, answer => {
            if (answer.toLowerCase() === "exit") {
                console.log("Программа завершена.");
                rl.close();
                return;
            }

            if (validator && !validator(answer)) {
                console.log("Invalid input. Try again.");
                resolve(prompt__loop(message, validator)); // retry
            } else {
                resolve(answer);
            }

            prompt__loop(message, validator);
        });
    });
}
/*
   *Example usage:

    (async () => {
        const age = await prompt("Enter your age: ", (input) => !isNaN(input));
        console.log(`You are ${age} years old.`);
    })(); 
*/

exports.prompt = prompt;
exports.prompt__loop = prompt__loop;