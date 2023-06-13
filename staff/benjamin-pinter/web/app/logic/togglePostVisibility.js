function togglePostVisibility(email, postId) {
   const user = users.find(user => user.email === email)

    if (!user)
        return false

    const post = posts.find(post => post.id === postId)

    if (!post)
        return false

    if (post.user !== email)
        return false
    
    // if (foundPost.status === 'public')
    //     foundPost.status = 'private'
    // else (foundPost.status === 'private')
    //     foundPost.status = 'public'

    post.visibility = post.visibility === 'public'? 'private' : 'public'
    
    return true
}