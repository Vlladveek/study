function output(text, options = { upperCase: false }) {
     //Проверяем передали ли в options свойство upperCase со значением true
  if (options.upperCase === true) {
    //Если true — выводим строку в верхнем регистре
    console.log(text.toUpperCase());
    // Если false или параметр не передан —
    //выводим строку в нижнем регистре
  } else {
    console.log(text.toLowerCase());
  }
}

output("hello world", {
  upperCase: true
})
output("hello world")