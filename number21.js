const allowedUsers = ["Alice", "Bob", "Charlie"]
function checkAccess(name) {
    if(allowedUsers.includes(name)) {
        console.log("Доступ разрешен")
    } else {
        console.log("Доступ запрещен")
    }
}
checkAccess("Alice")