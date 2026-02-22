

function createCounter(firstNumber = 0) {
    let count = firstNumber
  return function () {
    count++;        
    return count;   
  };
}

const counterA = createCounter();
const counterB = createCounter(10); //firstNumber = 10

console.log(counterA()); // 1
console.log(counterA()); // 2
console.log(counterB()); // 11
console.log(counterB()); // 12
console.log(counterA()); // 3