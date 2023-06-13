function modifyPost(email, postId, picture, text) {
    const user = users.find(user => user.email === email)

    if (!user)
        return false

    const post = posts.find(post => post.id === postId)

    if(!post)
        return false

    if (post.user !== email)
        return false

    post.picture = picture
    post.text = text
    post.date = new Date
    
    return true
}
