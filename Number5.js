const GRAVITY = 9.8
const massKg = 5
const thrustNumber = 55
checkLaunch(massKg, thrustNumber)

function checkLaunch(massKg, thrustNumber) {
    const resultForm = massKg * GRAVITY
    if (thrustNumber > resultForm) {
        console.log("Ракета взлетает! Поздравляем командор!")
    } else if (thrustNumber === resultForm) {
        console.log("Почти... Ракета зависла в воздухе.")
    } else if (thrustNumber < resultForm) {
        console.log("Неудача! Ракета не оторвалась от земли")
    }
}