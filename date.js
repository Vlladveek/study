const dayWeek = {
    0: "monday",
    1: "tuesday",
    2: "wednesday",
    3: "thursday",
    4: "friday",
    5: "saturday",
    6: "sunday"
}
function getBirthday(date) {
    try {
        const dateObject = new Date(date)
       const day = dateObject.getDay()
        console.log(dayWeek[day])
        console.log(day)
    } catch (err) {
        console.log(err)
    }

}

getBirthday("2012-01-08")

let obj1 = {name: "Paul"}
let obj2 = {...obj1}
obj2.name = "Luk"
console.log(obj1.name)