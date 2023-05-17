function toggleFavPost(email, postId) {
    const user = users.find(user => user.email === email)

    if (!user)
        return false

    const post = posts.find(post => post.id === postId)

    if (!post)
        return false

    const index = user.favs.indexOf(postId)

    if (index < 0)
        user.favs.push(postId)
    else
        user.favs.splice(index, 1)

    return true
}