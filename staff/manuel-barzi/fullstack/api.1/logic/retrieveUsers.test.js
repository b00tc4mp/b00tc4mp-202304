const retrieveUsers = require('./retrieveUsers')

retrieveUsers((error, users) => {
    if (error) {
        console.error(error)

        return
    }

    console.log(users)
})