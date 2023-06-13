function retrieveMinePosts(email) {
    const user = users.find(user => user.email === email)

    if(!user)
        return false

    return posts.filter(post => post.user === user.email)
}