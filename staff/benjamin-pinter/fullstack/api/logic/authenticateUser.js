const context = require('./context')

function authenticateUser(email, password) {
    if (typeof email !== 'string') throw new Error('email is not a string')
    if (typeof password !== 'string') throw new Error('password is not a string')

    const { users } = context

    return users.findOne({ email })
        .then(user => {
            if(!user) throw new Error('user not found')

            if (user.password !== password) throw Error('wrong password')
            //TODO wozu strich
            return user._id.toString()
        })
}

module.exports = authenticateUser