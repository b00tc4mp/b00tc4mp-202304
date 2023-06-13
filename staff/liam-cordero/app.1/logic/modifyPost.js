function modifyPost(email, postId, picture, text) {
    let foundUser

    for (let i = 0; i < users.length; i++) {
        var user = users[i]

        if (user.email === email) {
            foundUser = user

            break
        }
    }

    if (!foundUser)
        return false

    var foundPost

    for (let i = 0; i < posts.length; i++) {
        var post = posts[i]

        if (post.id === postId) {
            foundPost = post

            break
        }
    }

    if (!foundPost)
        return false

    foundPost.picture = picture
    foundPost.text = text
    foundPost.date = new Date

    return true
}
