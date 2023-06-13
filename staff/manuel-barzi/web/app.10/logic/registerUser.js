function registerUser(name, email, password) {
    let foundUser

    for (let i = 0; i < users.length; i++) {
        const user = users[i]

        if (user.email === email) {
            foundUser = user

            break
        }
    }

    if (foundUser)
        return false
    else {
        const user = {}

        user.name = name
        user.email = email
        user.password = password

        users.push(user)

        return true
    }
}