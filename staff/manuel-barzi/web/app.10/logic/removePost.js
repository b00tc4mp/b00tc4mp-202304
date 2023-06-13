function removePost(email, postId) {
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

    let foundPost

    for (let i = 0; i < posts.length; i++) {
        const post = posts[i]

        if (post.id === postId) {
            foundPost = post

            break
        }
    }

    if (!foundPost)
        return false

    if (foundPost.user !== email)
        return false

    const postIndex = posts.findIndex(post => post.id === postId)

    posts.splice(postIndex, 1)

    return true
}