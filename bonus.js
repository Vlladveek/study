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