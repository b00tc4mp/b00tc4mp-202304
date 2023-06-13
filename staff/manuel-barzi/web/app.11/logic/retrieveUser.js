function retrieveUser(email) {
    let foundUser

    for (let i = 0; i < users.length; i++) {
        const user = users[i]

        if (user.email === email) {
            foundUser = user

            break
        }
    }

    if (!foundUser)
        return false

    const user = {
        name: foundUser.name,
        email: foundUser.email,
        favs: foundUser.favs
    }

    return user
}