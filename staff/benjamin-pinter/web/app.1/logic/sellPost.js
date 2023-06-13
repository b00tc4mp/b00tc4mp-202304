function sellPost(email, postId, price) {
    const user = users.find(user => user.email === email)
    
    if(!user)
        return false
    
    const post = posts.find(post => post.id === postId)

    if(!user)
        return false
    
    if(post.user !== email)
        return false
    
    post.price = price

    return true
}