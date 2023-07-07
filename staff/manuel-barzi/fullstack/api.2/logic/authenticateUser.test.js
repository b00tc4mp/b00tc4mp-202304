const authenticateUser = require('./authenticateUser')

try {
    authenticateUser('po@tato.com', '123123123', (error, userId) => {
        if (error) {
            console.error(error)

            return
        }

        console.log(userId)
    })
} catch (error) {
    console.error(error)
}