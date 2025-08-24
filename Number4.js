import chalk from 'chalk'

// === 1. Функция расчета успеха за один день ===
function successCalc(hoursCoding, bugsFixed, coffeeCups, watchedYouTube) {
  if (hoursCoding === 0) {
    console.log(chalk.greenBright("У тебя наверное выходной ☕"))
  }
  if (watchedYouTube > 4 && hoursCoding <= 4) {
    console.log(chalk.yellow("Слишком много YouTube и мало кода! Жду отчет завтра"))
  }

  return hoursCoding * 2 + bugsFixed * 3 - coffeeCups - watchedYouTube
}

// === 2. Функция расчета успеха за неделю ===
function weeklySuccessCalc(weekStats) {
  let total = 0

  weekStats.forEach((day, index) => {
    const dailySuccess = successCalc(day.hoursCoding, day.bugsFixed, day.coffeeCups, day.watchedYouTube)
    console.log(chalk.blue(`День ${index + 1}: успех = ${dailySuccess}`))
    total += dailySuccess
  })

  console.log(chalk.bold(`\nОбщий успех за неделю: ${total}`))

  if (total >= 100) {
    console.log(chalk.greenBright("🔥 Невероятно продуктивная неделя!"))
  } else if (total >= 70) {
    console.log(chalk.yellow("💡 Хорошо поработал, есть потенциал!"))
  } else {
    console.log(chalk.red("😴 Надо бы поднажать на следующей неделе..."))
  }
}

// === 3. Пример входных данных за неделю ===
const weekStats = [
  { hoursCoding: 4, bugsFixed: 2, coffeeCups: 2, watchedYouTube: 1 }, // Понедельник
  { hoursCoding: 5, bugsFixed: 3, coffeeCups: 3, watchedYouTube: 2 }, // Вторник
  { hoursCoding: 6, bugsFixed: 2, coffeeCups: 2, watchedYouTube: 2 }, // Среда
  { hoursCoding: 0, bugsFixed: 3, coffeeCups: 3, watchedYouTube: 5 }, // Четверг
  { hoursCoding: 3, bugsFixed: 1, coffeeCups: 1, watchedYouTube: 1 }, // Пятница
  { hoursCoding: 7, bugsFixed: 4, coffeeCups: 4, watchedYouTube: 2 }, // Суббота
  { hoursCoding: 0, bugsFixed: 0, coffeeCups: 1, watchedYouTube: 4 }, // Воскресенье
]

// === 4. Запуск расчета ===
weeklySuccessCalc(weekStats)