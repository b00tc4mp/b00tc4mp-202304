function buyPost(email, postId) {
    const user = users.find(user => user.email === email)
    
    if(!user)
        return false
    
    const post = posts.find(post => post.id === postId)

    if(!user)
        return false
    
    if(post.user === email)
        return false
    
    post.user = email
    post.price = 0

    return true
}