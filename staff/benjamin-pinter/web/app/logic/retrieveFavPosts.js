function retrieveFavPosts(email){
    const user = users.find(user => user.email === email)

    if (!user)
        return false
    
    return posts.filter(post => user.favs.includes(post.id) && (post.user === email || (post.user !== email && post.visibility === 'public')))
}