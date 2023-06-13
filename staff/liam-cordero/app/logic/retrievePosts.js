function retrievePosts(email) {
    var found 

    for (var i = 0; i < users.length; i++) {
        var user = users[i]

        if (user.email === email) {
            foundUser = user

            break 
        }
    }

    if (!foundUser)
        return false 

    return posts 

}
