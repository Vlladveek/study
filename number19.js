const students = [
    { name: "Аня", age: 17, grade: "A" },
    { name: "Иван", age: 19, grade: "B" },
    { name: "Олег", age: 20, grade: "C" },
    { name: "Маша", age: 18, grade: "A" }
]

function getBestStudents(students) {
    const bestStudets = []
    for (let index = 0; index < students.length; index++) {
        if (students[index].grade === "A") {
            bestStudets.push(students[index].name)
        }
        // return bestStudets
    }
    return bestStudets
}
const bestStudets = getBestStudents(students);
console.log("Лучшие студенты:", bestStudets);