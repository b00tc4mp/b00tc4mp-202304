function retrieveUser(email) {
    const user = users.find(user => user.email === email)

    if (!user)
        return false

    const _user = {
        name: user.name,
        email: user.email,
        favorites: user.favorites 
    }

    return _user
}