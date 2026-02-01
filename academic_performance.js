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

function find_student_by_name(name) {
    for (let student in school) {    // перебираем всех учеников в объекте school
        if (student === name) {       //проверяем совпадает ли имя ученика с искомым
            console.log(`The student ${name} has found!`)
        } else {
            console.log(`The student ${name} has not found!`)
        }
    }
}

console.log(find_student_by_name("мак", school));

function get_average_score(students) {
    const results = {}
    for (let name in students) {
        let grades = students[name].grades
        let suma = 0
        for (let index = 0; index < grades.length; index++) {
            suma += grades[index]
        }
        results[name] = suma / grades.length
    }
    return results
}
get_average_score(school);

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
console.log(get_student_summary(school.ivan));