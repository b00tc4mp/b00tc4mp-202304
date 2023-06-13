function toggleLikePost(email, postId) {
    const user = users.find(user => user.email === email)

    if (!user)
        return false

    const post = posts.find(post => post.id === postId)

    if (!post)
        return false

    const index = post.likes.indexOf(context.email)

    if (index < 0)
        post.likes.push(email)
    else 
        post.likes.splice(index, 1)
    
    return true
}