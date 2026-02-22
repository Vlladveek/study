function calculatePrice(price, tax = 0.2, discount = 0) {
  return price + price * tax - discount;
}

console.log(calculatePrice(100)); // 120
console.log(calculatePrice(100, 0.1)); // 110
console.log(calculatePrice(100, undefined, 5)); // 115
console.log(calculatePrice(100, 0.2, 10)); // 110