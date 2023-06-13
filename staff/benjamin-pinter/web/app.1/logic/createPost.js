function createPost(email, picture, text) {
    const user = users.find(user => user.email === email)

    if (!user)
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
    post.visibility = 'public'
    post.price = 0

    posts.push(post)

    return true
}
