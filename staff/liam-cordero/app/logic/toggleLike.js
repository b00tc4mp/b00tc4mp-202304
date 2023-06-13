function toggleLikePost(email, postId) {
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

    const index = foundPost.likes.indexOf(context.email)

    if (index < 0)
        foundPost.likes.push(context.email)
    else
        foundPost.likes.splice(index, 1)

    return true
}
