function createPost (email, picture, text ) {
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

    let id

    if (!posts.length)
        id = 'post-1'
    else {
        const last = posts[posts.length - 1]

        const num = Number(last.id.slice(5))

        id = 'post-' + (num + 1)
    }

    post.user = email
    post.id = id
    post.picture = picture
    post. text = text 
    post.date = new Date 
    post.likes = []

    posts.push(post)

    return true 
}