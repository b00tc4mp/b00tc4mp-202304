function authenticateUser(email, password) {
    const user = users.find(user => user.email === email)

    if (!user)
        return false
    
    if (user.password !== password)
        return false
    
    return true
}