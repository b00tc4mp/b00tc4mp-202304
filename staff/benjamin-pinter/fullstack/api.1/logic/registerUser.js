const context = require('./context')


function registerUser(name, email, password) {
    if (typeof name !== 'string') throw new Error('name is not a string')
    if (typeof email !== 'string') throw new Error('email is not a string')
    if (typeof password !== 'string') throw new Error('password is not a string')

    //const users = context.users
    const { users } = context

    return users.findOne({ email })
        .then(user => {
            if (user) throw new Error('user already exists')

            return users.insertOne({ name, email, password })
        })
        .then(result => { })
}

module.exports = registerUser