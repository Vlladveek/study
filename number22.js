const day = new Date()
const newYearParty = new Date("2026-01-01")

const daysToNewYear = newYearParty - day

const ONE_DAY = 1000 * 60 * 60 * 24

const celebrating = Math.ceil(daysToNewYear / ONE_DAY)

console.log("До Нового года осталось:", celebrating, "дней")
