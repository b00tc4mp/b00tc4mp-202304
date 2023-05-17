function createPost(email, picture, text) {
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

    const post = {}

    let id

    if (!posts.length)
        id = 'post-1'
    else {
        const last = posts[posts.length - 1]

        const num = Number(last.id.slice(5))

        id = 'post-' + (num + 1)
    }

    post.id = id
    post.user = email
    post.picture = picture
    post.text = text
    post.date = new Date
    post.likes = []

    posts.push(post)

    return true
}