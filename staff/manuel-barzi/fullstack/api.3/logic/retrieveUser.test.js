const retrieveUser = require('./retrieveUser')

try {
    retrieveUser(2, (error, user) => {
        if (error) {
            console.log(error)

            return
        }

        console.log(user)
    })
} catch (error) {
    console.error(error)
}