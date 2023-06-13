function togglePostStatus(email, postId) {
    const user = users.find(user => user.email === email)

    if (!user)
        return false

    const post = posts.find(post => post.id === postId)

    if (!post)
        return false

    if (post.user !== email)
        return false

    post.status = post.status === 'public'? 'private' : 'public'

    return true
}