function registerUser(name, email, password) {
    var found

    for (var i = 0; i < users.length; i++) {
        var user = users[i]

        if (user.email === email) {
            found = user

            break
        }
    }

    if (found)
        return false
    else {
        var user = {}

        user.name = name
        user.email = email
        user.password = password

        users.push(user)

        return true
    }
}