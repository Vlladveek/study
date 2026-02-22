function output(text, options = { upperCase: false, lowerCase: false }) {
  //Проверяем передали ли в options свойство upperCase со значением true
  if (options.upperCase === true) {
    //Если true — выводим строку в верхнем регистре
    console.log(text.toUpperCase());
    // Если false или параметр не передан —
    //выводим строку в нижнем регистре
  } else if (options.lowerCase === true) {
    console.log(text.toLowerCase());
  } else {
    console.log(text)
  }
}

output("hello world", {
  upperCase: true
})
output("hello world HELLO")
output("SOMETHING", {
  lowerCase: true
})