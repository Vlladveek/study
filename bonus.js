const user = {
  name: "Artem",

  sayName() {
    return this.name;
  }
};

const say = user.sayName;
console.log(say.call(user)); 

const user2 = {
  name: "Oleg"
}

user2.boundSay = user.sayName.bind(user2);
console.log(user2.boundSay()); 

//let x = 5
const consoleLog = function () {
  console.log(x)
}
function test() {
  console.log(x)
}
//x = 10
test()
consoleLog()
//x = 20
test()
consoleLog()

function createCounter () {
  let counter = 15
  return () => {
     return counter++
  }
}
const counter1 = createCounter()
console.log(createCounter())