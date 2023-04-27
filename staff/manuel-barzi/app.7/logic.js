function authenticateUser(email, password) {
    let foundUser

    for (let i = 0; i < users.length; i++) {
        const user = users[i]

        if (user.email === email && user.password === password) {
            foundUser = user

            break
        }
    }

    if (foundUser)
        return true
    else
        return false
}

function registerUser(name, email, password) {
    let foundUser

    for (let i = 0; i < users.length; i++) {
        var user = users[i]

        if (user.email === email) {
            foundUser = user

            break
        }
    }

    if (foundUser)
        return false
    else {
        const user = {}

        user.name = name
        user.email = email
        user.password = password

        users.push(user)

        return true
    }
}

function createPost(email, picture, text) {
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

    var post = {}

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

    posts.push(post)

    return true
}

function retrievePosts(email) {
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

    return posts
}

function modifyPost(email, postId, picture, text) {
    // DONE check the user exists, otherwise return false
    // DONE check the post exists, otherwise return false
    // DONE update the picture and/or text and return true

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