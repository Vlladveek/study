const school = {
    ivan: {
        age: 15,
        grades: [10, 8, 9, 11]
    },
    maria: {
        age: 14,
        grades: [12, 11, 10, 12]
    },
    petro: {
        age: 16,
        grades: [7, 6, 8]
    }
};

function get_student_names(students) {
    //создаём пустой массив для имён
    const names = []
    for (let name in students) {  //перебираем всех учеников в объекте
        names.push(name)   // добавляем имя ученика в массив
    }
    return names  //возвращаем массив имён
}
console.log(get_student_names(school))   // выводим имена учеников школы в консоль

function find_student_by_name(name, students) {
   /* let found = false
    for (let student in students) {    // перебираем всех учеников в объекте school
        if (student === name) {    //проверяем совпадает ли имя ученика с искомым
            found = true
            break
        }
    }
    if (found) {
        console.log(`The student ${name} has found!`)
    } else {
        console.log(`The student ${name} has not found!`)
    }*/
    const found_student = Object.keys(students).find((name_student) => {
        return name_student === name 
    })
    if (found_student) {
        console.log(`The student ${name} has found!`)
    } else {
        console.log(`The student ${name} has not found!`)
    }
}

console.log(find_student_by_name("petro", school));

function get_average_score(students) {
    const results = []
    for (let name in students) {
        let grades = students[name].grades
        let suma = 0
        for (let index = 0; index < grades.length; index++) {
            suma += grades[index]
        }
        results.push(`${name}: ${suma / grades.length}`)
    }
    return results
}
console.log(get_average_score(school))

const students_names = get_student_names(school)
for(let index = 0; index < students_names.length; index++) {
    let name = students_names[index]
    console.log(`${name} - ${get_student_summary(school[name])}`)
}
function get_student_summary(student) {
    let suma = 0;

    for (let i = 0; i < student.grades.length; i++) {
        suma += student.grades[i];
    }

    const average = suma / student.grades.length;

    return average >= 10 ? "Отличник" :
        average >= 8 ? "Хорошист" :
            "Нужно подтянуть";

}
//console.log(get_student_summary(school.ivan));