const userArr = '{"age": "Bob"}'      //"name": "Bob"
function parseUser(jsonString) {
    let arrUser
    try {
        arrUser = JSON.parse(jsonString)
        //if (typeof arrUser.name !== "string" || arrUser.name === "") {
        // throw new Error("Invalid JSON")
        //}
        if (!arrUser.hasOwnProperty("name")) {
            throw new Error("No name found")
        }
        return arrUser.name
    } catch (err) {
        throw new Error("Invalid JSON")
    }
}

console.log(parseUser(userArr))
