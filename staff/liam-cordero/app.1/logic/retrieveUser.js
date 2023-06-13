function retrieveUser(email) {
    const user = users.find(user => user.email === email)

    if (!user)
        return false

    const _user = {
        name: user.name,
        email: user.email,
        favs: user.favs
    }

    return _user
}
