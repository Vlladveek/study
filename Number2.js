import chalk from 'chalk'
weekSuccessCalc()



function successCalc(hoursCoding, bugsFixed, coffeeCups, watchedYouTube) {
  if (hoursCoding === 0) {
    console.log(chalk.bgGreen.red("У тебя наверное выходной"))
  }
  if (watchedYouTube > 4 && hoursCoding <= 4) {
    console.log("Жду отчет завтра")
  }
  return hoursCoding * 2 + bugsFixed * 3 - coffeeCups - watchedYouTube
}
function weekSuccessCalc() {
  let sumaUspex = 0

  sumaUspex = sumaUspex + successCalc(5, 6, 9, 1)
  sumaUspex = sumaUspex + successCalc(2, 3, 7, 3)
  sumaUspex = sumaUspex + successCalc(5, 9, 1, 4)
  sumaUspex = sumaUspex + successCalc(1, 6, 5, 7)
  sumaUspex = sumaUspex + successCalc(6, 8, 2, 2)
  weeklySuccessMessage(sumaUspex)
}
function weeklySuccessMessage(resultWeek) {
  if (resultWeek >= 100) {
    console.log("Невероятная продуктивная неделя!")
  } else if (resultWeek >= 70) {
    console.log("Хорошо поработал, есть потенциал!")
  } else {
    console.log("Надо бы поднажать на следущющей неделе...")
  }
}