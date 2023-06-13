function retrievePost(email) {
   const user = users.find(user => user.email === email)

    if (!user)
        return false

    return posts
}