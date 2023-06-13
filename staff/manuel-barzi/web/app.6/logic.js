function authenticateUser(email, password) {
    var found

    for (var i = 0; i < users.length; i++) {
        var user = users[i]

        if (user.email === email && user.password === password) {
            found = user

            break
        }
    }

    if (found)
        return true
    else
        return false
}

function registerUser(name, email, password) {
    var found

    for (var i = 0; i < users.length; i++) {
        var user = users[i]

        if (user.email === email) {
            found = user

            break
        }
    }

    if (found)
        return false
    else {
        var user = {}

        user.name = name
        user.email = email
        user.password = password

        users.push(user)

        return true
    }
}

function createPost(email, picture, text) {
    var found

    for (var i = 0; i < users.length; i++) {
        var user = users[i]

        if (user.email === email) {
            found = user

            break
        }
    }

    if (!found)
        return false

    var post = {}

    post.user = email
    post.picture = picture
    post.text = text
    post.date = new Date

    posts.push(post)

    return true
}

function retrievePosts(email) {
    var found

    for (var i = 0; i < users.length; i++) {
        var user = users[i]

        if (user.email === email) {
            found = user

            break
        }
    }

    if (!found)
        return false

    return posts
}