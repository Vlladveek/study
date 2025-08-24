// Constants
const BASE_PRICE = 100
const min = 10
const max = 90
getTicketPrice(Math.floor(Math.random() * (max - min + 1)) + min )


function getTicketPrice(age) {
 //   return age
    if (age < 12) {
        console.log(`Детский билет: ${BASE_PRICE * 0.5}`, `Age: ${age}`)
    } else if (age > 13 && age < 17) {
        console.log(`Подростковый билет: ${BASE_PRICE * 0.75}`, `Age: ${age}`)
    } else if (age > 60) {
        console.log(`Билет для летних людей: ${BASE_PRICE * 0.7}`, `Age: ${age}`)
    } else if (age >= 18 && age <= 60) {
        console.log(`Билет: ${BASE_PRICE}`, `Age: ${age}`)
    }
}
// CamelCase
// snake_case
// kebab-case