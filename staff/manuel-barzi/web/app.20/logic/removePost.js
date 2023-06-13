function removePost(email, postId) {
    const user = users.find(user => user.email === email)

    if (!user)
        return false

    const post = posts.find(post => post.id === postId)

    if (!post)
        return false

    if (post.user !== email)
        return false

    const index = posts.findIndex(post => post.id === postId)

    posts.splice(index, 1)

    return true
}