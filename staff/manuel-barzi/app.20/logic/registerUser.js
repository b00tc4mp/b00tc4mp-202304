function registerUser(name, email, password) {
    let user = users.find(user => user.email === email)

    if (user)
        return false
    else {
        user = {}

        user.name = name
        user.email = email
        user.password = password

        users.push(user)

        return true
    }
}