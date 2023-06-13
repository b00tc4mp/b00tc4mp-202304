function toggleFavPost(email, postId) {
    const user = users.find(user => user.email === email)

    if (!user)
        return false

    const post = posts.find(post => post.id === postId)

    if (!post)
        return false
    
    const index = user.favorites.indexOf(postId)

    if (index >= 0)
        user.favorites.splice(index, 1)
    else 
        user.favorites.push(postId)
    
    return true 
}