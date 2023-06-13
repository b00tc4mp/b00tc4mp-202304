function authenticateUser(email, password) {
    var found

    for (var i = 0; i < users.length; i++) {
        var user = users[i]

        if (user.email === email && user.password === password) {
            found = user

            break
        }
    }

    if (found)
        return true
    else
        return false
}


